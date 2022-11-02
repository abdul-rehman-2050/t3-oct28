/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FlexSearch } from "../../components/general/flexsearch";
import StatusBadge from "../../components/general/status-badge";
import PanelLayout from "../../layouts/panel";
import { faker } from "@faker-js/faker";
import ImageUserNameRow from "../../components/users/image-username-row";

const tableHeaders = [
  "username",
  "User Type",
  "Created At",
  "Quantity",
  "Status",
];



const Users = {
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  picture: "/images/men" + faker.datatype.number + ".jpg",
};

function generateUsers(num:number) {
  const users = [];

  for (let id = 1; id <= num; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    users.push({
      id: faker.datatype.uuid(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      picture: "/images/men/" + id + ".jpg",
      date: faker.date.past(),
      status: faker.image.avatar()
    });
  }

  return users;
}



function TablePage() {
    const users = generateUsers(2);
  return (
    <PanelLayout>
        {JSON.stringify(users)}
      <div className="w-full rounded-md bg-white p-8">
      
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-600">Products Oder</h2>
            <span className="text-xs">All products item</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <FlexSearch />
            </div>
            <div className="ml-10 space-x-8 lg:ml-40">
              <button className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white">
                New Report
              </button>
              <button className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 font-semibold tracking-wide text-white">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full ">
                <thead>
                  <tr>
                    {tableHeaders.map((item, key) => {
                      return (
                        <th
                          key={key}
                          className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left tracking-wider"
                        >
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <ImageUserNameRow img="/images/women/0.jpg" name={users[0]?.first_name as string}/>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">Admin</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">43</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <StatusBadge status="Active" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            Blake Bowman
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">Editor</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        Jan 01, 2020
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">77</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <StatusBadge status="Active" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            Dana Moore
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">Editor</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        Jan 10, 2020
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">64</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-orange-200 opacity-50"
                        ></span>
                        <span className="relative">Suspended</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap text-gray-900">
                            Alonzo Cox
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">Admin</p>
                    </td>
                    <td className="bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">
                        Jan 18, 2020
                      </p>
                    </td>
                    <td className="bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap text-gray-900">70</p>
                    </td>
                    <td className="bg-white px-5 py-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-red-200 opacity-50"
                        ></span>
                        <span className="relative">Inactive</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
                <span className="xs:text-sm text-xs text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="xs:mt-0 mt-2 inline-flex">
                  <button className="rounded-l bg-indigo-600 py-2 px-4 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="rounded-r bg-indigo-600 py-2 px-4 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
}

export default TablePage;
