import Users from '../controllers/user';
import Books from '../controllers/book';

import Diagnostico from '../controllers/diagnostico'
import lab from '../controllers/consulta_lab'
import Respues_lab from '../controllers/resp_lab'


export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bookStore API!',
}));

    app.post('/api/users', Users.signUp); // API route for user to signup
    app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
    app.get('/api/users', Users.list); // API route for user to get all books in the database


    //libros
    app.get('/api/books', Books.list); // API route for user to get all books in the database
    app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book
    app.delete('/api/books/:bookId', Books.delete); // API route for user to delete a book
    app.get('/api/idLib/:id', Books.listOne);

    //Diagnostico
    app.post('/diagnostico', Diagnostico.create_diagnostico)
    app.get('/diagnostico', Diagnostico.lista_diagnostico_ci_10)
    app.get('/one_diagnostico/:codigo', Diagnostico.one_diagnostico)

    //Laboratorios
    app.post('/api/create_lab_consulta/:id_consulta', lab.create_lab_consulta )
    app.get('/api/list_laboratorios_all', lab.lista_laboratorios)
    app.get('/api/list_ecografia/:historial', lab.lista_Ecografia)
    app.get('/api/list_rayosX/:historial', lab.lista_rayosX)
    app.get('/api/list_lab/:historial', lab.lista_lab)

    app.get('/api/one_lab/:id_lab', lab.one_lab)

    app.get('/api/list_dianmic_lab/:nombre', lab.list_dinamic) /// esta lista es para poder mostrar la lista dianmicas de los laboratorios segun el tipo de laboratorio
    app.get('/api/list_dinamic_false/:nombre', lab.list_dinamic_false)

    app.post('/api/update_estado_labRespuesta/:id_lab', lab.update_estado_lab)
    //lista de respuesta de laboratorios
    app.post('/api/registrar_espuesta_lab/:id_lab', Respues_lab.register_resp_lab )
    app.get('/api/list_resp_lab', Respues_lab.list_respuesta_lab)
    



};
