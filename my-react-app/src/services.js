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

  getJoke = (limit = 1) => {
    fetch(`https://api.api-ninjas.com/v1/jokes?limit=${limit}`, {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getQuote = (limit = 1) => {
    fetch(`https://api.api-ninjas.com/v1/quotes?limit=${limit}`, {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getFacts = (limit = 1) => {
    fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getCats = (limit = 1) => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
      method: "GET",
      headers: this.#catHeader,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getDogs = (limit = 1) => {
    fetch(`https://api.thedogapi.com/v1/images/search?limit=${limit}`, {
      method: "GET",
      headers: this.#dogHeader,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };
}
