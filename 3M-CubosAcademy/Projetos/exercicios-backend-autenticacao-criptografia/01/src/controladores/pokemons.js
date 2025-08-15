const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt')

const cadastroPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem } = req.body
    const usuario_id = req.usuario_id

    if (!nome || !habilidades) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' })
    }
    try {
        const { rows } = await pool.query(
            'insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1, $2, $3, $4, $5) returning *',
            [usuario_id, nome, apelido, habilidades, imagem]
        )
        return res.status(201).json(rows[0])
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const atualizarApelido = async (req, res) => {
    const { apelido } = req.body
    const { id } = req.params

    try {
        const { rowCount } = await pool.query('select * from pokemons where id = $1 and usuario_id = $2', [id, req.usuario_id])
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
        }
        await pool.query('update pokemons set apelido = $1 where id = $2', [apelido, id])
        return res.status(204).send()
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }

}

const listarPokemons = async (req, res) => {
    try {
        const { rows: pokemons } = await pool.query('select id, nome, habilidades, apelido, imagem from pokemons where usuario_id = $1', [req.usuario_id])
        for (const pokemon of pokemons) {
            pokemon.habilidades = pokemon.habilidades.split(', ')
            pokemon.usuario = req.usuario.nome
        }
        return res.json(pokemons)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor.')
    }
}

const detalharPokemonID = async (req, res) => {
    const { id } = req.params

    try {
        const { rows, rowCount } = await pool.query('select * from pokemons where id = $1 and usuario_id = $2', [id, req.usuario_id])
        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado.' })
        }
        const pokemon = rows[0]
        pokemon.habilidades = pokemon.habilidades.split(', ')
        pokemon.usuario = req.usuario.nome
        return res.json(pokemon)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor.')
    }
}

const excluirPokemon = async (req, res) => {
    const { id } = req.params

    try {
        const { rows, rowCount } = await pool.query('select  id, nome, habilidades, apelido, imagem from pokemons where id = $1 and usuario_id = $2', [id, req.usuario_id])
        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado.' })
        }
        await pool.query('delete from pokemons where id = $1', [id])
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    cadastroPokemon,
    atualizarApelido,
    listarPokemons,
    detalharPokemonID,
    excluirPokemon
}