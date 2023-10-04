import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { ForumApi } from '../../api/ForumApi';

import "./Forum.css"

export const Forum = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [visibleCategories, setVisibleCategories] = useState([]);

    const getCategories = async () => {
      ForumApi.getCategories(setCategories, setIsLoading);
    }

    const handleVisibility = (categoryId) => {

        setVisibleCategories((prevVisibleCategories) => {
            if (prevVisibleCategories.includes(categoryId)) {
              return prevVisibleCategories.filter((id) => id !== categoryId);
            } else {
              return [...prevVisibleCategories, categoryId];
            }
        });
    }

    useEffect(() => {
      getCategories();
    },[])


    const ForumView = () => {
        if(!isLoading){
            return (
              
                categories.map((category, i) => {
                    return(
                        <div className='accordion-item' onClick={() => handleVisibility(category._id)} key={category._id}>
                            <div className='accordion-header'>
                                <div className='category-name-container'>
                                    <h2>
                                        {category.name}
                                    </h2>
                                </div>
                                <div className="icon-container">
                                    {visibleCategories.includes(categories._id) ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                                    ):(
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                    )}
                                </div>
                            </div>
                            <div className={visibleCategories.includes(category._id) ? "accordion-body-visible" : "accordion-body-invisible"}>
                                <p> {category.description} </p>
                                <Link href="/">See more</Link>
                            </div>
                        </div>
                    );
                })
            )

        }

        return;
    }


    return (
        <div className="container">
            <h1 className='py-4'>Main Forum Page</h1>
            {isLoading ? (
                <div className="loading-container">
                  <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ):(
                <div className='forum-container'>
                    <div className='accordion'>
                        <ForumView/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Forum;