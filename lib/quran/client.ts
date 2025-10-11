import axios from "axios";
import { env } from "@/lib/env";
import { AccessTokenResponse } from "@/lib/quran/types";

const _authClient = axios.create({
  baseURL: env.QURAN_AUTH_URL,
  timeout: 10_000,
});

let tokenCache: { accessToken: string; expiresAt: number } | null = null;

const getAccessToken: () => Promise<string> = async () => {
  // Return cached token if not expired
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.accessToken;
  }

  const auth = Buffer.from(
    `${env.QURAN_CLIENT_ID}:${env.QURAN_CLIENT_SECRET}`,
  ).toString("base64");

  try {
    const response = await _authClient.post(
      "/oauth2/token",
      "grant_type=client_credentials&scope=content",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "content-type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data = AccessTokenResponse.parse(response.data);
    tokenCache = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (data.expires_in - 60) * 1000, // Refresh 1 minute before expiry
    };
    return data.access_token;
  } catch (error) {
    console.error("Failed to fetch access token:", error);
    throw error;
  }
};

const apiClient = axios.create({
  baseURL: env.QURAN_API_URL,
  timeout: 10_000,
  headers: {
    "x-client-id": env.QURAN_CLIENT_ID,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  config.headers.set("x-auth-token", token);
  return config;
});

export { apiClient };
