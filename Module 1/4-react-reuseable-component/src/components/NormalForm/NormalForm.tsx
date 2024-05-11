import React from "react";
import { useForm } from "react-hook-form";
import Container from "../ui/Container";
import cn from "../../utils/cn";
import Button from "../../utils/Button";

const NormalForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;
  const { register, handleSubmit } = useForm();
  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "max-full p-5 border border-gray-300 rounded-md mx-auto shadow-sm",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn("justify-items-center grid grid-cols-1  gap-3", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 focus:border-purple-500 rounded-md focus:ring-1 focus:ring-purple-500"
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Email
            </label>
            <input
              className="w-full border"
              type="text"
              id="name"
              {...register("email")}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Password
            </label>
            <input
              className="w-full border"
              type="text"
              id="name"
              {...register("password")}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Password
            </label>
            <select>
              <option className="" value="">
                One
              </option>
              <option value="">Two</option>
              <option value="">Three</option>
              <option value="">Four</option>
              <option value="">Five</option>
            </select>
          </div>
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <button className=" btn btn-primary">Submit</button>
          </div>
        </div>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Container>
  );
};

export default NormalForm;
