# Ejercicio de componenetes angular

Primer ejercicio con angular y su entorno. A continuación hay una pequeña chuleta de los comandos disponibles en angular cli: 

    -   ng new myApp: Crea un nuevo proyecto myApp.
    -   ng server: Ejecuta un servidor con nuestro proyecto, si es lanzado en la carpeta raiz de un proyecto.
    -   ng generate: Nos ayuda a generar diversos tipos de contenido para nuestra app como componentes, rutas...

Deberemos crear una to-do-list componetizada. Tendremos un componente padre que sera la lista y un componente hijo que sera cada uno de los items de dicha lista.

## Antes de empezar...
Utiliza angular Cli para crear un nuevo proyecto. Puedes utilizar el comando ng new.

##Iteración 1

Genera un componente List en la carpeta Components y renderizalo en el interior del componente app. 
Este componente debe tener en su template un div que englobe un tag ul. 
Dentro de sus datos debe tener un atributo tasks que es un Array de strings.


## Iteración 2

Generar un componente item que sea renderizado mediante un bucle ngFor en el interior del componente List.
Este componente unicamente tendrá un tag li en su interior y un botón para borrar dicho item.


## Iteración 3 

Vamos a añadir un botón y un campo input al componente List para añadir nuevas task. El campo input deberá utilizar la directiva ngModel para hacer data-binding con una propiedad definida en el componente llamada newTask. Una vez se haga click en el botón, se debe llamar a una función del componente que añada el valor de newTask al array definido previamente. 

## Iteración 4

Realiza los ajustes necesarios para que al hacer click en el botón borrar de un componente Item, este sea eliminado desde el componente padre List. 



Al final, la funcionalidad esperada es la siguiente: 


![](sample.gif)