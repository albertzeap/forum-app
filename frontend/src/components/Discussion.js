import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ForumApi } from '../api/ForumApi';
import "../css/Discussion.css"



/*
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now },
*/




export const Discussion = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const category = queryParams.get('name');
    const [discussions, setDiscussions] = useState([]);


    const handleClick = (discussionId) => {
        navigate(`/forum/category/discussion?id=${discussionId}`)
    }

    useEffect(() => {
        ForumApi.getDiscussionByCategory(id, setDiscussions);
    }, [])

    return (
    <div>
        
            <h1>Welcome to {category}</h1>

            <div className="discussion-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                    {discussions.map((discussion) => (
                        
                        <tr key={discussion._id} onClick={() => handleClick(discussion._id)}>
                            <td>
                                <p>{discussion.title}</p>
                                <p>Created by</p>
                            </td>
                            <td>{discussion.content}</td>
                            <td>{discussion.createdAt}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
      
    </div>
    )
}
