export default class Services {
  #headers = {
    "x-api-key": "ERqAaw7APuiC3OfvkoN+FQ==nE5Q6oxLpz6dgCX7",
  };

  getJoke = () => {
    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?limit=1", {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };

  getFacts = () => {
    fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
      method: "GET",
      headers: this.#headers,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {});
  };
}
