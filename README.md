
# ALTEN / hola - luz

Este es la solución a la prueba tecnica enviada por ALTEN, donde se requiere identificar lecturas que sean más altas o más bajas que la mediana anual ± 50 % de los clientes que se encuentran inicialmente en un archivo .csv o .xml, pero puede luego tomarse de una base de datos o cualquier metodo de entrada.

En esta app, unicamente se muestra al usuario una app de línea de comandos que toma un nombre de archivo como argumento, para ser enviado a la API app-hola-luz, lo realicé separado porque con la finalidad que fuese una api de arquitectura hexagonal perdia su funcionalidad al ejecutarse por linea de comandos, ademas que no podia ser escalable, por ello separé el front (app de linea de comandos) del backend (arquitectura hexagonal). 

OJO : Deben ejecutarse las dos app para que funcione: api-hola y app-hola-luz, el codigo de ambos proyectos se encuentran en la rama `develop`.

## Authors

- [@jackelineortega](https://www.github.com/jackelineortegs)


## API Reference

## Installation


```bash
  cd hola-luz
  npm install 
```


## Environment Variables

Para correr el proyecto, necesitamos las sigueinte variables de entorno en el archivo .env, copiar de .env_sample

`URL_API = http://localhost:3010/`
`CONTROLLER = reading/file`

## Deployment

To deploy this project run

```bash
  npm run tsc
  npm run start 
```

To deploy this project run dev

```bash
  npm run dev 
```

## Appendix

Descripción de la solución: 

- En esta app se pide el nombre de un archivo a traves de linea de comandos en la terminal, se envia a traves de una peticion axios POST a la API app-hola-luz, la cual se encarga del procesamiento del archivo y devuelve las lecturas sospechosas encontradas, o en su defecto algun mensaje de validacion o error durante el flujo.

- Si el usuario ya no quiere seguir consultando ningun archivo solo debe tipar X y con este saldra de la app (se describe en pantalla).

Cualquier duda estoy dispuesta a aclararla.

De antemano muchas gracias por la oportunidad espero puedan evaluar mi solución y continuar el proceso. 
