export async function sendDataToAPI(inputValue: string) {
    const URL = `https://dummyjson.com/users/search?q=${inputValue}`;
    const response = await fetch(URL);
    return await response.json();
}


