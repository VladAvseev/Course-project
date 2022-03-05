import {useEffect, useState} from "react";

function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState({isAuth: false});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setCurrentUser(user)
        }
    }, []);

    return [currentUser, setCurrentUser];
}

export default useCurrentUser;