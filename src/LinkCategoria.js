import React from 'react'
import { Link } from 'react-router-dom'

const LinkCategoria = (props) => {
    return (
        <Link to={`/categorias/${props.categoria.url}`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${props.categoria.icon} fa-4x`} aria-hidden="true"></i><br />
            {props.categoria.categoria}
        </Link>
    )
}

export default LinkCategoria