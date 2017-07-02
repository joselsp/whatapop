# angular4-mobile-test-directions

**Whatapop** es un _amago_ de clon de [Wallapop](http://es.wallapop.com). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con HTML5, CSS3 y Angular.


## Entidades

Son estas tres: `Category`, `User` y `Product`. La entidad `Product` tiene todos los atributos necesarios para almacenar los datos propios de un producto, además de mantener relación con `User` para establecer el vendedor del mismo y con `Category` para enlazar la categoría en la que se publica. Están definidas de la siguiente forma:

Entidad `Category`:

- `id` de tipo `number`.
- `name` de tipo `string`.

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `nick` de tipo `string`.
- `avatar` de tipo `string`.
- `latitude` de tipo `number`.
- `longitude` de tipo `number`.
- `email` de tipo `string`.

Entidad `Product`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `description` de tipo `string`.
- `category` de tipo `Category`.
- `seller` de tipo `User`.
- `publishedDate` de tipo `number`.
- `state` de tipo `string`.
- `price` de tipo `number`.
- `photos` de tipo `string[]`
- `favorite` de tipo `boolean`.

## Puesta a punto

Puedes descargar el código desde [su repositorio en GitHub](https://github.com/joselsp/whatapop.git), o bien clonarlo desde una terminal:

```bash
$ git clone https://github.com/joselsp/whatapop.git
```

Una vez descargado y descomprimido, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```bash
$ cd kc-whatapop-seed
$ npm install
```

Para iniciarlo:

```bash
$ npm start
```

## Optional Paths


### Broken White Path (AKA Blanco Roto): Likes

En la vista detalle de cada producto podemos ver el icono que nos permitirá indicar si dicho producto es favorito. Este nuevo dato persistira en la tabla `Product`. 

### Red Wine Path (AKA Vino Tinto): Filtro y ordenación avanzada

En la colección de productos podemos filtrar por los productos en venta o aquellos que están en un cierto rango de precio.

Adicionalmente, podemos ordenar en base al precio o alfabéticamente.

### Brick Red Path (AKA Teja): Productos por vendedor

Desde la vista detalle de cada producto tenemos la posibilidad de consultar otros productos vendidos por el mismo usuario.