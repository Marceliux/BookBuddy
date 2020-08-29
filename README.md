# BookBuddy 
## Aplicación web simple construida con *HTML5, Vanilla JS, Bootstrap y Sweet Alert*.  
## Primer proyecto para el curso de **Programación I**
### Diseñada para estudiantes en busca de libros que no quieran perder tiempo buscando un PDF o MOBI que tenga que leer.  
### Su logica se basa en tomar la entrada de dos inputs (Titulo y Autor) en nuestro código HTML y crear botones que nos redirigiran hacia paginas de descarga. 
<br>

## *Cómo?*

```javascript
let revisarBuscador = (autor, titulo) => {
    //creando el a
    var temp1 = document.createElement('a');

    //agregándole el search query de Buscador Ejemplo
    temp1.href = `https://www.ejemploDeBuscador.com/search/${titulo}+${autor}`;

    //agregándole el atributo target
    temp1.target = "_blank";

    //agregándole un button
    temp1.innerHTML = '
    <button type="button" class="m-2 btn btn-lg btn-outline-primary">Lectulandia</button>';
    
    //returnea el a
    return temp1;  
}
```
### Y así consecutivamente con todos los buscadores que tengamos en nuestra "bases de datos". Estos luego se adjuntan a nuestro archivo HTML dinámicamente.
<br/>

## Temas a evaluar 
---
| HTML5  | VanillaJS  | Bootstrap  | Git | SweetAlert | 
|---|---|---|---|---|
| 30%  | 30%  | 15%  | 20%  | 5%  |

*En Git contemplamos: repositorio funcional y con dos branches y su respectivo README.md o documentación acorde.*