import z from "zod";
import { Verse } from "@/lib/quran/types";

const AccessTokenResponse = z.object({
  access_token: z.string(),
  token_type: z.literal("bearer"),
  expires_in: z.number(),
  scope: z.string(),
});

type AccessTokenResponse = z.infer<typeof AccessTokenResponse>;

const RandomAayahResponse = z.object({
  verse: Verse,
});

type RandomAayahResponse = z.infer<typeof RandomAayahResponse>;

export { AccessTokenResponse, RandomAayahResponse };
