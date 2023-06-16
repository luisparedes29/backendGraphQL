# Aplicación tipo CRUD de Tweets - Backend

Este repositorio contiene el código del backend de una aplicación CRUD desarrollada con GraphQL, utilizando una biblioteca como Apollo Server o GraphQL Yoga. La aplicación se encarga de manejar la persistencia de los tweets de usuarios, permitiendo crear, leer, actualizar y eliminar tweets a través de una API GraphQL. La persistencia se realiza utilizando MongoDB como base de datos y Mongoose como ODM (Object Data Modeling).

## Características principales
- Creación de una API GraphQL para el manejo de tweets de usuarios.
- Implementación de un servidor GraphQL utilizando Apollo Server o GraphQL Yoga.
- Definición del esquema de la API GraphQL con los tipos de datos necesarios para almacenar los tweets.
- Persistencia de los tweets en una base de datos MongoDB utilizando Mongoose.

## Tecnologías utilizadas
- GraphQL: Un lenguaje de consulta y manipulación de datos utilizado para definir el esquema y la API de la aplicación.
- Apollo Server o GraphQL Yoga: Bibliotecas que facilitan la creación de servidores GraphQL en Node.js.
- MongoDB: Una base de datos NoSQL utilizada para almacenar los tweets de los usuarios.
- Mongoose: Un ODM (Object Data Modeling) para Node.js y MongoDB que proporciona una interfaz sencilla y flexible para interactuar con la base de datos.- MongoDB: Base de datos basada en documentos

## Configuración

Sigue los pasos a continuación para configurar y ejecutar el backend de la aplicación:

1. Clona este repositorio en tu máquina local: git clone <URL_DEL_REPOSITORIO>
2. Navega al directorio del backend.
3. Instala las dependencias del proyecto utilizando npm o yarn: npm install
4. Inicia el servidor GraphQL: npm start

Uso

- Una vez que el servidor GraphQL esté en funcionamiento, podrás utilizarlo desde el frontend de la aplicación para interactuar con la API GraphQL. Asegúrate de que el frontend esté correctamente configurado para apuntar al servidor GraphQL en la URL correcta.

- Utiliza Apollo Client en el frontend para interactuar con la API de GraphQL utilizando los hooks useQuery y useMutation. Estos hooks te permitirán realizar consultas y mutaciones en la API de forma sencilla y eficiente.

- Recuerda que los tweets persistirán en el navegador utilizando un método de persistencia, lo que significa que permanecerán incluso después de recargar la página, a menos que sean eliminados.

Contribución
Si deseas contribuir a este proyecto, puedes seguir los pasos a continuación:

Realiza un fork de este repositorio y clónalo en tu máquina local.
Crea una nueva rama para tu función o mejora.
Realiza los cambios necesarios y realiza los commits correspondientes.
Envía tus cambios al repositorio remoto.
Abre una solicitud de extracción en este repositorio.
¡Gracias por tu contribución!
