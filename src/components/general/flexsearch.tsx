import React from "react";

type Props = {
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const FlexSearch = (props: Props) => {
  return (
    
      <div className="flex items-center rounded-md p-2 w-full border-emerald-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          className="ml-1 w-full bg-gray-50 outline-1 border-gray-700 p-1"
          type="text"
          name=""
          id=""
          placeholder="search..."
          onChange={props.handleChange}
        />
      </div>

  );
};
