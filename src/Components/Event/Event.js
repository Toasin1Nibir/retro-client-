import React from 'react';
import Card from 'react-bootstrap/Card'
import './Event.css'
import { useHistory} from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const Event = ({events}) => {
    const history = useHistory()
    const handleClick =(idblog)=>{
        const url = `/blog/${idblog}`
        history.push(url)
    }
    return (

        <div className="col-md-6 mb-5 ">
            <Card className="singleCard w-100">
                <Card.Img className="card-img" variant="top" src={events.imageURL} />
                <Card.Body className="pb-5">
                    <div className="blog-highlights d-flex justify-content-between align-items-center mb-3">
                        <div className="category">
                            <p>category</p>
                        </div>
                        <div className="blog-option">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                ></Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        report as spammer
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        delete all comment for this post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        turn off comment
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        schedule turn off comment
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        delete post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        edit post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        copy link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <Card.Title className="card-title">{events.title}</Card.Title>
                    <Card.Text className="card-description">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </Card.Text>
                </Card.Body>
                <div className="card-footer">
                    
                    <button type="button" class="btn btn-primary"  onClick={() => handleClick(events._id)}>Read More ...</button>
                </div>
            </Card>
        </div>
    
     
      

       
    );
};

export default Event;