import Link from "next/link";
import React from "react";
import { IFakeUser } from "../../server/trpc/router/faker";
import Image from "next/image";

const CloseButton = () => {
  return (
    <button className="btn-circle btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

function UserInfoCard(props: IFakeUser) {
  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden rounded bg-white shadow-lg">
        <div className="border-b bg-gray-800 p-2 pb-6 text-center">
          
    
              {props.image ? (
                <Image
                  src={props.image}
                  alt={props.image}
                  className="mx-auto h-24 w-24 rounded-full text-white"
                  width="132"
                  height="132"
                />
              ) : (
                <svg
                  aria-hidden="true"
                  role="img"
                  className="mx-auto h-24 w-24 rounded-full text-white"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                  ></path>
                </svg>
              )}
          
           
          <div>
          <p className="pt-2 text-lg font-semibold text-gray-50 ">{`${props.firstName} ${props.lastName}`}</p>
          <p className="text-sm text-gray-100 text-ellipsis">{props.email}</p>
          </div>
          <div className="mt-5">
            <a className="rounded-full border py-2 px-4 text-xs font-semibold text-gray-100">
              Manage Account
            </a>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns">
            <a className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Normal User
                </p>
                <p className="text-xs text-gray-500">This user has normal rights</p>
              </div>
            </a>
          </Link>
          <Link href="/account/donations">
            <a className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Stores
                </p>
                <p className="text-xs text-gray-500">
                  View and manage Stores
                </p>
              </div>
            </a>
          </Link>
        </div>

        {/* ---------------------- */}
      </div>
    </div>
  );
}

export default UserInfoCard;
