import React, { useState } from "react";
import PanelLayout from "../../layouts/panel";
import CredentialTable from "../../components/users/tables/credential-table";
import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICredential } from "../../types/global";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { trpc } from "../../utils/trpc";

const mocCred = [
  {
    id: "2",
    username: "Lora47",
    email: "Watson.Morissette@hotmail.com",
  },
  {
    id: "1",
    username: "Dedrick.OConnell59",
    email: "	Celestine90@yahoo.com",
  },
  {
    id: "3",
    username: "Rashad.Mueller15",
    email: "Kyla_Runolfsson@hotmail.com",
  },
  {
    id: "4",
    username: "OConnell59",
    email: "Chaim_Sanford28@gmail.com",
  },
];

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
        <Button type="default" icon={<DeleteOutlined />} size="middle" />
        <Button type="default" icon={<EditOutlined />} size="middle" />
      </Space>
    ),
  },
];

function AddCred() {
    const fakeMutation = trpc.credential.createFake.useMutation({
      onSuccess(data, variables, context) {
        console.log(data.data.record)
        setData([...Data, data.data.record])
      },
    });

  const [Data, setData] = useState(mocCred);

  const handleFakeAdd = async () => {
    
    const result = fakeMutation.mutate();
    
    


  };
  return (
    <PanelLayout>
      <div>
        <button          
          className="btn btn-primary"
          style={{ marginBottom: 16 }}
          onClick={handleFakeAdd} 
          disabled={fakeMutation.isLoading}
        >
          Add New User
        </button>
        <Table dataSource={Data} columns={columns} pagination={{ pageSize: 15 }} /> 
      </div>
      
    </PanelLayout>
  );
}

export default AddCred;
