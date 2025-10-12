import z from "zod";
import { apiClient } from "@/lib/quran/client";
import {
  type TranslationField,
  Verse,
  type VerseLevelField,
  type WordLevelField,
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

const RandomAayahResponse = z.object({
  verse: Verse,
});

class QuranApiService {
  async getRandomAyah(
    params: RandomAayahQueryParams = {},
  ): Promise<z.infer<typeof RandomAayahResponse>> {
    const response = await apiClient.get("/content/api/v4/verses/random", {
      params,
    });
    return RandomAayahResponse.parse(response.data);
  }
}

const quranApiService = new QuranApiService();

export { quranApiService, type RandomAayahQueryParams };
