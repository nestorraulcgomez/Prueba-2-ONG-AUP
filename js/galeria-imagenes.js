function generar_galeria_imagenes(
  selectorTablaHTML,
  numeroTotalImagenes,
  numeroColumnasPorFila,
  url,
  textoBoton
) {
  var spinerPrincipalHTML = "";
  spinerPrincipalHTML += "<thead>";
  spinerPrincipalHTML += "    <tr>";
  spinerPrincipalHTML += '        <th colspan="' + numeroColumnasPorFila + '">';
  spinerPrincipalHTML +=
    '            <div class="progress" style="height:32px;">';
  spinerPrincipalHTML +=
    '                <div id="barra-progreso" class="progress-bar" style="width:0%; height:32px;">0%</div>';
  spinerPrincipalHTML += "            </div>";
  spinerPrincipalHTML += "        </th>";
  spinerPrincipalHTML += "    </tr>";
  spinerPrincipalHTML += "</thead> ";

  $(selectorTablaHTML).append(spinerPrincipalHTML);
  $(selectorTablaHTML).append("<tbody></tbody>");

  var incrementoBarraProgreso = Math.floor(100 / numeroTotalImagenes);
  var avanceBarraProgreso = 0;

  $.get(url, function (response) {
    contadorImagenesCargadas = 0;
    indiceFilaActual = 0;
    filas = new Array();
    filas[indiceFilaActual] = $("<tr></tr>");
    $(selectorTablaHTML + " tbody").append(filas[indiceFilaActual]);
    console.log("response lenght : ", response.length);
    var totalResponse = response.length;
    $.each(response, function (index, element) {
      console.log("element: ", element);
      if ((index + 1) % numeroColumnasPorFila == 0) {
        indiceFilaActual++;
        filas[indiceFilaActual] = $("<tr></tr>");
        $(selectorTablaHTML + " tbody").append(filas[indiceFilaActual]);
      }

      var img = new Image();
      img.src = element.url;

      img.onload = function () {
        registroHTML = '<td class="text-center">';
        registroHTML +=
          '    <img id="imagen-' +
          element.id +
          '" src="' +
          element.url +
          '" class="img-thumbnail" style="width:200px;height:150px;" /><br/>';
        registroHTML +=
          '    <button class="btn btn-info" onclick="javascript:btnAction(\'' +
          element.id +
          "');\"  >";
        registroHTML +=
          '       <span id="ajax-loader-img-' +
          element.id +
          '" class="spinner-border spinner-border-sm"></span>';
        registroHTML += "       " + textoBoton;
        registroHTML += "    </button>";
        registroHTML += "</td>";

        var registro = $(registroHTML).hide();

        $(filas[Math.floor(index / numeroColumnasPorFila)]).append(registro);
        $("#ajax-loader-img-" + element.id).hide();
        console.log("contadorImagenesCargadas: ", contadorImagenesCargadas);
        console.log("numeroTotalImagenes: ", numeroTotalImagenes - 1);
        if (
          contadorImagenesCargadas == numeroTotalImagenes - 1 ||
          contadorImagenesCargadas == totalResponse - 1
        ) {
          $(selectorTablaHTML + " td").fadeIn(2000);
          console.log("Galería de imagenes completada");
          actualizarBarraProgreso(100);
        } else {
          contadorImagenesCargadas++;
          avanceBarraProgreso += incrementoBarraProgreso;
          actualizarBarraProgreso(avanceBarraProgreso);
        }
      };
    });
  });
}

function btnAction(identificadorImagen) {
  console.log(
    "mostrar spiner para reflejar la ejecución de la llamada ajax de fondo"
  );
  $("#ajax-loader-img-" + identificadorImagen).show();
  console.log("id imagen: ", identificadorImagen);
  $.get(getBtnActionURL(), function (response) {
    console.log("response: ", response);
    const findAnimal = response.find(
      (animal) => animal.id == identificadorImagen
    );
    const breedsAnimal = findAnimal.breeds[0];
    const weightMetric = breedsAnimal.weight.metric;
    const heightMetric =
      breedsAnimal.height && breedsAnimal.height.metric
        ? breedsAnimal.height.metric
        : undefined;
    const lifeSpan = breedsAnimal.life_span;
    const name = breedsAnimal.name;

    console.log("find animal : ", findAnimal);
    alert(`
    Peso promedio en Kg : ${weightMetric} 
    Nombre : ${name}
    Promedio esperanza de vida : ${lifeSpan}
    ${heightMetric ? `Estatura promedio en Cms : ${heightMetric}` : ""}
    `);
    $("#ajax-loader-img-" + identificadorImagen).hide();
  });
}

function actualizarBarraProgreso(porcentaje) {
  $("#barra-progreso").css("width", porcentaje + "%");
  $("#barra-progreso").html(porcentaje + "%");

  if (porcentaje == 100) {
    $("#barra-progreso").parent().fadeOut(2000);
  }
}
