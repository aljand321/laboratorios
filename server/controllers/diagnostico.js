import model from '../models';

const { diagnostico } = model;

class Diagnostico { 
    static create_diagnostico(req,res){
        
        const { codigo, descripcion } = req.body
        return diagnostico
        .findAll({
            where:{codigo:codigo}
        })
        .then(data => {
            if(data == ""){
                return diagnostico
                .create({
                    codigo,
                    descripcion
                })
                .then(data => res.status(201).send({
                    msg: 'se creo diagnostico',
                    data:data.id
                }))
            }else{
                res.status(400).json({
                    msg :"ya existe el codigo"+codigo
                })
            }
        });
        
    }
    static lista_diagnostico_ci_10(req, res) {
        return diagnostico
        .findAll()
        .then(data => res.status(200).json(data));
    }
}

export default Diagnostico
