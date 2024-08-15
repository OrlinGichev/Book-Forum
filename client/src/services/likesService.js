import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';


export const getLikes = async (bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
    });
   
    const url = `${baseUrl}?${query}`;

    try {
        const likes = await request.get(url);
        
        if (Array.isArray(likes)) {
            return likes;
        } else {
            return []; 
        }
    } catch (error) {
        console.error('Error getting likes:', error);
        return []; 
    }
};


export const userHasLiked = async (bookId, userId) => {
    const userUrl = `${baseUrl}/${userId}`;
    try {
        const user = await request.get(userUrl);
        const result = user.likedBooks && user.likedBooks.includes(bookId);
        console.log(result);
        return result
    } catch (error) {
        if (error.code === 404) {
            return false;
        } else {
            console.error('Error checking if user liked the book:', error);
            return false;
        }
    }
};



export const likeBook = async (bookId, userId) => {
    try {
        const userUrl = `${baseUrl}/${userId}`;

      
        let userData;
        try {
            userData = await request.get(userUrl);
        } catch (error) {
            if (error.code === 404) {
                           
                return await request.post(userUrl, { likedBooks: [bookId] });
            } else {
            
                throw error;
            }
        }

       
        userData.likedBooks = userData.likedBooks || [];

       
        console.log(userData.likedBooks);
        if (!userData.likedBooks.includes(bookId)) {
            
            userData.likedBooks.push(bookId);
            return await request.put(userUrl, userData);
        } else {
            console.log('User has already liked this book.');
            return userData;
        }
    } catch (error) {
        console.error('Error liking book:', error);
    }
};






// Премахване на харесване
export const unlikeBook = async (bookId, userId) => {
    try {
        const user = await request.get(`${baseUrl}/${userId}`);

        user.likedBooks = user.likedBooks.filter(id => id !== bookId);
        
        await request.put(`${baseUrl}/${userId}`, user);
    } catch (error) {
        console.error('Error unliking book:', error);
    }
};

export const getLikesCount = async (bookId) => {
    try {
        const likes = await getLikes(bookId);
        return likes.length;
    } catch (error) {
        console.error('Error getting likes count:', error);
        return 0; 
    }
};