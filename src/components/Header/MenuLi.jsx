import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const MenuLi = ({linkText,linkurl, isActive}) => {
  return (
    <>
        <li>
        <NavLink to={linkurl} >{linkText}</NavLink>
        </li>
    </>
  )
}

export default MenuLi
