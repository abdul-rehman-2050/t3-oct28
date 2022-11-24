import React from "react";



type TagProps = {
    id: number;
    name: string;
    onDelete : (id:number)=>void;
}


export default function Tag({ name, id, onDelete }: TagProps) {
    return (
      <span
        className="m-1 flex cursor-pointer flex-wrap items-center justify-between rounded bg-gray-200 px-4 py-2 text-xs font-bold leading-loose hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 sm:text-sm"
        onClick={() => onDelete(id)}
      >
        { name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4 h-3 w-3 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 sm:h-4 sm:w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  
  