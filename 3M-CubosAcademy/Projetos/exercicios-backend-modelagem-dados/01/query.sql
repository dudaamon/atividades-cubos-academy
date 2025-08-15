-- Criação do banco de dados:
create database ecommerce;

create table categorias (
  id serial primary key,
  nome varchar(50) not null
);

create table produtos (
  id serial primary key,
  nome varchar(100) not null,
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
  categoria_id integer references categorias(id)
);

create table clientes (
  cpf char(11) unique,
  nome varchar(150)
);

create table vendedores (
  cpf char(11) unique,
  nome varchar(150)
);

create table pedidos (
  id serial primary key,
  valor integer,
  cliente_cpf char(11),
  vendedor_cpf char(11)
);

create table itens_do_pedido (
  id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer,
  produto_id integer references produtos(id)
);

-- #1
insert into categorias (nome) values ('frutas'), ('verduras'), ('massas'), ('bebidas'), ('utilidades');

-- #2
insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id) values
('Mamão', 'Rico em vitamina A, potássio e vitamina C.', 300, 123, 1),
('Maçã', 'Fonte de potássio e fibras.', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original.', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado.', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança.', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora.', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado.', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C.', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

-- #3
insert into clientes (cpf, nome) values
(80371350042, 'José Augusto Silva'),
(67642869061, 'Antonio Oliveira'),
(63193310034, 'Ana Rodrigues'),
(75670505018, 'Maria da Conceição'); 

-- #4
insert into vendedores (cpf, nome) values
(82539841031, 'Rodrigo Sampaio'), 
(23262546003, 'Beatriz Souza Santos'), 
(28007155023, 'Carlos Eduardo');

-- #5
insert into pedidos (valor, cliente_cpf, vendedor_cpf) values
(((300*1) + (700*1) + (1200*6) + (1000*1) + (90*5)), 80371350042, 28007155023),
(((198*10) + (420*3) + (300*5) + (125*10) + (235*2)), 63193310034, 23262546003),
(((2350*1) + (130*6) + (198*5)), 75670505018, 23262546003),
(((2290*1) + (420*6) + (690*1) + (300*3) + (125*20) + (235*2)), 75670505018, 82539841031),
(((420*6) + (875*1) + (198*3) + (125*8) + (1200*2)), 67642869061, 82539841031);

insert into itens_do_pedido (pedido_id, quantidade, produto_id) values 
(1,1,1),(1,1,10),(1,6,11),(1,1,15),(1,5,2),
(2,10,17),(2,3,18),(2,5,1),(2,10,5),(2,2,6),
(3,1,13),(3,6,12),(3,5,17),
(4,1,16),(4,6,18),(4,1,7),(4,3,1),(4,20,5),(4,2,6),
(5,8,18),(5,1,8),(5,3,17),(5,8,5),(5,2,11);

update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id in (1, 10, 15, 13, 16, 7, 8);
update produtos set quantidade_em_estoque = quantidade_em_estoque-2 where id in (11);
update produtos set quantidade_em_estoque = quantidade_em_estoque-3 where id in (18, 1);
update produtos set quantidade_em_estoque = quantidade_em_estoque-4 where id in (6);
update produtos set quantidade_em_estoque = quantidade_em_estoque-5 where id in (2, 1, 17);
update produtos set quantidade_em_estoque = quantidade_em_estoque-6 where id in (11, 12, 18);
update produtos set quantidade_em_estoque = quantidade_em_estoque-8 where id in (18, 5);
update produtos set quantidade_em_estoque = quantidade_em_estoque-10 where id in (17, 5);
update produtos set quantidade_em_estoque = quantidade_em_estoque-20 where id in (5);