CREATE DATABASE db_pizzaria_legal;

USE db_pizzaria_legal;

CREATE TABLE tb_categorias(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    borda_recheada BOOLEAN 
);

CREATE TABLE tb_pizzas(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(6,2) NOT NULL,
    ingredientes VARCHAR(255),
    tamanho VARCHAR(50),
    categoria_id BIGINT,
    -- Conexão com a tabela de categorias
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome_categoria, descricao, borda_recheada) VALUES 
('Salgada Tradicional', 'As clássicas que todo mundo ama', true),
('Salgada Especial', 'Ingredientes premium e sabores complexos', true),
('Doce', 'Pizzas de sobremesa com chocolate ou frutas', false),
('Vegetariana', 'Sem carne, com foco em vegetais frescos', true),
('Vegana', 'Sem nenhum ingrediente de origem animal', false);

-- 4. Insere 8 registros em tb_pizzas
INSERT INTO tb_pizzas (nome, preco, ingredientes, tamanho, categoria_id) VALUES 
('Mussarela', 40.00, 'Queijo mussarela e orégano', 'Grande', 1),                       -- Salgada Tradicional
('Calabresa', 35.00, 'Calabresa fatiada e cebola', 'Grande', 1),                       -- Salgada Tradicional
('Margherita', 55.00, 'Mussarela de búfala, tomate e manjericão', 'Grande', 4),        -- Vegetariana
('Frango com Catupiry', 48.00, 'Frango desfiado e catupiry original', 'Grande', 1),    -- Salgada Tradicional
('Camarão', 95.00, 'Camarão refogado e cream cheese', 'Grande', 2),                    -- Especial
('Chocolate com Morango', 60.00, 'Chocolate ao leite e morangos frescos', 'Média', 3), -- Doce
('Banana com Canela', 50.00, 'Banana fatiada, leite condensado e canela', 'Média', 3), -- Doce
('Cogumelos Selvagens', 75.00, 'Mix de cogumelos shitake e shimeji', 'Grande', 5);     -- Vegana

SELECT * FROM tb_pizzas WHERE preco > 45.00;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00;

SELECT * FROM tb_pizzas WHERE nome LIKE '%M%';

SELECT * FROM tb_pizzas 
INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.id;

SELECT tb_pizzas.nome, tb_pizzas.preco, tb_categorias.nome_categoria 
FROM tb_pizzas 
INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.id
WHERE tb_categorias.nome_categoria = 'Doce';