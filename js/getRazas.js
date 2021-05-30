$(document).ready(function () {
  const nameAnimal = $("body > div > main > div > div > section > h2").text();

  const domainAnimal = nameAnimal == "Perros" ? "thedogapi" : "thecatapi"; //if ternario

  // var selectorTablaHTML = listAnimals;
  var url = `https://api.${domainAnimal}.com/v1/breeds`;

  $.get(url, (response) => {
    console.log("response: ", response);
    response.forEach((breed) =>
      $("#selectRazas").append(
        `<option value=${breed.id}>${breed.name}</option>`
      )
    );
  });
});
