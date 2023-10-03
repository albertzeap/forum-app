import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

import "./Forum.css"



const SampleCategories = {
    categories: [
      {
        id: 1,
        name: "General Discussion",
        topics: [
          {
            title: "Introduce Yourself",
            posts: [
              { username: "user1", content: "Hello, everyone!" },
              { username: "user2", content: "Nice to meet you all!" },
            ],
          },
          {
            title: "Forum Rules",
            posts: [
              { username: "moderator", content: "Read and follow the rules!" },
              { username: "user3", content: "Got it, thanks!" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Programming",
        topics: [
          {
            title: "JavaScript",
            posts: [
              { username: "developer1", content: "I love JavaScript!" },
              { username: "developer2", content: "Any ES6 tips?" },
            ],
          },
          {
            title: "Python",
            posts: [
              { username: "pythonista", content: "Python is awesome!" },
              { username: "developer3", content: "Django vs Flask?" },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "General Discussion",
        topics: [
          {
            title: "Introduce Yourself",
            posts: [
              { username: "user1", content: "Hello, everyone!" },
              { username: "user2", content: "Nice to meet you all!" },
            ],
          },
          {
            title: "Forum Rules",
            posts: [
              { username: "moderator", content: "Read and follow the rules!" },
              { username: "user3", content: "Got it, thanks!" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "General Discussion",
        topics: [
          {
            title: "Introduce Yourself",
            posts: [
              { username: "user1", content: "Hello, everyone!" },
              { username: "user2", content: "Nice to meet you all!" },
            ],
          },
          {
            title: "Forum Rules",
            posts: [
              { username: "moderator", content: "Read and follow the rules!" },
              { username: "user3", content: "Got it, thanks!" },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Programming",
        topics: [
          {
            title: "JavaScript",
            posts: [
              { username: "developer1", content: "I love JavaScript!" },
              { username: "developer2", content: "Any ES6 tips?" },
            ],
          },
          {
            title: "Python",
            posts: [
              { username: "pythonista", content: "Python is awesome!" },
              { username: "developer3", content: "Django vs Flask?" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "General Discussion",
        topics: [
          {
            title: "Introduce Yourself",
            posts: [
              { username: "user1", content: "Hello, everyone!" },
              { username: "user2", content: "Nice to meet you all!" },
            ],
          },
          {
            title: "Forum Rules",
            posts: [
              { username: "moderator", content: "Read and follow the rules!" },
              { username: "user3", content: "Got it, thanks!" },
            ],
          },
        ],
      },
      // Add more categories as needed
    ],
  };
  


export const Forum = () => {

    const [isLoading, setIsLoading] = useState(true);

    const ForumView = () => {
        if(!isLoading){
            return (

                SampleCategories.categories.map((category) => {
                    return(
                        <Accordion.Item  eventKey={category.id} key={category.id}>
                            <Accordion.Header><span className='fw-bold'>{category.name}</span></Accordion.Header>
                            <Accordion.Body>
                                {category.topics.map((topic) => (
                                    <div key={`${topic.title}-${category.id}`}>
                                        <Link>{topic.title}</Link>
                                        <br/>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })
            )

        }

        return;
    }


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    })


    return (
        <Container>
            <h1 className='py-4'>Main Forum Page</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center align-content-center">
                  <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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

