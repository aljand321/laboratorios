import model from '../models';

const { consulta_lab } = model;

class lab {
    static create_lab_consulta(req,res){
        console.log(req.body)
        const { fecha,hora,historial,nombre_doctor,examen,otros,tipo_laboratorio,id_user,consultorio } = req.body
        const { id_consulta } = req.params
        if(!fecha || !hora || !historial || isNaN(historial) || !nombre_doctor || examen.length == 0 || !tipo_laboratorio || !id_user || !consultorio ){
            if(!fecha){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando fecha"
                })
            }else if (!hora ){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando la hora"
                })
            }else if ( !historial || isNaN(historial) ){
                res.status(400).json({
                    success:false,
                    msg: "Historial no se esta mandando o se esta mandando mal"
                })
            }else if ( !nombre_doctor ){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando nombre del doctor"
                })
            }else if (examen.length == 0){
                res.status(400).json({
                    success:false,
                    msg: "Tipo de examen es obligatorio seleccione uno a varios"
                })
            }else if(!tipo_laboratorio){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando el tipo de laboratorio"
                })
            }else if(!id_user){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando el id del medico"
                })
            }else if (!consultorio){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandndo el tipo de consltorio"
                })
            }
        }else{
            return consulta_lab
            .create({
                consultorio,
                tipo_laboratorio,
                fecha,
                hora,
                historial,
                nombre_doctor,
                examen,
                otros,
                id_consulta,
                id_user
            })
            .then(data => {
                res.status(200).json({
                    success:true,
                    msg:"Se inserto con exito los datos",
                    data
                })
            })
            .catch(error => res.status(400).send(error));
        }

    }

    // ruta para poder insertar los laboratorios de emergencia
    static create_lab_consulta_emg(req,res){
        console.log(req.body)
        const { fecha,hora,historial,nombre_doctor,examen,otros,tipo_laboratorio,id_user,consultorio } = req.body
        const { id_emergencia } = req.params
        if(!fecha || !hora || !historial || isNaN(historial) || !nombre_doctor || examen.length == 0 || !tipo_laboratorio || !id_user || !consultorio ){
            if(!fecha){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando fecha"
                })
            }else if (!hora ){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando la hora"
                })
            }else if ( !historial || isNaN(historial) ){
                res.status(400).json({
                    success:false,
                    msg: "Historial no se esta mandando o se esta mandando mal"
                })
            }else if ( !nombre_doctor ){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando nombre del doctor"
                })
            }else if (examen.length == 0){
                res.status(400).json({
                    success:false,
                    msg: "Tipo de examen es obligatorio seleccione uno a varios"
                })
            }else if(!tipo_laboratorio){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando el tipo de laboratorio"
                })
            }else if(!id_user){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandando el id del medico"
                })
            }else if (!consultorio){
                res.status(400).json({
                    success:false,
                    msg: "No se esta mandndo el tipo de consltorio"
                })
            }
        }else{
            return consulta_lab
            .create({
                consultorio,
                tipo_laboratorio,
                fecha,
                hora,
                historial,
                nombre_doctor,
                examen,
                otros,
                id_emergencia,
                id_user
            })
            .then(data => {
                res.status(200).json({
                    success:true,
                    msg:"Se inserto con exito los datos",
                    data
                })
            })
            .catch(error => res.status(400).send(error));
        }

    }
    static lista_laboratorios(req, res) {
        return consulta_lab
        .findAll()
        .then(data => res.status(200).json(data));
    }
    //lista ecografias
    static lista_Ecografia(req, res) {
        const { historial } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "ECOGRAFIA", historial : historial }
        })
        .then(data => res.status(200).json(data));
    }
     //lista Rayos x
     static lista_rayosX(req, res) {
        const { historial } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "Rayos_x", historial : historial }
        })
        .then(data => res.status(200).json(data));
    }
     //lista laboratorios
    static lista_lab(req, res) {
        const { historial } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "LABORATORIO", historial : historial }
        })
        .then(data => res.status(200).json(data));
    }

    /* 
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    */
    static lista_Ecografia_emg(req, res) {
        const { historial,id_emg } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "ECOGRAFIA", historial : historial, id_emergencia:id_emg }
        })
        .then(data => res.status(200).json(data));
    }
    //lista Rayos x
     static lista_rayosX_emg(req, res) {
        const { historial,id_emg } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "Rayos_x", historial : historial, id_emergencia:id_emg }
        })
        .then(data => res.status(200).json(data));
    }
     //lista laboratorios
    static lista_lab_emg1(req, res) {
        const { historial,id_emg } = req.params
        return consulta_lab
        .findAll({
            where:{tipo_laboratorio: "LABORATORIO", historial : historial, id_emergencia:id_emg }
        })
        .then(data => res.status(200).json(data));
    }
    /*
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
     */
    // one lab id
    static one_lab(req, res) {
        const { id_lab } = req.params
        return consulta_lab
        .findAll({
            where:{ id : id_lab }
        })
        .then(data => res.status(200).json(data));
    }

    //lista dinamica de laboratorios
    static list_dinamic(req, res) {
        const { nombre } = req.params
        return consulta_lab
        .findAll({
            where:{ tipo_laboratorio : nombre, estado: 'true' }
        })
        .then(data => res.status(200).json(data));
    }
    //lista dinamica false de laboratorios
    static list_dinamic_false(req, res) {
        const { nombre } = req.params
        return consulta_lab
        .findAll({
            where:{ tipo_laboratorio : nombre, estado : 'false' }
        })
        .then(data => res.status(200).json(data));
    }
    static update_estado_lab(req, res){
        const { estado } = req.body
       
        
            return consulta_lab
            .findByPk(req.params.id_lab)
            .then((data) => {
              data.update({
               
                estado : estado  || data.estado    
              })
              .then(update => {
                res.status(200).json({
                  success: true,
                  msg: 'Se actualizo el estado',
                  data : {
                    estado : estado  || update.estado 
                  }
                })
                .catch(error => {
                  res.status(500).json({
                    success:false,
                    msg: "Algo sucedio con el servidor",
                    error
                  })
                })
              })
              .catch(error => {
                res.status(500).json({
                  success:false,
                  msg: "Algo sucedio con el servidor",
                  error
                })
              })
        })
    }

    static lista_lab_emg(req, res) {
        const { id_emg } = req.params
        return consulta_lab
        .findAll({
            where : {id_emergencia: id_emg}
        })
        .then(data => res.status(200).json(data));
    }
}

export default lab
