import React ,{useContext,useEffect,useState}from 'react';
// import './MakeAdmin.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


const Makeadmin = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const [isAdmin , setisAdmin] = useState(false)

    const onSubmit = data => {
        // const adminData = {
        // // email: data.email
        // };
        
       
    };
    useEffect(()=>{
        const url = `https://peaceful-cove-86161.herokuapp.com/addadmin`;
        fetch("https://peaceful-cove-86161.herokuapp.com/addadmin", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email})
          
        })
        .then(res => console.log('server side response'))
        .then(data =>console.log(data))
       
      
    },[])
    console.log("ase",loggedInUser.email)
    

    return (
        <section id="make-admin">
            <div className="container">
               
                <div className="row make-admin-main pb-5">
                    <div className="col">
                        <div className="make-admin text-center pt-3 pb-5">
                            <h2>Make Admin</h2>
                        </div>
                        <div className="make-admin-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input defaultValue="" type='email' {...register("email")} />
                                    <input type="submit" />
                                </form>
                                {
                                    isAdmin? <p>Tui toh doctor</p> :<p>Tui toh doctor na</p>
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Makeadmin;