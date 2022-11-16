import React, { useState } from "react";

import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICredential } from "../../../types/global";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { trpc } from "../../../utils/trpc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "antd";
import UpdateCredential from "../../../components/credentials/update";

import ChakraLayout from "../../../layouts/chakra-layout";

function AddCred() {
  const removeMutation = trpc.credential.removeById.useMutation();
  const updateCredential = trpc.credential.updateById.useMutation();
  const fakeMutation = trpc.credential.createFake.useMutation({
    onSuccess(data) {
      console.log(data.data.record);
      if (Data) {
        setData([...Data, data.data.record]);
      } else {
        setData([data.data.record]);
      }
      toast.success("New User created successfully", {
        position: "top-right",
        autoClose: 1500,
        theme: "light",
      });
    },
  });

  const getAllCredentials = trpc.credential.getAll.useQuery(undefined, {
    onSuccess(data) {
      setData(data);
    },
  });
  if (!getAllCredentials) {
    <div>
      <p>Loading...</p>
    </div>;
  }
  // console.log(getAllCredentials.data)

  const [Data, setData] = useState(getAllCredentials.data as ICredential[]);
  const [editableCredential, setEditableCredential] =
    useState<ICredential | null>(null);

  //---------------------------------------------------------------
  const updatedValue = (record: ICredential) => {
    if (Data) {
      const index = Data?.findIndex((data) => data.id === record.id);
      console.log("value = " + index);
      const newVal = [...Data];
      newVal[index] = record;
      setData(newVal);
      const updateCred = {
        id: record.id as number,
        username: record.username as string,
        password: record.password as string,
        role: record.role as string,
        email: record.email as string,
      };
      updateCredential.mutate(updateCred);
      console.log(Data[index]);
      setIsModalOpen(false);
      toast.info("New valued requested to be updated", {
        position: "top-right",
        autoClose: 2500,
        theme: "light",
      });
    } else {
      console.log("No Data found");
    }
  };

  //---------------------------------------------------------------
  const handleRemove = (id: number) => {
    removeMutation.mutate({ id: id });
    const newData = Data?.filter((data) => data.id !== id);
    setData(newData);
    toast.success(`removed user of id = ${id}`, {
      position: "top-right",
      autoClose: 1500,
      theme: "light",
      pauseOnHover: false,
    });
  };

  const handleUpdate = (record: ICredential) => {
    console.log(record);
    setEditableCredential(record);
    showModal();
  };
  //------------------------------------------------------------

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //============================================================
  const columns: ColumnsType<ICredential> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleRemove(record.id)}
            size="middle"
          />
          <Button
            type="default"
            icon={<EditOutlined />}
            size="middle"
            onClick={() => handleUpdate(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <ChakraLayout>
      <div className="flex flex-col overflow-auto p-2">
        <div>
          <button
            className="btn-primary btn"
            style={{ marginBottom: 16 }}
            onClick={() => {
              fakeMutation.mutate();
            }}
            disabled={fakeMutation.isLoading}
          >
            Add New User
          </button>
          <Table
            dataSource={Data}
            columns={columns}
            pagination={{ pageSize: 15 }}
          />
           
        </div>
        <footer>
          <div className="mx-auto w-full max-w-3xl px-3">
            <p>All right reserved</p>
            <ToastContainer />
          </div>
        </footer>
        <Modal
          title="Manage Credentials"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div>
            <UpdateCredential
              credential={editableCredential}
              submitFunction={updatedValue}
            />
          </div>
        </Modal>
      </div>
      </ChakraLayout>
  );
}

export default AddCred;
