/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ChakraLayout from "../../layouts/chakra-layout";
import { trpc } from "../../utils/trpc";
import { Button, Flex, Badge, Box, Text } from "@chakra-ui/react";
import { FaUserAlt, FaUserEdit, FaTrash, FaEdit } from "react-icons/fa";
import RTable, {
  ColumnDefinitionType,
} from "../../components/mycomp/rtable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable, { TableColumn } from "react-data-table-component";

const UserTable = () => {
  const removeMutation = trpc.credential.removeById.useMutation();
  const updateCredential = trpc.credential.updateById.useMutation();
  const getAllCredentials = trpc.credential.getAll.useQuery(undefined, {
    onSuccess(data) {
      setData(data);
    },
  });
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

  //---------------------------------------------------------------
  const handleRemove = (id: number) => {
    removeMutation.mutate({ id: id });
    const newData = Data?.filter((data) => data.id !== id);
    setData(newData);
    toast.warning(`removed user of id = ${id}`, {
      position: "top-right",
      autoClose: 1500,
      theme: "light",
      pauseOnHover: false,
    });
  };

  const [Data, setData] = useState(
    getAllCredentials.data as AllCredentialType[]
  );

  if (!Data) {
    return <>Loading...</>;
  }

  type AllCredentialType = {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: Date;
  };
  const columns2: TableColumn<AllCredentialType>[] = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
      grow: 2,
    },

    {
      name: "Role",
      selector: (row) => row.role,
      cell: (row) => {
        return (
          <div className="text-left text-lg ">
            <Badge
              ml="1"
              colorScheme={row.role == "ADMIN" ? "red" : "green"}
              variant="solid"
              
              paddingLeft={2}
              paddingRight={2}
            >
              {row.role}
            </Badge>
          </div>
        );
      },
      ignoreRowClick: true,
      
      //selector: (row) => row.role,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
    },

    {
      name: "Actions",
      cell: (row) => {
        return (
          <div className="text-left text-lg ">
            {row.id}
            <button className=" inline-flex items-center rounded-lg bg-blue-700 p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <FaEdit className="h-5 w-5" />
            </button>
            <button className="ml-1 inline-flex items-center rounded-lg bg-red-700 p-2  text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <FaTrash className="h-5 w-5" />
            </button>
          </div>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      grow: 5,
    },
  ];

  const columns: ColumnDefinitionType[] = [
    {
      key: "id",
      header: "ID",
      width: 150,
    },
    {
      key: "username",
      header: "User Name",
      render: (record) => {
        return (
          <Flex>
            <Box ml="3">
              <Text fontWeight="bold">
                {record.username}
                <Badge
                  ml="1"
                  colorScheme={record.role == "ADMIN" ? "red" : "green"}
                  variant="solid"
                >
                  {record.role}
                </Badge>
              </Text>
            </Box>
          </Flex>
        );
      },
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "Actions",
      header: "Actions",
      render: (_record) => {
        return (
          <td className="whitespace-nowrap p-2">
            {_record.id}
            <div className="text-left text-lg">
              <button className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <FaEdit className="h-5 w-5" />
              </button>
              <button className="mr-2 inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <FaTrash className="h-5 w-5" />
              </button>
            </div>
          </td>
        );
      },
    },
  ];
  return (
    <ChakraLayout>
      <Button
        leftIcon={<FaUserEdit />}
        colorScheme="teal"
        variant="solid"
        className="mb-3"
        onClick={() => {
          fakeMutation.mutate();
        }}
        disabled={fakeMutation.isLoading}
      >
        Add Credential
      </Button>
      <div className="mb-2">
        <DataTable
          title="Credentials"
          columns={columns2}
          data={Data}
          progressPending={!Data}
          pagination
          highlightOnHover
          pointerOnHover
        />
      </div>
      <div className="mx-auto w-full  rounded-sm border border-gray-200 bg-white shadow-lg">
        <header className="border-b border-gray-100 px-5 py-4">
          <h2 className="font-semibold text-gray-800">Credentials</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <RTable
              columns={columns}
              data={Data}
              tableClassNames="w-full table-auto"
              trClassNames=""
              tdClassNames="whitespace-nowrap p-2"
              theadClassNames="bg-gray-50  uppercase "
              thClassNames="whitespace-nowrap p-2"
              thdivClassNames="text-left font-semibold"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex h-full flex-col justify-center overflow-auto">
          {/* Table */}
          <div className="mx-auto w-full  rounded-sm border border-gray-200 bg-white shadow-lg">
            <header className="border-b border-gray-100 px-5 py-4">
              <h2 className="font-semibold text-gray-800">Credentials</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">ID</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Username</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Email</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {Data.map((d, key) => {
                      return (
                        <tr key={key}>
                          <td className="whitespace-nowrap p-2">
                            <div className="text-center text-lg">{d.id}</div>
                          </td>

                          <td className="whitespace-nowrap p-2">
                            <Flex>
                              <Box ml="3">
                                <Text fontWeight="bold">
                                  {d.username}
                                  <Badge
                                    ml="1"
                                    colorScheme={
                                      d.role == "ADMIN" ? "red" : "green"
                                    }
                                    variant="solid"
                                  >
                                    {d.role}
                                  </Badge>
                                </Text>
                              </Box>
                            </Flex>
                          </td>
                          <td>
                            <Text fontSize="md">{d.email}</Text>
                          </td>

                          <td className="whitespace-nowrap p-2">
                            <div className="text-center text-lg">
                              <button className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <FaEdit className="h-5 w-5" />
                              </button>
                              <button
                                className="mr-2 inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                onClick={() => handleRemove(d.id)}
                              >
                                <FaTrash className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className=" mt-3 w-full max-w-3xl justify-start px-3">
          <p>All right reserved</p>
          <ToastContainer />
        </div>
      </footer>
    </ChakraLayout>
  );
};

export default UserTable;
