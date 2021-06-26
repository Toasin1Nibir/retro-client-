import {React} from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'
import axios from 'axios';
import Header from '../Header/Header';

const Admin = () => {
    const [imageURL, setIMageURL] = useState(null);
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const productData = {
        title: data.title,
        blog : data.blog,
        imageURL: imageURL
      };
      console.log(productData.title)
      const url = `https://peaceful-cove-86161.herokuapp.com/addblog`;
      
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(res => console.log('server side response', res))
    };

  const handleimage = (event) =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '2c5867f697760b6d72620ee16e2844b8');
    imageData.append('image', event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
       setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
   
   }
    return (
      <>
     <Header/>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Title</label>

                <input defaultValue="" {...register("title")} />

                <label>Blog content</label>
                <input {...register("blog", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}
                <input name="example" type='file' onChange={handleimage} />
                <input type="submit" />
            </form>
        </div>
        </>
    );
};

export default Admin;