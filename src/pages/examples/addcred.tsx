import React, { useState } from "react";
import PanelLayout from "../../layouts/panel";

import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICredential } from "../../types/global";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { trpc } from "../../utils/trpc";

function AddCred() {
  const fakeMutation = trpc.credential.createFake.useMutation({
    onSuccess(data, variables, context) {
      console.log(data.data.record);
      if (Data) {
        setData([...Data, data.data.record]);
      } else {
        setData([data.data.record]);
      }
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
  const handleRemove = (id: number) => {
    const newData = Data?.filter((data) => data.id !== id);
    setData(newData);
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
    </PanelLayout>
  );
}

export default AddCred;
