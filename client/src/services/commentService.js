import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (bookId, username, text) => {
    const newComment = await request.post(baseUrl, {
        bookId,
        username,
        text,
    });

 return newComment;
}