const baseUrl = 'http://localhost:3030/jsonstore';

export const createBook = async (data) => {
    const response = await fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });

    const result = await response.json();

    return result;
}