import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const getLikes = async (bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
    });

    const url = `${baseUrl}?${query}`;

    try {
        const likes = await request.get(url);
        if (Array.isArray(likes) && likes.length === 0) {
            // Ако няма резултати, върнете празен масив
            return [];
        }
        return likes;
    } catch (error) {
        console.error('Error fetching likes:', error);
        return [];
    }
};


export const likeBook = async (bookId, userId) => {
    const likeData = {
        bookId,
        userIds: [userId],
    };

    const existingLikes = await getLikes(bookId);
    if (!existingLikes || existingLikes.length === 0) {
        // Създаване на нов запис за харесване
        return await request.post(baseUrl, likeData);
    }else {
        const existingLike = existingLikes[0];

        // Проверка дали потребителят вече е харесал книгата
        if (!existingLike.userIds.includes(userId)) {
            existingLike.userIds.push(userId);
            return await request.put(`${baseUrl}/${existingLike.id}`, existingLike);
        } else {
            // Потребителят вече е харесал книгата, няма нужда от допълнителна операция
            return existingLike;
        }
    }
}

export const unlikeBook = async (bookId, userId) => {
    const existingLikes = await getLikes(bookId);
    if (existingLikes.length > 0) {
        const existingLike = existingLikes[0];
        existingLike.userIds = existingLike.userIds.filter(id => id !== userId);
        
        if (existingLike.userIds.length > 0) {
            return await request.put(`${baseUrl}/${existingLike._id}`, existingLike);
        } else {
            return await request.remove(`${baseUrl}/${existingLike._id}`);
        }
    }
}