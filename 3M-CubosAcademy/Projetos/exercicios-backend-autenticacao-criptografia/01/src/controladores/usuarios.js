const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt')

const cadastroUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const validacaoEmail = await pool.query('select * from usuarios where email = $1', [email])
        if (validacaoEmail.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Email já existente.' })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query('insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *', [nome, email, senhaCriptografada])

        const usuarioSemSenha = { ...novoUsuario.rows[0], senha: '***' }; //para não mostrar a senha na resposta

        return res.status(201).json(usuarioSemSenha)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body

    try {
        const usuario = await pool.query('select * from usuarios where email = $1', [email])
        if (usuario.rowCount < 1) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida.' })
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)
        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida.' })
        }

        const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, { expiresIn: '8h' })

        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.json({ usuario: usuarioLogado, token })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = { cadastroUsuario, loginUsuario }