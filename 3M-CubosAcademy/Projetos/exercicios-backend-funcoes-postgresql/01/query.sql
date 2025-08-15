--1
select count(medicamento) from farmacia;

--2
select min(idade) from usuarios;

--3
select max(idade) from usuarios;

--4
select avg(idade) from usuarios where idade >= 18;

--5
select sum(estoque) from farmacia where categoria = 'black' or categoria = 'blue';

--6
select categoria, sum(estoque) as "somaEstoque" from farmacia where categoria is not null group by categoria;

--7
select sum(estoque) as "somaEstoque" from farmacia where categoria is null;

--8
select count(medicamento) from farmacia where categoria is null;

--9
select concat(medicamento,' - (', categoria,')') as "Medicamento e Categoria" from farmacia where categoria is not null;

--10
select concat(id, ' - ', medicamento, '  -  (', coalesce(categoria, null, 'Sem categoria'), ')') from farmacia;

--11
select nome, idade, cadastro from usuarios where cadastro >= '2020-01-01' and cadastro < '2020-12-31';

--12
select nome, idade, email, cadastro, age(cadastro::timestamp) from usuarios where idade < 18;

--13
select nome, idade, email, cadastro, age(cadastro::timestamp) from usuarios where idade > 59;

--14
select categoria, count(medicamento) from farmacia where categoria is not null group by categoria;

--15
select idade, count(id) as "RegistrosIdade" from usuarios where idade >= 18 group by idade;

--16
select categoria, count(id) as "QuantidadeProduto", sum(estoque) as "SomaEstoque" from farmacia group by categoria limit 3;