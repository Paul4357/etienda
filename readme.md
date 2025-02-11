# NOTAS DEL PROYECTO

- Tener en cuenta, si no corre el node js habilitar ejecucion de scripts en win 11
- Ejecutamos la consola en modo administrador : Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
- Otra opcion es : Set-ExecutionPolicy Unrestricted

==============================================================================

- Usaremos dos arquitecturas : Orientada a servicios (API REST) para la aplicacion
- Internamente usaremos MVC (Tenga en cuenta que las vistas se reemplazan por rutas)

1. Creamos las carpetas para el MVC 
2. Instalamos los paquetes base : npm i nodemon express cors mongoose