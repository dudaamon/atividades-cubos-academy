const pool = require('./conexao')

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    if (!nome) {
        return res.status(400).json({ Mensagem: 'O campo nome é obrigatório.' })
    }
    try {
        const query = `insert into autores (nome, idade) values ($1, $2) returning *`
        const params = [nome, idade];
        const insert = await pool.query(query, params);;
        return res.json(insert.rows);
    } catch (error) {
        console.log(error.message);
    };
}

const buscarAutor = async (req, res) => {
    const { id } = req.params;

    try {
        const queryLivro = `select l.id as livro_id, l.nome as livro_nome, l.genero, l.editora, to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao
        from autores a join livros l on a.id = l.id_autor where a.id = $1`;
        const queryAutor = 'select * from autores where id = $1'

        const buscaLivro = await pool.query(queryLivro, [id])
        const buscaAutor = await pool.query(queryAutor, [id])

        if (buscaAutor.rowCount === 0) {
            return res.status(400).json({ Mensagem: "Autor não encontrado." })
        }

        const autor = {
            id: buscaAutor.rows[0].id,
            nome: buscaAutor.rows[0].nome,
            idade: buscaAutor.rows[0].idade,
            livros: []
        }

        for (const i of buscaLivro.rows) {
            autor.livros.push({
                id: i.livro_id,
                nome: i.livro_nome,
                genero: i.genero,
                editora: i.editora,
                data_publicacao: i.data_publicacao
            })
        }
        return res.json(autor)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ Mensagem: "Erro interno do servidor." });
    }
}

const cadastrarLivro = async (req, res) => {
    const { id } = req.params;
    const { nome, genero, editora, data_publicacao } = req.body;

    if (!nome) {
        return res.status(400).json({ Mensagem: 'O campo nome é obrigatório.' })
    }
    try {
        const query = `insert into livros (id_autor, nome, genero, editora, data_publicacao) values ($1, $2, $3, $4, $5) returning *`
        const params = [id, nome, genero, editora, data_publicacao]
        const livro = await pool.query(query, params)
        return res.json(livro.rows)
    } catch (error) {
        console.log(error.message)
    }
}

const listarLivros = async (req, res) => {
    try {
        const query = `select a.id as autor_id, a.nome, a.idade,
        l.id as livro_id, l.nome as livro_nome, l.genero, l.editora, to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao
        from autores a join livros l on a.id = l.id_autor`;

        const descricao = await pool.query(query)
        const saida = []

        for (let i in descricao.rows) {
            saida.push({
                id: descricao.rows[i].livro_id,
                nome: descricao.rows[i].livro_nome,
                genero: descricao.rows[i].genero,
                editora: descricao.rows[i].editora,
                data_publicacao: descricao.rows[i].data_publicacao,
                autor: {
                    id: descricao.rows[i].autor_id,
                    nome: descricao.rows[i].nome,
                    idade: descricao.rows[i].idade,
                }
            })
        }
        return res.json(saida)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { cadastrarAutor, buscarAutor, cadastrarLivro, listarLivros }