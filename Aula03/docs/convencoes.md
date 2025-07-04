# Convenções de Nomenclatura para Todo o Projeto

Este documento estabelece as convenções de nomenclatura a serem seguidas em todo o projeto, promovendo padronização, legibilidade e manutenção do código.

## 1. Nomes de Arquivos

- Utilize **kebab-case** (letras minúsculas e hífens para separar palavras).
- Exemplos:
    ```
    user-controller.js
    database-config.yaml
    ```

## 2. Variáveis de Ambiente

- Utilize **UPPERCASE** com underscores para separar palavras.
- Exemplos:
    ```
    DATABASE_URL
    API_KEY
    ```

## 3. Classes

- Utilize **PascalCase** (primeira letra de cada palavra em maiúsculo, sem separadores).
- Exemplos:
    ```js
    class UserController {}
    class DatabaseConfig {}
    ```

## 4. Variáveis e Funções

- Utilize **camelCase** para variáveis e funções.
- Exemplos:
    ```js
    let userName;
    function getUserData() {}
    ```

## 5. Constantes

- Utilize **lowercase** com underscores.
- Exemplos:
    ```js
    const MAX_RETRIES = 5;
    const DEFAULT_TIMEOUT = 3000;
    ```

## 6. Pastas/Diretórios

- Utilize **kebab-case**.
- Exemplos:
    ```
    controllers/
    user-services/
    ```

> **Observação:** Siga estas convenções em todos os arquivos, pastas, variáveis, funções, classes e constantes do projeto para garantir consistência e facilitar a colaboração entre os membros da equipe.