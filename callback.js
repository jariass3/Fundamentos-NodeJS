/**
 * Callback: Son funciones que viajan como parámetros de otras funciones (funcion 2) y que se INVOCAN 
 * cuando la otra función (función 2) termina de hacer lo que se ha programado.
 */

setTimeout(() => {
    console.log("Este mensaje imprime el callback!!");
}, 3000);