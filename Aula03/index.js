import express from "express";
import dotenv from "dotenv";
import routeproduto from "./src/modules/produto/routes/produto.routes.js";

const prot = process.env.PORTA || 3000;