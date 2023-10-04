import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { ForumApi } from '../../api/ForumApi';

import "./Forum.css"

export const Forum = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
      ForumApi.getCategories(setCategories, setIsLoading);
    }

    useEffect(() => {
      getCategories();
    },[])


    const ForumView = () => {
        if(!isLoading){
            console.log(categories)
            return (
              
                categories.map((category, i) => {
                    return(
                        <Accordion.Item  eventKey={i} key={category._id}>
                            <Accordion.Header><span className='fw-bold'>{category.name}</span></Accordion.Header>
                            <Accordion.Body>
                              {category.description}
                                {/* {category.topics.map((topic) => (
                                    <div key={`${topic.title}-${category.id}`}>
                                        <Link>{topic.title}</Link>
                                        <br/>
                                    </div>
                                ))} */}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })
            )

        }

        return;
    }


    return (
        <Container>
            <h1 className='py-4'>Main Forum Page</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center align-content-center">
                  <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ):(
                <Container className='bg-secondary px-4 py-4'>
                    <Accordion defaultActiveKey="0">
                    <ForumView/>
                    </Accordion>
                </Container>
            )}
        </Container>
    );
};

