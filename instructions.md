# The Kitty Store instructions

---

Utilizando web components, genera los componentes necesarios para que la aplicación coincida con los screenshots siguientes.
No olvides el uso de `template`, `class`, `defer`, `module type` y `DOMContentLoaded`.

## Views

Tendrás solo una vista, esta vista mostrará todos los gatitos disponibles en la tienda ordenados de la siguiente manera:

| Size          | Columns    |
| ------------- | ---------- |
| 0-424px       | 1 columna  |
| 425px-767px   | 2 columnas |
| 768px-1023px  | 3 columnas |
| 1024px-1199px | 4 columnas |
| 1200px-max    | 5 columnas |

El ancho máximo para el contenedor de la lista de gatitos es de 1200px.
[screenshots](./screenshots)

## Behaviors

Cuando se le de click a un gatito, se mostrará un modal con los datos del mismo, si el ancho de la pantalla es menor a 768px, el formato será vertical de 90% de ancho por 80% de alto, de lo contrario será horizontal en un rectángulo de 500px ancho por 320px de alto.

## services/Store

Cuentas con un `store` que tiene las propiedades y datos necesarios para renderear las vistas correspondientes.

Este store se encuentra como parte de una variable global llamada `app`, esto significa que la puedes utilizar en cualquier script como fuente de la verdad.

### Events

Este store dispara dos eventos, que responden a la siguiente condición:
`kitty-selected` - Cuando se le asigna un valor a la propiedad selectedKitty.
`kitty-clear` - Cuando se asigna un valor nulo a la propiedad selectedKitty.

> Te recomiendo utilizarlos para mostrar/ocultar el modal.
