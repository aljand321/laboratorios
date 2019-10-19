import model from '../models';

const { consulta_lab } = model;

class lab {
    static create_lab_consulta(req,res){
        const { fecha,hora,historial,nombre_doctor,examen,otros } = req.body
        const { id_consulta } = req.params
        if(!fecha || !hora || !historial || isNaN(historial) || !nombre_doctor || !examen || !otros ){
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
            }else if (!examen){
                res.status(400).json({
                    success:false,
                    msg: "Tipo de examen es obligatorio seleccione uno a varios"
                })
            }
        }else{
            return consulta_lab
            .create({
                fecha,
                hora,
                historial,
                nombre_doctor,
                examen,
                otros,
                id_consulta
            })
            .then(data => {
                res.status(200).json({
                    success:true,
                    msg:"Se inserto con exito los datos",
                    data
                })
            })
        }

    }
    static lista_laboratorios(req, res) {
        return consulta_lab
        .findAll()
        .then(data => res.status(200).json(data));
    }
}

export default lab
