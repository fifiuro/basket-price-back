# Establecer la imagen base
FROM node:18

# Establcer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

#Instalar las dependencias
RUN npm install

# Copiar el codigo fuente
COPY . .

#Exponer el puerto en el que se ejecutara la aplicacion NEstJS
EXPOSE 3000

# Comando para iniciar la aplicacion en modo desarrollo
CMD [ "npm", "run", "start:dev" ]