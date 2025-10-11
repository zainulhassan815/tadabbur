import z from "zod";

const AccessTokenResponse = z.object({
  access_token: z.string(),
  token_type: z.literal("bearer"),
  expires_in: z.number(),
  scope: z.string(),
});

type AccessTokenResponse = z.infer<typeof AccessTokenResponse>;

export { AccessTokenResponse };
