import React, {useState} from 'react';
import '../App.css';

const RegistrationForm = ({handler, id}) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    return (
        <div className='login-wrapper'>
            <h1 style={{color: '#fff'}}>Registration</h1>
            <div className='registration-form'>
                <form>
                    <div className="mb-3">
                        {nameError
                            ?
                            <div className="alert alert-danger" role="alert">
                                Enter your name
                            </div>
                            : null}
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder='Enter your name'
                            style={{width: '100%'}}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-warning"
                        onClick={(e) => {
                            e.preventDefault();
                            if (name.length) {
                                setNameError(false);
                                handler({id, name});
                            } else {
                                setNameError(true);
                            }
                        }}
                    >Sing Up</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;