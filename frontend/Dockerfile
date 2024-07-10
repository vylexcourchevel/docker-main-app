# Image 
FROM node:16.13.2-alpine

# Répertoire de travail dans le container
WORKDIR /www

# COPIER package.json 
COPY  package*.json ./  

# Installer les dépendances
RUN npm install

# Copier le rest des fichiers
COPY . .

# Expose le port que votre application utilse
EXPOSE 5173

# DÉMARRER L'APP
CMD [ "npm", "run", "dev" ] 