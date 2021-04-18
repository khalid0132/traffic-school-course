import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Admin/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';



const Reviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data =>{ 
        const eventData = {
            quote: data.quote,
            name: data.name,
            from: data.from,
            imageURL: imageURL
        };
        // const url = 'https://lit-coast-55410.herokuapp.com/addReviews';
        const url = `https://lit-coast-55410.herokuapp.com/addReviews`;
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
        <section className="container row ">
        
        <div className="col-md-12 p-5 pr-5 mr-5" style={{ position: "absolute", right: 0, backgroundColor: "#f9f9f9" }}>
            <h5 className="text-brand text-center">Send Your Comment / Skicka din kommentar</h5>
            <form className="p-3" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input {...register("quote",{ required: true })}  placeholder="Add Comment / Kommentar" className="form-control" />
                </div>
                <div className="form-group">
                    <input {...register("name",{ required: true })}  placeholder="Name / Namn" className="form-control" />
                </div>
                <div className="form-group">
                    <input {...register("from",{ required: true })}  placeholder="City / Stad" className="form-control" />
                </div>
              
                <div className="form-group">
                <input  type="file" onChange={handleImageUpload}  className="form-control" placeholder="Picture" />
               
            </div>
             
              
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Send Reviews / Skicka recensioner</button>
                </div>
            </form>
        </div>
    </section>
    );
};

export default Reviews;