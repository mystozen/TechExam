/** @format */

const url =
  "https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c1d9fa538mshc86e18695303534p1d33b8jsn1c408d6e5c01",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
