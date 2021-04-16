import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';

const CreateAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        const eventData = {
            name: data.name,
            price: data.price,
            
        };
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-5 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "red" }}>
                <h5 className="text-brand">Create a new admin</h5>
                <form className="p-3" onSubmit = {handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name",{ required: true })}  placeholder="Create Admin" className="form-control" />
                    </div>
                  
                    {/* <div className="form-group">
                        <input {...register("price",{ required: true })} placeholder="Price of the Course" className="form-control" />
                        
                    </div> */}
                 
                    {/* <div className="form-group">
                    <input  type="file" onChange={handleImageUpload}  className="form-control" placeholder="Picture" />
                   
                    </div> */}
                  
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Add new admin</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateAdmin;