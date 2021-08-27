# Que tenemos hasta ahora?
Gracias a webpack, podemos programar con archivos de estilos y js separados y este hace "magia" y los pone en el html.

# Que queremos hacer?
1. Queremos usar scss en vez de css y typescript en vez de js
2. Tener dos bundles distintos, uno para produccion (todo minificado, etc) y otro para desarrollar
3. Queremos que, al pulsar en una pantalla, se navege en otra con el detalle del personaje (hardcoded) y que tenga sus estilos y js independientes

# Equipos
- Team loaders: Punto 1: MA, Jordi
- Team bundles: Punto 2: Eugenia, Diego, Joaquin
- Team character: Punto 3: Victor, Alvaro, Joan

# Pistas
1. Acordaros de los loaders, habrá que instalar cositas
2. Hay un paquete de npm que permite combinar distintos webpacks.js
3. Tendremos un fichero html para cada pantalla. Cada fichero puede tener una cabecera distinta para apuntar a un bundle distinto
4. De momento, la información nos la inventamos, no hacemos llamadas a ninguna api ni fichero

# Bonus:
1. Usar algun lintern (rallitas en rojo debajo si hay algo mal, incluso se puede hacer que no transpile)
2. Tener un buen package.json, con sus dependencies y devDependencies bien puestos, con scripts que lancen los distintos bundles. Se pueden tener mas de 2 webpack.js si lo veis necesario
3. Que se capturen los datos del personaje de alguna manera (pasarlos por queryString o con el punto 4)
4. Coger la información de un fichero con la info de cada personaje y generar el html por javascript/typescript
5. Ver alternativas a webpack
