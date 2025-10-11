import { apiClient } from "@/lib/quran/client";

class QuranApiService {
  async getRandomAyah() {
    const response = await apiClient.get("/content/api/v4/verses/random", {
      params: {
        fields: "verse_key,text_uthmani,translations",
        translations: "131",
      },
    });
    return response.data;
  }
}

const quranApiService = new QuranApiService();

export { quranApiService };
