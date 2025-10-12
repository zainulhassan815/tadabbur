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

export { VerseLevelFields, WordLevelFields, TranslationFields };
export type { VerseLevelField, WordLevelField, TranslationField };
