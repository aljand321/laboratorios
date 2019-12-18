FROM node:10.17.0
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN chmod 777 /opt/app
COPY . .
RUN npm install --quiet
RUN npm install nodemon -g --quiet
RUN npm install --save-dev nodemon
RUN npm install babel-cli --save
RUN npm install babel-core --save
RUN npm install body-parser
RUN npm install express
RUN npm install morgan
RUN npm install pg
RUN npm install pg-hstore
RUN npm install sequelize
RUN npm install node-fetch --save
RUN npm install express-form-data
RUN npm install express-formidable
RUN npm install i
RUN npm install multer
RUN npm install --save path
EXPOSE 3050
CMD nodemon -L --watch . app.js