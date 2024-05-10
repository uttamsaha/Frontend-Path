import React from "react";
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input className="border" type="text" id="name" {...register("name")} />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NormalForm;
