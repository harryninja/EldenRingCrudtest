DROP DATABASE IF EXISTS pessoa;
CREATE DATABASE pessoa TEMPLATE template1;

CREATE TABLE profissao (
    prof_id INT PRIMARY KEY,
    prof_nome VARCHAR(255)
)

CREATE TABLE pessoa (
    pes_id INT PRIMARY KEY,
    pes_nome VARCHAR(255),
    pes_data_nascimento DATE,
    pes_cpf VARCHAR(14),
    pes_telefone VARCHAR(14) NULL,
    pes_observacoes VARCHAR NULL,
    pes_prof_id INT,
    FOREIGN KEY (pes_prof_id) REFERENCES profissao(prof_id)
)

INSERT INTO profissao (prof_id, prof_nome)
VALUES
(1, 'Professor'),
(2, 'Desenvolvedor'),
(3, 'Tech Lead')

INSERT INTO pessoa (pes_id, pes_nome, pes_data_nascimento, pes_cpf, pes_telefone, pes_observacoes, pes_prof_id)
VALUES
(1, 'Harold', '2000-01-01', '123456789', '1234567890', 'Observações 1', 1),
(2, 'Marcel', '2001-01-01', '987654321', '0987654321', 'Observações 2', 2),
(3, 'Illert', '2002-01-01', '112233445', '1122334455', 'Observações 3', 3);

