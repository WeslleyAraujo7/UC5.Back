// Importa o modelo de Produto que contém a lógica de acesso aos dados
import ProdutoModel from "../models/produto.model";

// Define a classe ProdutoController que gerencia as requisições relacionadas a produtos
class ProdutoController {
  
  // Método para cadastrar um novo produto
  static cadastrar(requisicao, resposta) {
    try {
      // Extrai os dados do corpo da requisição
      const { id, nome, preco, descricao } = requisicao.body;

      // Verifica se todos os campos obrigatórios foram fornecidos
      if (!id || !nome || !preco || !descricao) {
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos são obrigatorios!" });
      }

      // Chama o método do model para cadastrar o produto
      ProdutoModel.cadastrar(id, nome, preco, descricao);

      // Retorna resposta de sucesso
      resposta.status(201).json({ mensagem: "Produto criado com sucesso!" });
    } catch (error) {
      // Trata erros inesperados e retorna mensagem genérica
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Método para listar todos os produtos
  static listarTodos(requisicao, resposta) {
    try {
      // Recupera a lista de produtos do model
      const produtos = ProdutoModel.listarTodos();

      // Se a lista estiver vazia, retorna mensagem informando isso
      if (produtos.length === 0) {
        return resposta.status(200).json({ mensagem: "Banco de dados vazio!" });
      }

      // Retorna a lista de produtos
      resposta.status(200).json(produtos);
    } catch (error) {
      // Trata erros e retorna mensagem de erro genérica
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Método para buscar um produto pelo ID
  static listarPorId(requisicao, resposta) {
    try {
      // Extrai o ID dos parâmetros da URL e converte para inteiro
      const id = parseInt(requisicao.params.id);

      // Busca o produto no model
      const produto = ProdutoModel.listarPorId(id);

      // Se não encontrado, retorna status 404
      if (!produto) {
        return resposta
          .status(404)
          .json({ mensagem: "Produto não encontrado!" });
      }

      // Retorna o produto encontrado
      resposta.status(200).json(produto);
    } catch (error) {
      // Trata erro genérico
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Método para atualizar os dados de um produto
  static atualizar(requisicao, resposta) {
    try {
      // Extrai os novos dados do corpo da requisição
      const { novoNome, novoPreco, novaDescricao } = requisicao.body;

      // Extrai o ID da URL e converte para inteiro
      const id = parseInt(requisicao.params.id);

      // Chama o model para atualizar o produto
      ProdutoModel.atualizar(id, novoNome, novoPreco, novaDescricao);

      // Retorna mensagem de sucesso
      resposta.status(200).json({ mensagem: "Produto atualizado com sucesso" });
    } catch (error) {
      // Trata erros
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Método para deletar um produto específico pelo ID
  static deletarPorId(requisicao, resposta) {
    try {
      // Extrai o ID dos parâmetros da URL
      const id = parseInt(requisicao.params.id);

      // Chama o model para deletar o produto
      const produto = ProdutoModel.deletarPorId(id); // Retorna null se não encontrar

      // Verifica se o produto existia
      if (produto === null) {
        return resposta
          .status(404)
          .json({ mensagem: "Produto não encontrado!" });
      }

      // Retorna mensagem de sucesso
      resposta.status(200).json({ mensagem: "Produto excluido com sucesso!" });
    } catch (error) {
      // Trata erro genérico
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }

  // Método para deletar todos os produtos do banco
  static deletarTodos(requisicao, resposta) {
    try {
      // Chama o model para deletar todos os registros
      ProdutoModel.deletarTodos();

      // Retorna mensagem de sucesso
      resposta
        .status(200)
        .json({ mensagem: "Todos os produtos foram deletados!" });
    } catch (error) {
      // Trata erros
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
        erro: error.message,
      });
    }
  }
}

// Exporta a classe para ser usada em rotas ou outros módulos
export default ProdutoController;
