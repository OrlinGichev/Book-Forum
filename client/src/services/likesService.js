import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const getLikes = async (bookId) => {
    const likes = await request.get(`${baseUrl}?where=bookId="${bookId}"`);
    return likes;
}

export const likeBook = async (bookId, userId) => {
    const likeData = {
        bookId,
        userIds: [userId],
    };

    const existingLikes = await getLikes(bookId);
        if(existingLikes.length > 0) {
            const existingLike = existingLikes[0];
            if(existingLike.userIds.includes(userId)) {
                existingLike.userIds.push(userId);
                return await request.put(`${baseUrl}/${existingLike.id}`, existingLike);
            }
        }else {
            return await request.post(baseUrl, likeData);
        }
}

export const unlikeBook = async (bookId, userId) => {
    const existingLikes = await getLikes(bookId);
    if (existingLikes.length > 0) {
        const existingLike = existingLikes[0];
        existingLike.userIds = existingLike.userIds.filter(id => id !== userId);

        if (existingLike.userIds.length > 0) {
            return await request.put(`${likesUrl}/${existingLike.id}`, existingLike);
        } else {
            return await request.remove(`${likesUrl}/${existingLike.id}`);
        }
    }
}