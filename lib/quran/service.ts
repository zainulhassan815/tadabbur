import { apiClient } from "@/lib/quran/client";
import {
  type RandomAayahQueryParams,
  RandomAayahResponse,
} from "@/lib/quran/types";

class QuranApiService {
  async getRandomAyah(
    params: RandomAayahQueryParams = {},
  ): Promise<RandomAayahResponse> {
    const response = await apiClient.get("/content/api/v4/verses/random", {
      params,
    });
    return RandomAayahResponse.parse(response.data);
  }
}

const quranApiService = new QuranApiService();

export { quranApiService, type RandomAayahQueryParams };
