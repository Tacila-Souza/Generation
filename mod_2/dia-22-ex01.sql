-- ATIVIDADE 01 - Serviço de RH

CREATE DATABASE db_rh_empresa;
USE db_rh_empresa;

CREATE TABLE tb_colaboradores (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    data_admissao DATE,
    salario DECIMAL(10, 2) NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO tb_colaboradores (nome, cargo, data_admissao, salario) 
VALUES ("Maria Silva", "Desenvolvedora Jr", "2023-10-01", 2500.00);

INSERT INTO tb_colaboradores (nome, cargo, data_admissao, salario) 
VALUES ("João Santos", "Estagiário", "2024-01-15", 1500.00);

INSERT INTO tb_colaboradores (nome, cargo, data_admissao, salario) 
VALUES ("Ana Costa", "Gerente de Projetos", "2022-05-20", 8500.00);

INSERT INTO tb_colaboradores (nome, cargo, data_admissao, salario) 
VALUES ("Pedro Oliveira", "Auxiliar Administrativo", "2023-02-10", 1800.00);

INSERT INTO tb_colaboradores (nome, cargo, data_admissao, salario) 
VALUES ("Carla Souza", "Tech Lead", "2021-03-01", 12000.00);

SELECT * FROM tb_colaboradores WHERE salario > 2000;

SELECT * FROM tb_colaboradores WHERE salario < 2000;

-- 6. Atualiza registro
UPDATE tb_colaboradores 
SET salario = 1900.00, cargo = "Assistente" WHERE id = 2;
