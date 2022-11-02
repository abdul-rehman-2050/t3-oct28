import React from "react";

type MyEXChildPropsType = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ChildInput({ value, handleChange }: MyEXChildPropsType) {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label
          className="text-grey-darkest mb-2 text-lg font-bold uppercase"
          htmlFor="first_name"
        >
          value
        </label>

        <input
          className="text-grey-darkest border py-2 px-3"
          type="text"
          name="first_name"
          id="first_name"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ChildInput;
