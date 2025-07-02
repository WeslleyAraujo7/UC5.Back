const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORTA;

// parsear dados em formato json
app.use(express.json())
const produtos = [];

// rota para listar todos produtos
app.get("/produtos", (requisicao, resposta) => {
  try {
    const produto = produtos.map((produto) => produto);
    if (produto.length === 0) {
      return resposta.status(200).json({ mensagem: "Banco de dados vazio!" });
    }
    resposta.status(200).json(produto);
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
      erro: error.message
    });
  }
});

// criando um novo produto
app.post("/produtos/cadastrar", (requisicao, resposta) => {
  try {
    const { id, nome, preco, descricao } = requisicao.body;
    if(!id || !nome || !preco || !descricao){
        return resposta.status(400).json({mensagem: 'Todos os campos são obrigatorios!'})
    }
    const novoProduto = { id, nome, preco, descricao };
    produtos.push(novoProduto);
    resposta.status(201).json({ mensagem: "Produto criado com sucesso!" });
  } catch (error) {
    resposta.status(500).json({
      mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
      erro: error.message
    });
  }
});

// atualizando um produto existente
app.patch("/produtos/atualizar/:id", (requisicao, resposta) => {
    try {
        const { novoNome, novoPreco, novaDescricao} = requisicao.body
        const id = parseInt(requisicao.params.id)
        const produto = produtos.find(produto => produto.id === id)
        if(!produto){
            return resposta.status(404).json({mensagem: 'Produto não encontrado!'})
        }
        produto.nome = novoNome || produto.nome
        produto.preco = novoPreco || produto.preco
        produto.descricao = novaDescricao || produto.descricao
        resposta.status(200).json({mensagem: 'Produto atualizado com sucesso'})
    } catch (error) {
        resposta.status(500).json({
            mensagem: "Erro interno do servidor. Por favor tente mais tarde!",
            erro: error.message
          });
    }
});

// listar um produto pelo id
app.get("/produtos/listar/:id", (requisicao, resposta) => {});

// deletar todos os produtos
app.delete("/produtos/deletar", (requisicao, resposta) => {});

// deletar produto por id
app.delete("/produtos/deletar/:id", (requisicao, resposta) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
