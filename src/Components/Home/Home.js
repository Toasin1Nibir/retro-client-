
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Event from '../Event/Event';
import Header from '../Header/Header';

const Home = () => {
    
    const [event , setEvent] = useState([])
    useEffect(()=>{
        fetch('https://peaceful-cove-86161.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setEvent(data))
    } ,[])
    return (
       
        <div className="container">
             <div class="navbar-nav">
                 <Header/>
                        <Link to="/makeadmin">Home</Link>
                        
                </div>
            <div className="row">
                {
                    event.map(events => <Event events={events} key={events._id}></Event>)
                }

            </div>
        </div>
       
    );
};

export default Home;