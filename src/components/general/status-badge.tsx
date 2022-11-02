import React from "react";

type Props = {
  status: "Active" | "Inactive" | "Suspended";
};

const StatusBadge = (props: Props) => {
  if (props.status == "Active") {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
        ></span>
        <span className="relative">{props.status}</span>
      </span>
    );
  } else if (props.status == "Suspended") {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-orange-200 opacity-50"
        ></span>
        <span className="relative">{props.status}</span>
      </span>
    );
  } else if (props.status == "Inactive") {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-red-200 opacity-50"
        ></span>
        <span className="relative">{props.status}</span>
      </span>
    );
  }else{
    return <></>;
  }
};

export default StatusBadge;
