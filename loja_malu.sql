drop database if exists LOJA_MALU;

CREATE DATABASE LOJA_MALU;

USE LOJA_MALU;

CREATE TABLE clientes(
CodigoCliente INTEGER AUTO_INCREMENT PRIMARY KEY,
nome varchar(50) NOT NULL,
Logradouro varchar(50) not null,
Numero varchar(8) not null,
Bairro varchar(50) NOT NULL,
CEP char(8) NOT NULL,
Cidade varchar(20) NOT NULL,
CNPJ CHAR(14) NOT NULL,
IE VARCHAR(20)  NOT NULL
);

CREATE TABLE vendedores(
CodigoVendedor INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
Nome varchar(50),
SalarioFixo decimal(10,4)
);

CREATE TABLE pedidos (
codigoPedido INTEGER PRIMARY KEY AUTO_INCREMENT,
dataPedido TIMESTAMP NOT NULL,
dataEntrega DATETIME NOT NULL,
codigoVendedor integer not null,
codigoCliente integer not null,
CONSTRAINT FOREIGN KEY FK_COD_VENDEDOR  (codigoVendedor) REFERENCES vendedores(CodigoVendedor),
constraint  FOREIGN KEY FK_COD_CLIENTE (codigoCliente) REFERENCES clientes(CodigoCliente)

);

CREATE TABLE produtos(
codigoProduto INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
Nome varchar(50) not null,
precoUnitario Decimal(10,4),
QuantidadeEstoque INTEGER not null
);


CREATE TABLE ItemPedido(
CodigoProduto INTEGER NOT NULL,
CodigoPedido INTEGER NOT NULL,
quantidade INTEGER NOT NULL,
CONSTRAINT  FOREIGN KEY FK_COD_PRODUTO (CodigoProduto) REFERENCES produtos(codigoProduto),
CONSTRAINT FOREIGN KEY FK_COD_PEDIDO (CodigoPedido) REFERENCES pedidos(codigoPedido),
PRIMARY KEY(CodigoProduto, CodigoPedido)
);

INSERT INTO pedidos(dataEntrega, codigoVendedor, codigoCliente) VALUES (23/04/2024, 1,1);



CREATE TABLE pessoa(
codigoPessoa INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome varchar(30) NOT NULL,
endereco varchar(30) DEFAULT 'Avenida Paulista',
sexo ENUM('M', 'F') NOT NULL
);

INSERT INTO pessoa (codigoPessoa, nome, sexo) VALUES (NULL, 'Joao Silva', 'M');

--UPDATE pessoa SET sexo ='F' where codigoPessoa = 2;

--SELECT * FROM pessoa;

--DELETE FROM pessoa where id = 2;

INSERT INTO clientes (nome, Logradouro, Numero, Bairro, CEP, Cidade, CNPJ, IE)
VALUES 
('Erick Guimaraes', 'Rua dos Casados', '99', 'Grajau', '04849531', 'São Paulo', '12345678000195', '123456789123'),
('Ricardo Calil', 'Rua do Feijão', '73', 'Tatuape', '04842123', 'São Paulo', '12345678000195', '123456789123'),
('Vagner Beralto', 'Rua dos Policiais', '157', 'Jaçana', '04849531', 'São Paulo', '12345678000195', '123456789123'),
('Davi Desiro', 'Rua do Rock', '66', 'Bairro do Rock', '04849666', 'São Paulo', '12345678000195', '123456789123'),
('Caio Abner', 'Rua do Quero Morrer', '123', 'Vila Preguiça', '04849000', 'São Paulo', '12345678000195', '123456789123');


INSERT INTO vendedores (Nome, SalarioFixo) VALUES
('Ana Souza', 3500.5000),
('Carlos Pereira', 4200.7500),
('Mariana Lima', 3800.2500),
('João Fernandes', 4000.0000),
('Beatriz Oliveira', 3700.6000);

INSERT INTO produtos (Nome, precoUnitario, QuantidadeEstoque) VALUES
('Notebook Dell', 3500.5000, 10),
('Smartphone Samsung', 2500.7500, 25),
('Monitor LG', 1200.2500, 15),
('Teclado Mecânico', 350.0000, 50),
('Mouse Gamer', 150.6000, 30);

INSERT INTO pedidos(dataPedido,dataEntrega, codigoVendedor, codigoCliente) VALUES (NOW(),'20240423', 1,1);




 