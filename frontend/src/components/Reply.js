import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import { ForumApi } from '../api/ForumApi';
import { useLocation } from 'react-router-dom';
import "../css/Reply.css"


export const Reply = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const discussonId = queryParams.get('id');
    const [replies, setReplies] = useState([]);
    const [textareaValue, setTextareaValue] = useState('');
    const [sentReply, setSentReply] = useState(false);
    const isLoggedIn = sessionStorage.length > 0;

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
    };

    const handleIsSent = () => {
        setSentReply(!sentReply);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(textareaValue){
            const content = textareaValue;
            const userToken = sessionStorage.getItem('token');
            const decodedToken = jwtDecode(userToken);
            const userId = decodedToken.userId;
            
            ForumApi.createReply(userId, discussonId, content, handleIsSent);
    
            e.target.value = "";
            setTextareaValue("");
        } else {
            alert("Looks like you didn't type anything :(")
        }
    }


    useEffect(() => {
        ForumApi.getReplyByDiscussion(discussonId, setReplies);
    }, [sentReply])

  return (
    <div>
        <div className="reply-outer-container">
            {replies.map((reply) => (
                <div key={reply._id} className="reply-container">
                    <p className="reply-content">{reply.content}</p>
                    <small className='reply-metadata'>{reply.createdAt}</small>
                </div>
            ))}

            {isLoggedIn ? (
                <div className='reply-input-container'>
                    <textarea className='reply-input' value={textareaValue} onChange={handleTextareaChange}/>
                    <button className='reply-button' onClick={handleSubmit}>Reply</button>
                </div>
        
            ):(
                <></>
            )}
        </div>
    </div>
  )
}
