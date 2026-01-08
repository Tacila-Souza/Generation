-- ATIVIDADE 2 -  E-commerce

CREATE DATABASE db_ecommerce;
USE db_ecommerce;

CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    frete_gratis BOOLEAN, 
    PRIMARY KEY (id)
);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Smartphone XYZ", "Eletrônicos", 1500.00, 50, 1); 

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Fone de Ouvido Bluetooth", "Acessórios", 150.00, 200, 0); 

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Notebook Gamer", "Informática", 4500.00, 10, 1);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Mouse Óptico", "Informática", 45.90, 150, 0);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Smart TV 50", "Eletrônicos", 2800.00, 20, 1);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Cadeira de Escritório", "Móveis", 600.00, 15, 0);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Teclado Mecânico", "Periféricos", 350.00, 60, 1);

INSERT INTO tb_produtos (nome, categoria, preco, estoque, frete_gratis) 
VALUES ("Cabo HDMI 2m", "Acessórios", 25.00, 300, 0);

SELECT * FROM tb_produtos WHERE preco > 500;

SELECT * FROM tb_produtos WHERE preco < 500;

-- 6.  Atualiza o preço e o estoque do Mouse 
UPDATE tb_produtos 
SET preco = 49.90, estoque = 140  WHERE id = 4;

-- Conferindo se a att funcionou
SELECT * FROM tb_produtos WHERE id = 4;