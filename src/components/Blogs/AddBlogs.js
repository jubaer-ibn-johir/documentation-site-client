import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BiImageAdd } from 'react-icons/bi';
import ScrollToTop from "react-scroll-to-top";


const AddBlogs = () => {
  const [value, setValue] = useState('');

  console.log(value);






  // const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    e.preventDefault()
    const image = e.target.image.value;
    const category = e.target.category.value;
    const title = e.target.title.value;
    setValue(value)

    console.log(image, category, title, value);

  }
  return (
    <div>
      <ScrollToTop smooth color="red" top='20' />
      <div className="bg-white lg:pt-44 md:pt-44 pt-32 pb-12 border border-b-2 shadow-2xl">
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
          Add Blogs
        </p>
      </div>
      <div style={{ border: '1px solid #fff ', padding: "100px", boxShadow: '20px', }}>
        <div className=" lg:p-8 md:p-8 sm:p-4 lg:pb-0 md:pb-0 pb-24 bg-lime-50 h-full rounded-xl flex justify-center items-center lg:py-0 md:py-0 py-12   ">
          <div className=" m-12 mx-28 ">
            <form
              onSubmit={onSubmit}
              className=" gap-5 w-50 justify-items-center"
            >
              <div >
                <label> Choose file :</label>
                <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div class="relative border-dotted h-20  shadow-2xl w-full rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                        <div class="absolute">
                          <div class="flex flex-col items-center">
                            <BiImageAdd className=" text-5xl cursor-pointer text-blue-700" />
                            <span class="block text-gray-400 font-normal">Attach you files here</span>
                          </div>
                        </div>
                        <input type="file" name='image' accept="image/png, image/jpeg" class="h-full w-full opacity-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className=" mt-9">Category :</p>
              <input
                name='category'

                className="w-full mt-5 shadow-2xl text-black input border border-gray-200 bg-lime-50  border-2 px-5 py-2 rounded-md mb-3"
              />
              <p className=" mt-6">Title :</p>
              <input
                name='title'
                className=" input mt-5 text-black shadow-2xl border border-gray-200 w-full bg-lime-50  border-2 px-5 py-2 rounded-md mb-3"
              />
              <p className=" mt-7">Description :</p>
              <div >
                <ReactQuill className="shadow-2xl mt-5" value={value} onChange={setValue} />
              </div>
              <input
                type="submit"
                className="text-white my-6 lg:ml-96 md:ml-36 align-items-center justify-content-center font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-teal-600 to-teal-300 cursor-pointer w-56"
                value="Submit Blog"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;