# Prueba-2-ONG-AUP

Considerando el desarrollo del proyecto revisado durante toda la asignatura y que se adjunta en este enunciado. Desarrolle con su grupo de trabajo una "mantención incremental" para poder agregar las siguientes nuevas funcionalidades:
I. Agregue a la galería de imagenes de perros y gatos un filtro por raza, es decir, se requiere que antes de cargar la galería con imágenes se muestre una lista desplegable con todas las razas disponibles en el sistema.

    Cada vez que el usuario seleccione/cambie una opción de la lista desplegable el sistema debe mostrar las imágenes de todos los perros/gatos que coincidan con dicha opción de raza
    Las primeras opciines de la lista deben ser "-- Seleccione una raza --" , seguido de la opción "Cualquiera", que traerá fotos sin importar la raza. Después de estas se muestran todas las devueltas por la API del sistema.

II. El botón para cada imagen, ya no debe reemplazar/cambiar la imagen, sino que debe enviar al usuario a una vista de detalle, donde se pueda mostrar la foto del animalito en su proporción original y con la siguiente información de la(s) raza(s):

    Peso promedio en Kg.  (weight -> metric)
    Estatura promedio en Cms. (Sólo para perros: height -> metric)
    Nombre (name)
    Promedio esperanza de vida (life_span)

Todos los datos a mostrar están disponibles en las APIs thecatapi y thedogapi, cuya documentación se encuentra disponible en:

    https://docs.thecatapi.com/
    https://docs.thedogapi.com/

III. Elabore una opción de menú que permita disponer de un formulario para poder autenticar y registrar los usuarios que tendrá el sitio.

    La página de autenticación a mostrar cuando se acceda a esa opción de menú deberá desplegar un formulario con los campos de usuario y clave.
    El botón enviar, si los campos cumplen las siguientes condiciones, deberá enviar al usuario a una página llamada login-exitoso.html:
        El nombre de usuario no puede tener espacios y debe tener al menos 8 caracteres
        La clave debe tener al menos 2 números y 2 letras.
