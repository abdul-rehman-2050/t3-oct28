import React from "react";
import { trpc } from "../../utils/trpc";
import UserInfoCard from "../../components/users/user-info-card";

function TrpcClientTest() {
  const hello = trpc.faker.getFakeUsers.useQuery({ count: 40 });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-auto flex-col ">      
      <div className=" flex  flex-wrap gap-2 m-auto md:justify-evenly p-3 justify">
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
