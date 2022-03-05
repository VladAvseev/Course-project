import React, {useState} from 'react';
import '../App.css';
import axios from "axios";

const CreatePostForm = ({cancelBtn, currentUser}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [theme, setTheme] = useState(11)

    async function createPost(title, text, currentUser, theme) {
        const nowDate = new Date;
        const response = await axios.post('https://secure-cliffs-35178.herokuapp.com/api/post/create', {
            themeId: theme,
            userId: currentUser.id,
            title: title,
            text: text,
            timeOfCreation: nowDate.toLocaleDateString()
        })
        console.log(nowDate.toLocaleDateString())
        console.log(response.data);
    }

    return (
        <div className='wrapper'>
            <div className='modal-form'>
                <div className='modal-header'>
                    <h3>Create new post</h3>
                </div>
                <div className='modal-body'>
                    <form>
                        <h6>Choose theme:</h6>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value={'Cinema'}
                                onChange={(e) => setTheme(11)}
                                checked
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Cinema
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value={'Music'}
                                onChange={(e) => setTheme(21)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Music
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value={'Books'}
                                onChange={(e) => setTheme(31)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Books
                            </label>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                rows={5}
                                style={{resize: 'none'}}
                                className="form-control"
                                placeholder='text'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button className="btn btn-outline-light" onClick={() => cancelBtn(false)}>Cancel</button>
                    <button className="btn btn-outline-light" onClick={async () => {
                        await createPost(title, text, currentUser, theme);
                        cancelBtn(false);
                    }}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostForm;