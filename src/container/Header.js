import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div>
            <Link to='/' className="brand-logo"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Spring-Boot &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; MySQL</Link>
            </div>
            <ul className="right">
            <li><Link to='/signup'>Create</Link></li> 
            <li><Link to='/'>Read</Link></li> 
            <li><Link to='/update'>Update</Link></li>
            <li><Link to='/delete'>Delete</Link></li>            
            <li><Link to='# ' className='btn btn-floating red darken-3'>PK</Link></li>
        </ul>
        </nav>
    )
}

export default (Header);

//<li><Link to='/signin'>Sign In</Link></li>
