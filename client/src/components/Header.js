import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

const Header = () => {
    const [currentUser, setCurrentUser] = useCurrentUser();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        if (currentUser.role === 'ADMIN') setAdmin(true);
    }, [currentUser]);

    function logOut() {
        localStorage.setItem('user', JSON.stringify({}));
        setCurrentUser({isAuth: false});
    }

    return (
        <header className='header'>
            <Link to='/' className='logo'><h6 className=''>Course Project</h6></Link>
            {
                currentUser.isAuth
                ?
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h6 style={{color: '#fff', margin: '0 10px'}}>{currentUser.name || ''}</h6>
                        {admin
                            ?
                            <Link to='/admin'>
                                <button type="button" className="btn btn-outline-light" style={{marginRight: 10}}>Admin</button>
                            </Link>
                            : null
                        }
                        <Link to='/profile'>
                            <button type="button" className="btn btn-outline-light" style={{marginRight: 10}}>My profile</button>
                        </Link>
                        <button type="button" className="btn btn-outline-light" onClick={logOut}>Log Out</button>
                    </div>
                :
                    <Link to='/login'>
                        <button type="button" className="btn btn-outline-light">Log In</button>
                    </Link>
            }
        </header>
    );
};

export default Header;