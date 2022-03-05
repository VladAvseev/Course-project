import React, {useEffect, useState} from 'react';
import useCurrentUser from "../hooks/useCurrentUser";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Header from "../components/Header";

const AdminPage = () => {
    const push = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const [currentUser, setCurrentUser] = useCurrentUser();

    useEffect(async () => {
        if (currentUser.role !== 'ADMIN') push('/');
        else {
            const response = await axios.get('https://secure-cliffs-35178.herokuapp.com/api/user/users');
            setAllUsers(response.data);
        }
    }, [])

    return (
        <div>
            <Header/>
            {allUsers.map(user =>
                <div>{user.id} : {user.name} : {user.role}</div>
            )}
        </div>
    );
};

export default AdminPage;