export function fetchCountries(inputValue) {
    const fetchedCountries = `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`;
    return fetch(fetchedCountries)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}