const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req,res){
        // encontrar todos os usuarios que o e-mail termina com @teste.com
        // desses usuarios buscar todos que moram na rua "teste"
        // desses usuarios buscar todos que tem tecnologias react

        const users = await User.findAll({
            attributes:['nome','email'],
            where:{
                email:{
                    [Op.like]:'%@email.com'
                }
            },
            include:[
                { association: 'addresses', 
                where: {
                    street:'Rua teste'
                }
            },
                { association: 'techs', 
                required: false,
                where:{ 
                    name:{ 
                        [Op.like]:'React%'
                    }
                }
            }
            ]   
        })
        return res.json(users);
    }
}