// shared/api/base.ts

export const API_URL = 'https://www.cheapshark.com/api/1.0/';

class ApiInstance {
    async get<T>(url: string): Promise<T> {
        try {
            const response = await fetch(`${API_URL}${url}`);
            if (response.status !== 200) {
                throw new Error('Looks like there was a problem. Status Code: ' + response.status);
            }
            // Парсим JSON из ответа
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Fetch Error :-S ' + error);
        }
    }
}

export const apiInstance = new ApiInstance();
