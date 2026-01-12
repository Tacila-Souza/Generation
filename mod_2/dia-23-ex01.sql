CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_classe VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    habilidade_especial VARCHAR(255)
);

CREATE TABLE tb_personagens(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    poder_ataque INT,
    poder_defesa INT,
    nivel INT,
    classe_id BIGINT,
    -- Configuração da Chave Estrangeira (Foreign Key)
    FOREIGN KEY (classe_id) REFERENCES tb_classes(id)
);

INSERT INTO tb_classes (nome_classe, descricao, habilidade_especial) VALUES 
('Guerreiro', 'Alta resistência e combate corpo a corpo', 'Fúria de Batalha'), -- classe 1 
('Mago', 'Dano mágico alto e pouca defesa', 'Bola de Fogo'),                   -- classe 2
('Arqueiro', 'Ataque à distância e alta agilidade', 'Chuva de Flechas'),       -- classe 3
('Ladino', 'Furtividade e dano crítico', 'Ataque Surpresa'),                   -- classe 4
('Clérigo', 'Suporte e cura', 'Cura Divina');                                  -- classe 5

INSERT INTO tb_personagens (nome, poder_ataque, poder_defesa, nivel, classe_id) VALUES 
('Conan', 2500, 2000, 10, 1),      
('Gandalf', 3000, 1500, 20, 2),     
('Legolas', 2100, 1200, 15, 3),     
('Vax', 1800, 1100, 12, 4),         
('Mercy', 500, 2500, 18, 5),        
('Cecilia', 2200, 1800, 14, 1),    
('Harry', 2300, 1300, 14, 2),       
('Sylvanas', 2400, 1600, 19, 3);    

SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

SELECT * FROM tb_personagens WHERE nome LIKE '%C%';

SELECT * FROM tb_personagens 
INNER JOIN tb_classes ON tb_personagens.classe_id = tb_classes.id;

SELECT tb_personagens.nome, tb_personagens.poder_ataque, tb_classes.nome_classe 
FROM tb_personagens 
INNER JOIN tb_classes ON tb_personagens.classe_id = tb_classes.id
WHERE tb_classes.nome_classe = 'Arqueiro';
