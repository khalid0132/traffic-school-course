import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data =>{ 
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:7200/addCourse`

        fetch(url, {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res=> console.log('server is responsing perfecly', res));

        console.log(eventData);

    }; 

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e9ec87ac916fb0ca75e8f1c13ea2eb91')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData
        )
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-5 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "red" }}>
                <h5 className="text-brand">Add a Course</h5>
                <form className="p-3" onSubmit = {handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name",{ required: true })}  placeholder="Add a course" className="form-control" />
                    </div>
                  
                    <div className="form-group">
                        <input {...register("price",{ required: true })} placeholder="Price of the Course" className="form-control" />
                        
                    </div>
                 
                    <div className="form-group">
                    <input  type="file" onChange={handleImageUpload}  className="form-control" placeholder="Picture" />
                   
                </div>
                  
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Add Course</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddCourse;