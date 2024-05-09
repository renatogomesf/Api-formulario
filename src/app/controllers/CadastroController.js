import conexao from "../database/conexao.js"

class CadastroController {

    index(request, response) {
        const sql = 'select * from cadastros;'
    
        conexao.query(sql, (error,result)=>{
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(result)
            }
        })
    }


    show(request, response) {
        const id = request.params.id
    
        const sql = 'select * from cadastros where id = ?;'
    
        conexao.query(sql, id, (error,result)=>{
            const dado = result[0]
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(dado)
            }
        })
    }


    store(request, response){
        const cadastro = request.body
    
        const sql = 'insert into cadastros set ?;'
    
        conexao.query(sql, cadastro, (error,result)=>{
            if(error){
                response.status(400).json({'erro':error})
            }else{
                response.status(201).send(result)
            }
        })
    }


    update(request, response) {
        const cadastro = request.body
        const id = request.params.id
    
        const sql = 'update cadastros set ? where id = ?;'
    
        conexao.query(sql, [cadastro,id], (error,result)=>{
            if(error){
                response.status(400).json({'erro':error})
            }else{
                response.status(200).send(result)
            }
        })
    }


    delete(request, response) {
        const id = request.params.id
        const sql = 'delete from cadastros where id = ?;'
    
        conexao.query(sql, id, (error,result)=>{
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(result)
            }
        })


    
        const idController = ((request.params.id)-1)
        const sqlController = 'ALTER TABLE cadastros AUTO_INCREMENT = ?;'
    
        conexao.query(sqlController, idController, (error,result)=>{
            if(error){
                response.status(404).send(error)
            }else{
                response.status(200)
            }
        })
    }
}

// padrão singleton
export default new CadastroController()