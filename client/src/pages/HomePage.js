import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import axios from "axios";
import Post from "../components/Post";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const postsResponse = await getAllPosts()
        setPosts(postsResponse);
    }, [])

    async function getAllPosts() {
        const response = await axios.get('https://course-project-5cf53.web.app/api/post/getPosts');
        return response.data;
    }

    return (
        <div>
            <Header/>
            <div className='container'>
                <Search/>
                {posts.length
                    ? <h1>Loading...</h1>
                    : posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default HomePage;