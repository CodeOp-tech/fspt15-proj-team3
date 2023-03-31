export default class Services {
  #headers = {
    "x-api-key": "ERqAaw7APuiC3OfvkoN+FQ==nE5Q6oxLpz6dgCX7",
  };

  #catHeader = {
    "x-api-key":
      "live_eQB52LKY9iGumno5wNtaNiQGMflpnVttmKYUZXTCImmERNyFoz07l69sCK7xEHr8",
  };

  #dogHeader = {
    "x-api-key":
      "live_6hBYy42WdGzHYjc6WOfL1mVmnWPRySqMXqQ3ShSWjkACe7DfiiGUMwQnTf7wIYJT",
  };

  getJoke = async (limit = 1) => {
    return fetch(`https://api.api-ninjas.com/v1/jokes?limit=${limit}`, {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        return json.map((joke) => joke.joke);
      })
      .catch((error) => {});
  };

  getQuote = async (limit = 1) => {
    return fetch(
      `https://api.api-ninjas.com/v1/quotes?category=success&limit=${limit}`,
      {
        method: "GET",
        headers: this.#headers,
      }
    )
      .then((res) => res.json())
      .then((json) => {
        return json.map((quote) => quote.quote);
      })
      .catch((error) => {});
  };

  getFacts = async (limit = 1) => {
    return fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        return json.map((fact) => fact.fact);
      })
      .catch((error) => {});
  };

  getCats = async (limit = 1) => {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
      method: "GET",
      headers: this.#catHeader,
    })
      .then((res) => res.json())
      .then((json) => {
        return json.map((cat) => cat.url);
      })
      .catch((error) => {});
  };

  getDogs = async (limit = 1) => {
    return fetch(`https://api.thedogapi.com/v1/images/search?limit=${limit}`, {
      method: "GET",
      headers: this.#dogHeader,
    })
      .then((res) => res.json())
      .then((json) => {
        return json.map((dog) => dog.url);
      })
      .catch((error) => {});
  };
}
