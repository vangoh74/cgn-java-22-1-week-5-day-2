export const fetchCharacters = (url : string) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network error")
        })
        .catch(console.error);
}