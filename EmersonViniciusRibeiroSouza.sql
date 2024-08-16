CREATE DATABASE IF NOT EXISTS Emerson_pro;

USE Emerson_pro;

CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS palestrantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    especialidade VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS participantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS participantes_eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    FOREIGN KEY (participante_id) REFERENCES participantes(id) ON DELETE CASCADE,
    FOREIGN KEY (evento_id) REFERENCES eventos(id) ON DELETE CASCADE,
    UNIQUE KEY (participante_id, evento_id)
);

CREATE TABLE IF NOT EXISTS eventos_palestrantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    evento_id INT NOT NULL,
    palestrante_id INT NOT NULL,
    FOREIGN KEY (evento_id) REFERENCES eventos(id) ON DELETE CASCADE,
    FOREIGN KEY (palestrante_id) REFERENCES palestrantes(id) ON DELETE CASCADE,
    UNIQUE KEY (evento_id, palestrante_id)
);

CREATE TABLE IF NOT EXISTS feedbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    participante_id INT NOT NULL,
    evento_id INT NOT NULL,
    nota INT NOT NULL CHECK (nota >= 1 AND nota <= 5),
    comentario TEXT,
    FOREIGN KEY (participante_id) REFERENCES participantes(id) ON DELETE CASCADE,
    FOREIGN KEY (evento_id) REFERENCES eventos(id) ON DELETE CASCADE
);
