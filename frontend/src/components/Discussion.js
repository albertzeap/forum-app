import React from 'react'
import { useLocation } from 'react-router-dom';



/*
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now },
*/

const sampleData = [
    {
        id: 1,
        title: "What does the fox say?",
        author: "651c320affc46ae76404ffc8",
        category: "651c65b3e34584ce45533a99",
        createdAt: Date.now()
    },
    {
        id: 2,
        title: "What would you do?",
        author: "651c320affc46ae76404ffc8",
        category: "651c65b3e34584ce45533a99",
        createdAt: Date.now()
    },
    {
        id: 3,
        title: "What are your thoughts on ...?",
        author: "651c320affc46ae76404ffc8",
        category: "651c65b3e34584ce45533a99",
        createdAt: Date.now()
    },

]


export const Discussion = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const category = queryParams.get('name');


    console.log(id);
    console.log(category)

    return (
    <div>
        <div>
            <h1>Welcome to {category}</h1>
            <table className='discussion-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Replies</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                  
                {sampleData.map((discussion) => (
                    <tr>
                        <td>{discussion.title}</td>
                        <td>400</td>
                        <td>{discussion.createdAt}</td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    )
}
