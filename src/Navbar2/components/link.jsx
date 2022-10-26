import React from 'react'
import { NavLink } from "react-router-dom"
import Icon from "../../components/ChangeIcon"

function Link({ link, label, icon }) {

    const defaultLinkStyle = "text-indigo-100 pb-1 flex items-center gap-1"

    return (

        <NavLink
            to={link}
            className={({ isActive }) =>
                isActive ? `${defaultLinkStyle} text-indigo-300` : `${defaultLinkStyle}`
            }
            end>

            <Icon name={icon} />

            {label}

        </NavLink>


    )
}

export default Link