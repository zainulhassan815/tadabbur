import z from "zod";

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

export {
  WordTranslation,
  WordTransliteration,
  Word,
  VerseAudio,
  Translation,
  Verse,
};
