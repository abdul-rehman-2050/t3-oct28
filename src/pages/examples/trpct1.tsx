import React from "react";
import { trpc } from "../../utils/trpc";
import UserInfoCard from "../../components/users/user-info-card";
import LatestCustomerCard from "../../components/customers/latest-customer-card";

function TrpcClientTest() {
  const hello = trpc.faker.getFakeUsers.useQuery(
    { count: 40 },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }
  );
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-auto flex-col ">
      <LatestCustomerCard/>
      <div className="flex w-full h-20 bg-white dark:bg-gray-800 dark:border-gray-700 p-3 shadow-md justify-end">
        <button className="btn btn-primary ">Add New</button>
      </div>
      <div className=" justify  m-auto flex flex-wrap gap-2 p-3 md:justify-evenly">
        {hello.data.usersList.map(function (user, index) {
          return (
            <div key={index}>
              <UserInfoCard
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                image={user.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrpcClientTest;
