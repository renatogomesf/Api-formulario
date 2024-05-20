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


    showId(request, response) {
        const id = request.params.id
    
        const sql = 'select * from cadastros where id = ?;'
    
        conexao.query(sql, id, (error,result)=>{
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(result)
            }
        })
    }
    

    showNome(request, response) {
        const nome = request.params.nome
    
        const sql = 'select * from cadastros where nome = ?;'
    
        conexao.query(sql, nome, (error,result)=>{
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(result)
            }
        })
    }
    

    showSobrenome(request, response) {
        const sobrenome = request.params.sobrenome
    
        const sql = 'select * from cadastros where sobrenome = ?;'
    
        conexao.query(sql, sobrenome, (error,result)=>{
            if(error){
                response.status(404).json({'erro':error})
            }else{
                response.status(200).send(result)
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
    }
}

// padrão singleton
export default new CadastroController()