import model from '../models';

const { resp_lab } = model;
const { consulta_lab } = model;

class Respues_lab { 
    static register_resp_lab(req,res){
        const { fecha,hora,historial,nombre_user,descripcion,id_user } = req.body
        const { id_lab } = req.params
        if( !fecha || !hora || !historial || isNaN(historial) || !nombre_user  || !id_user ){
            if(!fecha){
                res.status(400).json({
                    success:false,
                    msg:"Fecha es obligatorio"
                })
            }else if (!hora){
                res.status(400).json({
                    success:false,
                    msg:"Hora es obligatorio"
                })
            }else if (!historial || isNaN(historial)){
                res.status(400).json({
                    success:false,
                    msg:"Historial no se esta mandando, o se esta mandando mal"
                })
            } else if (!nombre_user){
                res.status(400).json({
                    success:false,
                    msg:"El nombre del usuario no se esta mandando"
                })
            }else if (!id_user){
                res.status(400).json({
                    success:false,
                    msg:"el id del usuario no se esta mandando"
                })
            }
        }else{
            return resp_lab
            .findAll({
                where:{id_lab:id_lab}
            })
            .then(data => {
                
                if(data != ""){
                    res.status(400).json({
                        success:false,
                        msg:"Ya se registro los datos de este laboratorio"
                    })
                }else{
                    return resp_lab
                    .create({
                        fecha,
                        hora,
                        historial,
                        nombre_user,
                        descripcion,
                        id_lab,
                        id_user
                    }) 
                    .then(data => {
                        res.status(200).json({
                            success:true,
                            msg:"Se inserto con exito los datos",
                            data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        res.status(500).json({
                            success:false,
                            msg:"No se pudo insertar los datos"
                        })
                    }); 
                }
            });
            
                
        }      
    }
    //lista de respuesta de laboratorios
    static list_respuesta_lab(req, res) {
        return resp_lab
        .findAll()
        .then(data => res.status(200).json(data));
    }
   
}
export default Respues_lab