const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", options);
  const data = await response.json();
  return data.joke;
}

module.exports = getJoke;