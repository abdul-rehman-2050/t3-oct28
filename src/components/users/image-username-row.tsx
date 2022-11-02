/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  img: string;
  name: string;
};

const ImageUserNameRow = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <img
          className="h-full w-full rounded-full"
          alt="avatar"          
          src={props.img}
        />
      </div>
      <div className="ml-3">
        <span className="whitespace-no-wrap text-gray-900">{props.name}</span>
      </div>
    </div>
  );
};

export default ImageUserNameRow;
