class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }
    async adicionar (postagemDT0){
        const postagem = new this.Postagem(postagemDT0)
        await postagem.save();
        return 'Adicionado com sucesso';
    }

    async consultarTodos(){
        const postagem = await this.Postagem.find({});
        return postagem;
    }

    async alterarPorId(id, postagemDT0){
        await this.Postagem.updateOne({_id: id}, postagemDT0)
    }

    async consultarPorId(id){
        const postagem = await this.Postagem.findById(id);
        return postagem;
    }
    async deletePorId(id){
        await this.Postagem.deleteOne({_id: id});
    }
}

module.exports = Postagens;