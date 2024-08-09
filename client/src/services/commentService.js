import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';


export const getAll = async (bookId) => {

    const result = await request.get(baseUrl);

    return Object.values(result).filter(comment => comment.bookId === bookId);
};

export const create = async (bookId, username, text) => {
    const newComment = await request.post(baseUrl, {
        bookId,
        username,
        text,
    });

 return newComment;
}