import React from "react";

type TagProps = {
  title: string;
  id: number;
  onDelete: (key: number) => void;
};

export function Tag({ title, id, onDelete }: TagProps) {
  return (
    <span
      className="m-1 flex cursor-pointer flex-wrap items-center justify-between rounded bg-gray-200 px-4 py-2 text-xs font-bold leading-loose hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 sm:text-sm"
      onClick={() => onDelete(id)}
    >
      { title}
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

type AddTagProps = {
    header?:string
}


function AddTag({header}:AddTagProps) {
  const [list, setList] = React.useState(["Iphone", "Android", "Maker"]);
  const [curItem, setCurItem] = React.useState("");
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (newValue.includes(",")) {
      if (curItem.length > 1) {
        setList([...list, curItem]);
      }
      setCurItem("");
    } else {
      setCurItem(newValue);
    }
  }

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        if (curItem.length > 1) {
            setList([...list, curItem]);
          }
          setCurItem("");
    }
  }

  const handleDelete = (indexToDelete: number) => {
    
    setList((existingList) =>
      existingList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className=" mt-1 flex  flex-col items-center space-y-4 sm:mx-0">
        <div className="min-w-full items-center overflow-hidden rounded bg-white py-8 px-8 shadow-lg hover:shadow-xl dark:bg-gray-800 sm:w-fit ">
          <div className="flex flex-row items-center justify-start">
            <h1 className="mr-2 text-lg font-bold text-gray-800 dark:text-gray-100 sm:text-2xl">
              {(header? header : "Tags")}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <form action="#" className="mt-8">
            <div className="sm:space-x- flex w-full items-center space-x-2 rounded border border-gray-500 bg-gray-100 p-1 dark:border-gray-300 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-6 w-6 opacity-50 dark:text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <input
                className="w-full border-transparent bg-gray-100 text-sm outline-none focus:border-transparent focus:ring-0 dark:bg-gray-700 dark:text-gray-200 sm:text-base"
                type="text"
                placeholder={`Add a ${(header?header:"Tag")}...`}
                value={curItem}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
          <div className="-m-1 my-3 flex flex-wrap">
            {list.map((listItem, key) => {
              return (
                <div key={key}>
                  
                  <Tag
                    title={listItem}
                    id={key}
                    onDelete={(key) => handleDelete(key)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTag;
