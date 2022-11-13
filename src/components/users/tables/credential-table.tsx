import React from "react";
import { ICredential } from "../../../types/global";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Button } from "antd";
type Props = {
  credentials: Array<ICredential>;
};

const tdClass = "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";

function CredentialTable({ credentials }: Props) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden"></div>
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  id#
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((cred, index) => {
                return (
                  <tr key={index} className="border-b">
                    <td className={tdClass}>{cred.id}</td>
                    <td className={tdClass}>{cred.username}</td>
                    <td className={tdClass}>{cred.email}</td>
                    <td className={tdClass}>
                      <Button
                        type="default"
                        icon={<DeleteOutlined />}
                        size="middle"
                        
                      />
                      <Button
                        type="default"
                        icon={<EditOutlined />}
                        size="middle"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CredentialTable;
