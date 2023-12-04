# Importar AutoCRUDx Tools

>Esta es la herramienta que importa **_AutoCRUDx_** para crear generadores de **_CRUDs_** automáticos.

**_AutoCRUDx Tools_** proporciona las herramientas para ayudarle a crear su propio generador **_CRUD_** automático (basado en su propia pila de desarrollo y arquitectura particular). **Por lo tanto, debes diseñar tú mismo tus plantillas según tu criterio**.

:::warning Advertencia
**_Auto CRUDx Tools_** no es un generador de **_CRUD_** en sí mismo, sino que es una herramienta que le facilitará la construcción de su generador de **_CRUD_**. En otras palabras, **_Auto CRUDx Tools_** le ayudará a crear el suyo propio.

**_Auto CRUDx Tools_** tampoco es para construir _Scaffolds_, _Layout_, _Sign In_, _Sign Up_ ni _Password Recovery_.
:::

Si desea saber más sobre **_Auto CRUDx Tools_** [consulte el repositorio](https://github.com/ecanquiz/autocrudx-tools).

---

Asegúrese que su archivo `package.json` tenga el módulo `autocrudx-tools` como dependencia de desarrollo.

📃`./package.json`
```json
{
  // omitted for brevity ...
  "devDependencies": {
    // omitted for brevity ...
    "autocrudx-tools": "^0.0.3",
    // omitted for brevity ...    
  },
  // omitted for brevity ...
}
```

Si su archivo `package.json` no tiene registrado el módulo `autocrudx-tools`, entonces [descargue este paquete](https://www.npmjs.com/package/autocrudx-tools) desde su terminal (dentro de la carpeta de este proyecto) ejecutando lo siguiente.


```sh
npm i -D autocrudx-tools
```

---

Asegúrese de importar el módulo `autocrudx-tools` en los siguientes 5 archivos:

- En el respectivo archivo principal `./src/app.ts`

```ts
// omitted for brevity ...
import { main } from 'autocrudx-tools'

// omitted for brevity ...
```

- En los archivos `./stack/my-backend/renderings.ts` y `./stack/my-frontend/renderings.ts`

```ts
// omitted for brevity ...
import { singular, uCamelCase } from 'autocrudx-tools'
import type { ParamsAll, Rendering } from 'autocrudx-tools'

// omitted for brevity ...
```

- En los archivos `./stack/my-backend/process.ts` y `./stack/my-frontend/process.ts`

```ts
// omitted for brevity ...
import { rendering } from 'autocrudx-tools'
import type {
  ParamsAll,
  tableDetailsOfMasterCustomized
} from 'autocrudx-tools';

// omitted for brevity ...
```
---


Ya es momento de saber más sobre **_AutoCRUDx Tools_**, específicamente:

- [Las Herramientas Funcionales (JSON)](./functional-tools.html).
- [La Información de Tablas](./table-information.html).
