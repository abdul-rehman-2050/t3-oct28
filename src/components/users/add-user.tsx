import React from "react";

function AddUser() {
  return (
    <div data-theme="cupcake" className="p-6">
        <p className="text-2xl font-bold">Add new User</p>
      <form action="">
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="">
              <label className="block" htmlFor="Name">
                First Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="mt-2  rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="mx-1 text-xs text-red-400">Password must be same!</span>
            </div>
            <div className="">
              <label className="block" htmlFor="Name">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="mt-2 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="mx-1 text-xs text-red-400">Password must be same!</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <span className="mx-1 text-xs text-red-400">Password must be same!</span>
          </div>
          <div className="flex justify-between gap-2">
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="mx-1 text-xs text-red-400">Password must be same!</span>
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="mx-1 text-xs text-red-400">Password must be same!</span>
            </div>
          </div>
          <div className="mt-4">
              <label className="block">Upload Picture</label>
              <input
                type="file"
                placeholder="attach file"
                className="form-control file-input-bordered mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="mx-1 text-xs text-red-400">Password must be same!</span>
            </div>
          
          <div className="flex">
            <button className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
