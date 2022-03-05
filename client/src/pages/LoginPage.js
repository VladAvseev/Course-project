import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import RegistrationForm from "../components/RegistrationForm";
import {useNavigate} from 'react-router-dom';
const VK = window.VK;

const LoginPage = () => {
    const push = useNavigate();
    const [regForm, setRegForm] = useState(false);
    const [candidateId, setCandidateId] = useState(0);

    useEffect(() => {
        VK.Widgets.Auth('vk_auth', {onAuth: async (data) => {
            const vk_id = data.uid
            await singIn(vk_id);
        }})
    }, []);

    async function singIn(id) {
        const response = await axios.post('https://secure-cliffs-35178.herokuapp.com/api/auth/login', {userId: id});
        const auth = response.data.isAuth;
        if (auth) {
            const user = response.data;
            localStorage.setItem('user', JSON.stringify({...user, isAuth: true}));
            push('/');
        } else {
            setRegForm(true);
            setCandidateId(id);
        }
    }

    async function singUp(userInfo) {
        const response = await axios.post('https://secure-cliffs-35178.herokuapp.com/api/auth/registration',
            {
                userId: userInfo.id,
                userName: userInfo.name,
                admin: false
            });
        const user = response.data;
        localStorage.setItem('user', JSON.stringify({...user, isAuth: true}));
        push('/');
    }

    return (
        <div>
            {regForm
                ?
                <RegistrationForm handler={singUp} id={candidateId}/>
                :
                <div className='login-wrapper'>
                    <h1 style={{color: '#fff'}}>Sing In</h1>
                    <div className='login-form'>
                        <div id='vk_auth'/>
                    </div>
                </div>
            }
        </div>
    );
};

export default LoginPage;