import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () =>
{
    return (<div> 
       <NavLink to="/"> Hi</NavLink>
       <NavLink to="/PostList"> PostList</NavLink>
       <NavLink to="/PostForm"> PostForm</NavLink>
       </div>)
}

export default Navigation