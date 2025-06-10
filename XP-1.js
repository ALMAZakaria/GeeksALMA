    //  Exercise 1: Giphy API - hilarious gifs
    const url1 = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    fetch(url1)
      .then(response => {
        if (!response.ok) {
          throw new Error("Exercise 1 Error: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(" Exercise 1: Hilarious GIFs");
        console.log(data);
      })
      .catch(error => {
        console.error("Exercise 1 Fetch error:", error);
      });

    //  Exercise 2: Giphy API - sun gifs
    const url2 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    fetch(url2)
      .then(response => {
        if (!response.ok) {
          throw new Error("Exercise 2 Error: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(" Exercise 2: Sun GIFs (10, start at 2)");
        console.log(data);
      })
      .catch(error => {
        console.error("Exercise 2 Fetch error:", error);
      });

    //  Exercise 3: Async function for Star Wars API
    async function getStarship() {
      try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
          throw new Error("Exercise 3 Error: " + response.status);
        }
        const data = await response.json();
        console.log(" Exercise 3: Star Wars Starship Result");
        console.log(data.result);
      } catch (error) {
        console.error("Exercise 3 Error:", error);
      }
    }

    getStarship();

    //  Exercise 4: Analyze Async Function
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log(" Exercise 4: Calling Async Function");
      let result = await resolveAfter2Seconds();
      console.log(result);
    }

    asyncCall();