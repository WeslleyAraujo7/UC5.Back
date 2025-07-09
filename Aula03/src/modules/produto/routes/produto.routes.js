import express from 'express'
import ProdutoController from '../controllers/produto.controller.js'
const router = express.Router()

// Listar todos os produtos
router.get("/produtos", ProdutoController.listarTodos)

// Cadastrar um novo produto
router.post("/produtos/cadastrar", ProdutoController.cadastrar)

// Listar um produto por ID
router.get("/produtos/listar/:id", ProdutoController.listarPorId)

// Atualizar um produto 
router.patch("/produtos/atualizar/:id", ProdutoController.atualizar)

// Deletar um produto por ID
router.delete("/produtos/deletar/:id", ProdutoController.deletarPorId)

// Deletar todos os produtos
router.delete("/produtos/deletar", ProdutoController.deletarTodos)

export default router;