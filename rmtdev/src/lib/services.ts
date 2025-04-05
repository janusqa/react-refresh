import { BASE_API_URL } from './constants';
import {
    TJobItem,
    TJobItemDetails,
    TJobItemApiResponse,
    TJobItemsApiResponse,
} from './types';

export const getJobItem = async (
    id: number | null
): Promise<TJobItemDetails> => {
    if (!id) throw new Error('Job ID not present');
    const response = await fetch(`${BASE_API_URL}/${id}`);
    if (!response.ok) {
        const errorData = (await response.json()) as { description: string };
        throw new Error(errorData.description);
        // throw new Error(
        //     `Network response was not ok. (${response.status} | ${response.statusText})`
        // );
    }
    const data = (await response.json()) as TJobItemApiResponse;
    return data.jobItem;
};

export const getJobItems = async (text: string): Promise<TJobItem[]> => {
    const response = await fetch(`${BASE_API_URL}?search=${text}`);
    if (!response.ok) {
        const errorData = (await response.json()) as { description: string };
        throw new Error(errorData.description);
        // throw new Error(
        //     `Network response was not ok. (${response.status} | ${response.statusText})`
        // );
    }
    const data = (await response.json()) as TJobItemsApiResponse;
    return data.jobItems;
};
