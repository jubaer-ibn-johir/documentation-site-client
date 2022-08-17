import React from "react";
import { useForm } from "react-hook-form";


const AddBlogs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="bg-white lg:pt-44 md:pt-44 pt-32 pb-12 border border-b-2 shadow-2xl">
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
          Add Blogs
        </p>
      </div>
      <div className="lg:p-8 md:p-8 sm:p-4 lg:pb-0 md:pb-0 pb-24 bg-lime-50 h-full rounded-xl flex justify-center items-center lg:py-0 md:py-0 py-12">
        <div className=" m-12 mx-28 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" gap-5 w-50 justify-items-center"
          >
            <input
              {...register("img", { required: true })}
              required
              placeholder="Image"
              className="w-full input border border-gray-200 bg-lime-50  border-2 px-5 py-2 rounded-md mb-3"
            />
            <input
              {...register("category", { required: true })}
              required
              placeholder="Category"
              className="w-full input border border-gray-200 bg-lime-50  border-2 px-5 py-2 rounded-md mb-3"
            />
            <input
              {...register("title", { required: true })}
              required
              placeholder="Title"
              className=" input border border-gray-200 w-full bg-lime-50  border-2 px-5 py-2 rounded-md mb-3"
            />

            <textarea
              {...register("description")}
              cols="30"
              rows="5"
              placeholder="Description"
              className="w-full border-2 bg-lime-50 outline-none px-5 py-2 rounded-md mb-3"
            />
            <input
              type="submit"
              className="text-white my-6 lg:ml-96 md:ml-36 align-items-center justify-content-center font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-teal-600 to-teal-300 cursor-pointer w-56"
              value="Submit Blog"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
