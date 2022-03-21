let moviedata;

const divTitle = document.createElement("div");
divTitle.className = "movies";

const movieTitle = document.createElement("h4");

movieTitle.innerText = "Children Movies";

divTitle.appendChild(movieTitle);

document.body.appendChild(divTitle);

fetch("http://localhost:8888/movies")
  .then((response) => {
    return response.json();
  })
  .then((moviedata) => {
    console.log(moviedata);

    for (const i in moviedata) {
      if (Object.hasOwnProperty.call(moviedata, i)) {
        const element = moviedata[i];
        console.log(element);

        let listItem = document.createElement("div");
        listItem.className = "movietitle";
        listItem.innerHTML =
          `<h4> Movie Title: ${element.name}</h4>` +
          `<h4> Rating: ${element.rating.average}</h4>` +
          `<img src= ${element.image.medium}></img>` +
          "<h3>" +
          "Movie Summary:" +
          "</h3>" +
          `${element.summary}` +
          "<hr></hr>";

        document.body.appendChild(listItem);
        // for (const j in element) {
        //   if (Object.hasOwnProperty.call(element, j)) {
        //     const element = element[j];

        //     console.log(element);

        //   }
        // }
      }
    }
  });
