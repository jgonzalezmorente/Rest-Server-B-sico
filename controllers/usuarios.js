const { response, request } = require( 'express' );


const usuariosGet = ( req = request, res = response ) => {

    const { q, nombre, apiKey = 'no apiKey', page = '1', limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit,
    });
}

const usuariosPost = ( req, res ) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        nombre,
        edad,
        msg: 'post API - controlador'
    });

}

const usuariosPut = ( req, res ) => {
    
    const { id } = req.params;

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador',
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}