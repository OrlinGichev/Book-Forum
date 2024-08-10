import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books';

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`);

    return result;
}

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const create = async (data) => {
       const result = await request.post(baseUrl, data);

    return result;
}

export const edit = async (bookId, bookData) => {

    const result = await request.put(`${baseUrl}/${bookId}`, bookData);	

    return result;
}

export const remove = async (bookId) => request.remove(`${baseUrl}/${bookId}`);