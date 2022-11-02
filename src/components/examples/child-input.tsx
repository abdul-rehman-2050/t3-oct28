import React from "react";

type MyEXChildPropsType = {
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ChildInput({
  value,
  label,
  placeholder,
  type,
  handleChange,
}: MyEXChildPropsType) {
  return (
    <div>
      <div className="mb-4 flex flex-col">
        {label ? (
          <label
            className="text-grey-darkest mb-2 text-lg font-bold "
            htmlFor="first_name"
          >
            {label}
          </label>
        ) : (
          <></>
        )}

        <input
          className="text-grey-darkest border py-2 px-3"
          type={type ? type : "text"}
          name="first_name"
          id="first_name"
          value={value}
          placeholder={placeholder ? placeholder : "..."}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ChildInput;
