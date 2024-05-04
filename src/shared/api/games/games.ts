// shared/api/games.ts

import { apiInstance } from "../base";

export const getGames = async (title: string) => {
    try {
        const games = await apiInstance.get(`games?title=${title}`);
        console.log('Result:', games);
        return games;
    } catch (error) {
        console.error('Ошибка при получении списка игр:', error);
        throw error;
    }
}
