import z from "zod";

const AccessTokenResponse = z.object({
  access_token: z.string(),
  token_type: z.literal("bearer"),
  expires_in: z.number(),
  scope: z.string(),
});

type AccessTokenResponse = z.infer<typeof AccessTokenResponse>;

const WordTranslation = z.object({
  text: z.string().optional(),
  language_name: z.string().optional(),
});

type WordTranslation = z.infer<typeof WordTranslation>;

const WordTransliteration = z.object({
  text: z.string().optional(),
  language_name: z.string().optional(),
});

type WordTransliteration = z.infer<typeof WordTransliteration>;

const Word = z.object({
  id: z.number().optional(),
  position: z.number(),
  text_uthmani: z.string().optional(),
  text_indopak: z.string().optional(),
  text_imlaei: z.string().optional(),
  verse_key: z.string().optional(),
  line_number: z.number().optional(),
  audio_url: z.string(),
  location: z.string().optional(),
  char_type_name: z.string(),
  code_v1: z.string().optional(),
  code_v2: z.string().optional(),
  translation: WordTranslation,
  transliteration: WordTransliteration,
  v1_page: z.number().min(1).max(604).optional(),
  v2_page: z.number().min(1).max(604).optional(),
});

type Word = z.infer<typeof Word>;

const Translation = z.object({
  resource_id: z.number(),
  resource_name: z.string().optional(),
  id: z.number().optional(),
  text: z.string(),
  verse_id: z.number().optional(),
  language_id: z.number().optional(),
  language_name: z.string().optional(),
  verse_key: z.string().optional(),
  chapter_id: z.number().optional(),
  verse_number: z.number().optional(),
  juz_number: z.number().optional(),
  hizb_number: z.number().optional(),
  rub_number: z.number().optional(),
  page_number: z.number().optional(),
});

type Translation = z.infer<typeof Translation>;

const VerseAudio = z.object({
  url: z.string().optional(),
  duration: z.number().optional(),
  format: z.string().optional(),
  segments: z.array(z.any()).optional(),
});

type VerseAudio = z.infer<typeof VerseAudio>;

const Verse = z.object({
  id: z.number(),
  chapter_id: z.number().optional(),
  verse_number: z.number(),
  verse_key: z.string(),
  verse_index: z.number().optional(),
  text_uthmani: z.string().optional(),
  text_uthmani_simple: z.string().optional(),
  text_imlaei: z.string().optional(),
  text_imlaei_simple: z.string().optional(),
  text_indopak: z.string().optional(),
  text_uthmani_tajweed: z.string().optional(),
  juz_number: z.number().optional(),
  hizb_number: z.number().optional(),
  rub_number: z.number().optional(),
  image_url: z.string().optional(),
  image_width: z.number().optional(),
  words: z.array(Word).optional(),
  audio: VerseAudio.optional(),
  url: z.string().optional(),
  translations: z.array(Translation).optional(),
  code_v1: z.string().optional(),
  code_v2: z.string().optional(),
  v1_page: z.number().min(1).max(604).optional(),
  v2_page: z.number().min(1).max(604).optional(),
});

type Verse = z.infer<typeof Verse>;

/**
 * These fields can be used in the `fields` query parameter.
 */
const VerseLevelFields = [
  "chapter_id",
  "text_indopak",
  "text_imlaei_simple",
  "text_imlaei",
  "text_uthmani",
  "text_uthmani_simple",
  "text_uthmani_tajweed",
  "text_qpc_hafs",
  "qpc_uthmani_hafs",
  "text_qpc_nastaleeq_hafs",
  "text_qpc_nastaleeq",
  "text_indopak_nastaleeq",
  "image_url",
  "image_width",
  "code_v1",
  "code_v2",
  "page_number",
  "v1_page",
  "v2_page",
] as const;

type VerseLevelField = (typeof VerseLevelFields)[number];

/**
 * These fields can be used in the `word_fields` query parameter.
 */
const WordLevelFields = [
  "verse_id",
  "chapter_id",
  "text_uthmani",
  "text_indopak",
  "text_imlaei_simple",
  "text_imlaei",
  "text_uthmani_simple",
  "text_uthmani_tajweed",
  "text_qpc_hafs",
  "verse_key",
  "location",
  "code_v1",
  "code_v2",
  "v1_page",
  "v2_page",
  "line_number",
  "line_v2",
  "line_v1",
] as const;

type WordLevelField = (typeof WordLevelFields)[number];

/**
 * These fields can be used in the `translation_fields` query parameter.
 */
const TranslationFields = [
  "chapter_id",
  "verse_number",
  "verse_key",
  "juz_number",
  "hizb_number",
  "rub_el_hizb_number",
  "page_number",
  "ruku_number",
  "manzil_number",
  "resource_name",
  "language_name",
  "language_id",
  "id",
] as const;

type TranslationField = (typeof TranslationFields)[number];

export {
  AccessTokenResponse,
  WordTranslation,
  WordTransliteration,
  Word,
  VerseAudio,
  Translation,
  Verse,
  VerseLevelFields,
  type VerseLevelField,
  WordLevelFields,
  type WordLevelField,
  TranslationFields,
  type TranslationField,
};
