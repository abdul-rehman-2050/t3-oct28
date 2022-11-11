import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import uploadConfig from '../../configs/_uploadConfig'




import {
  UserValidationSchema,
  UserValidationSchemaType,
  CreateUserInterface,
} from "../../validate/user";



const AddUser = () => {
    const [fileSelected, setFileSelected] = React.useState<File>()
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState<string>("");

    
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserValidationSchemaType>({
    resolver: zodResolver(UserValidationSchema),
  });


  const handleFileSelect = async (e:any) => {
    
    //const file = e.target.files[0]
    //const body = new FormData();
    const i = e.target.files[0];
    const formData = new FormData();
    
    // console.log("file", image)
    formData.append("file", i);    
    setImage(i);
    setCreateObjectURL(URL.createObjectURL(i));
    const response = await fetch('/api/fs/upload', {
        method: 'POST',
        body: formData
      })
      if (response.status !== 201) {
        const error = await response.json()
       
        alert(`Cannot upload selected file: ${error.error}`)
      } else {
        const newFile = await response.json()
       
      }
    
    // get files from event on the input element as an array
   // let files = [...e.target.files];

    // ensure a file or files are selected
    //if (files && files.length > 0) {
      // loop over existing files
      //const existingFiles = data.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      //files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add selected file or files to fileList
      //dispatch({ type: "ADD_FILE_TO_LIST", files });
    //}
  };



  

  const onSubmit: SubmitHandler<UserValidationSchemaType> = async (data) => {
    console.log(data);
    const user: CreateUserInterface = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    console.log(user);
    reset();
  };

  return (
    <div className="" data-theme="cupcake">
      <form className=" px-8 pt-6 pb-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 md:flex md:justify-between">
          <div className="mb-2 md:mr-2 md:mb-0">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
                errors.firstName && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="md:ml-2">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
                errors.lastName && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
              errors.email && "border-red-500"
            } focus:shadow-outline appearance-none rounded focus:outline-none`}
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Phone Number
          </label>
          <input
            className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
              errors.email && "border-red-500"
            } focus:shadow-outline appearance-none rounded focus:outline-none`}
            id="phone"
            type="phone"
            placeholder="92xxxxxxx"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.phone?.message}
            </p>
          )}
        </div>

        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
                errors.password && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="md:ml-2">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="c_password"
            >
              Confirm Password
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
                errors.confirmPassword && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="c_password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
         
        </div>
        <div>
            <input
              id="fileSelect"
              type="file"    
              name="file"          
              accept={uploadConfig.supportedMimeTypes.join(', ')}
              multiple={false}
              className="w-full border px-3 py-2 text-sm leading-tight text-gray-700 mb-3"
              onChange={(e) => handleFileSelect(e)}
            />
        </div>

        <div className="mb-6 text-center">
          <button
            className="focus:shadow-outline w-full rounded-full bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
            type="submit"
          >
            Add New User
          </button>
          {/*mutation.error && <p>Something went wrong! {mutation.error.message}</p>*/}
        </div>
      </form>
    </div>
  );
};

export default AddUser;
function mkdirp(dir: string, arg1: (err: NodeJS.ErrnoException) => void) {
    throw new Error("Function not implemented.");
}

