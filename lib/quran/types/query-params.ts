import type {
  TranslationField,
  VerseLevelField,
  WordLevelField,
} from "@/lib/quran/types";

type RandomAayahQueryParams = {
  chapter_number?: number;
  page_number?: number;
  juz_number?: number;
  hizb_number?: number;
  rub_el_hizb_number?: number;
  ruku_number?: number;
  manzil_number?: number;
  language?: string;
  words?: "true" | "false";
  translations?: string;
  audio?: number;
  tafsirs?: string;
  word_fields?: WordLevelField | `${WordLevelField},${string}`;
  translation_fields?: TranslationField | `${TranslationField},${string}`;
  fields?: VerseLevelField | `${VerseLevelField},${string}`;
};

export type { RandomAayahQueryParams };
