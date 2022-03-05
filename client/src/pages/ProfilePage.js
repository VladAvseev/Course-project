import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import useCurrentUser from "../hooks/useCurrentUser";
import CreatePostForm from "../components/CreatePostForm";

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useCurrentUser();
    const [createPostFrom, setCreatePostFrom] = useState(false);
    return (
        <div>
            {createPostFrom ? <CreatePostForm cancelBtn={setCreatePostFrom} currentUser={currentUser}/> : null}
            <Header/>
            <div className='container' style={{minHeight: '100vh'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
                    <h1>Hi, {currentUser.name}!</h1>
                    <button className="btn btn-outline-warning" onClick={() => setCreatePostFrom(true)}>New post</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;