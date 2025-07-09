import produtos from "../../../config/database.js";

class ProdutoModel {
  static cadastrar(id, nome, preco, descricao) {
    produtos.push({ id, nome, preco, descricao });
  }
  static listarTodos() {
    const produto = produtos.map((produto) => produto);
    return produto;
  }
  static listarPorId(id) {
    const produto = produtos.find((produto) => produto.id === id);
    return produto;
  }
  static atualizar(id, novoNome, novoPreco, novaDescricao) {
    const produto = produtos.find((produto) => produto.id === id);
    produto.nome = novoNome || produto.nome;
    produto.preco = novoPreco || produto.preco;
    produto.descricao = novaDescricao || produto.descricao;
    return produto
  }
  static deletarPorId(id) {
    const index = produtos.findIndex(produto => produto.id === id)
    if(index === -1){
        return null
    }
    produtos.splice(index, 1)
    return true
  }
  static deletarTodos() {
    produtos.length = 0;
    return true;
  }
}

export default ProdutoModel;
