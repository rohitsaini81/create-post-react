import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form() {
  const uri = "https://admin-api-maaj.onrender.com/api/data"; 
  const { register, handleSubmit } = useForm();
  const [response, setResponse]= useState("")
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(uri, data, { timeout: 5000 }); // Set timeout in the request configuration
      console.log(response.data);
      setResponse(response.data)
    } catch (error) {
      console.error("Error:", error);
      setResponse(error);
    }
  }

  return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Title" {...register("title", { required: true })} />
      <br />
      <input placeholder="Description" {...register("decription", { required: true })} /> {/* Fixed typo here */}
      <br />
      <input placeholder="Link" {...register("link", { required: true })} />
      <br />
      <input placeholder="Prelink" {...register("prelink", { required: true })} /> {/* Fixed field name here */}
      <br />
      <input type="submit" />
    </form>
    <h3>{response.title}</h3>
    </div>
  );
}
