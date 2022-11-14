import React, { useState } from "react";
import PanelLayout from "../../layouts/panel";

import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICredential } from "../../types/global";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { trpc } from "../../utils/trpc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCred() {
  const removeMutation = trpc.credential.removeById.useMutation();
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
    <PanelLayout>
      <div>
        <p>Loading...</p>
      </div>
    </PanelLayout>;
  }
  // console.log(getAllCredentials.data)

  const [Data, setData] = useState(getAllCredentials.data);
  const handleRemove = async (id: number) => {
    const result = await removeMutation.mutate({ id: id });

    const newData = Data?.filter((data) => data.id !== id);
    setData(newData);
    toast.success(`removed user of id = ${id}`,{
      position: "top-right",
        autoClose: 1500,
        theme: "light",
        pauseOnHover: false,
      
    })
  };

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
          <Button type="default" icon={<EditOutlined />} size="middle" />
        </Space>
      ),
    },
  ];

  const handleFakeAdd = async () => {
    const result = fakeMutation.mutate();
  };

  return (
    <PanelLayout>
      <div>
        <button
          className="btn-primary btn"
          style={{ marginBottom: 16 }}
          onClick={handleFakeAdd}
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
    </PanelLayout>
  );
}

export default AddCred;
