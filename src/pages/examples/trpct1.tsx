import React, { useState } from "react";
import { trpc } from "../../utils/trpc";
import UserInfoCard from "../../components/users/user-info-card";
import {FaPlus} from "react-icons/fa"
import { Modal } from 'antd';
import AddUser from "../../components/users/add-user";



function showModel(){
  return (<AddUser></AddUser>);
}


function TrpcClientTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hello = trpc.faker.getFakeUsers.useQuery(
    { count: 31 },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }
  );

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-auto flex-col ">
      <Modal title="Create New User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AddUser/>
      </Modal>
      
      <div className="flex w-full h-20 bg-white dark:bg-gray-800 dark:border-gray-700 p-3 shadow-md justify-end">
        <button className="btn btn-primary gap-2" onClick={showModal}><FaPlus className="h-6 w-6"/> Add New</button>
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
