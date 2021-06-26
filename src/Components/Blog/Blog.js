import React from 'react';
import {useParams} from 'react-router-dom'
import  { useContext, useEffect, useState } from 'react';

//   import { useForm } from "react-hook-form";

  import Card from 'react-bootstrap/Card'
import Header from '../Header/Header';
import { UserContext } from '../../App';

const Blog = ({events}) => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [book , setBook] = useState([])
  
    useEffect(()=>{
        fetch('https://peaceful-cove-86161.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBook(data))
    } ,[])
    const{idblog} = useParams()
    console.log('before find',idblog)

    const match = book.find(pd => pd._id == idblog)
    const deletebtn =(_id) =>{
        const url = `https://peaceful-cove-86161.herokuapp.com/delete/${_id}`;
        fetch(url,{ 
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deleted')
        })
    }
    
    return (
        <div className="container col-md-12 mb-5">
            <Header/>
            <Card className="singleCard">
                <Card.Img className="card-img " variant="top" src={match?.imageURL} />
                <Card.Body className="pb-5">
                    <div className="blog-highlights d-flex justify-content-between align-items-center mb-3">
                        <div className="category">
                            <p>category</p>
                        </div>
                        <div className="blog-option">
                          
                        </div>
                    </div>
                    <Card.Title className="card-title">{match?.title}</Card.Title>
                    <Card.Text className="card-description">
                    {match?.blog}
                    </Card.Text>
            </Card.Body>{loggedInUser.email &&
                <div className="card-footer">
                    
                    <button  class="btn btn-danger" onClick={() =>  deletebtn(match?._id)}>DELETE</button>
                </div>}
            </Card>
        </div>
    );
};

export default Blog;