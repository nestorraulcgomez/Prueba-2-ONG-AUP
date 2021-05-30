function changeBreed(tabla, apiName) {
  const nroTotalImagenes = 10;
  const nroColumnasPorFila = 5;
  const selectorTablaHTML = `#${tabla}`;
  const currentValue = $("#selectRazas").val();
  const breedId = currentValue != "Random" ? `&breed_id=${currentValue}` : "";
  const url = `https://api.${apiName}.com/v1/images/search?limit=${nroTotalImagenes}${breedId}`;

  $(selectorTablaHTML).empty();
  generar_galeria_imagenes(
    selectorTablaHTML,
    nroTotalImagenes,
    nroColumnasPorFila,
    url,
    "Cambiar Imagen"
  );
}
