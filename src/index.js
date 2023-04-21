/* En el jsconfig.json, indicamos unas almohadillas para no tener que meter las rutas completas en cada
import, en el documento decimos que la almohadilla #Lib es igual a la ruta. Se importa en el package.json
*/ 
import { printHello } from '#Lib/hello.js';

printHello();

// en el package.json se instalan ciertas dependencias como husky, eslint y prettier por lo tanto
// estos permiten formatear el documento de una forma estandar, esto se configura en la linea 34 de package,json
// donde le indicamos que a los archivos js los formatee con eslint y a los JS y MD con prettier
// El proyecto esta configurado en ECSMAscript module