import React, { useState } from "react";
import ChakraLayout from "../../../layouts/chakra-layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable, { TableColumn } from "react-data-table-component";
import { FaUserEdit, FaTrash, FaEdit } from "react-icons/fa";
import Modal from 'react-modal';
import { Button, Flex, Badge, Box, Text } from "@chakra-ui/react";
import { trpc } from "../../../utils/trpc";
import UpdateCredential from "../../../components/credentials/update";

const customModelStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export type AllCredentialType = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
};

function Index() {
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

  const [editableCredential, setEditableCredential] =
    useState<AllCredentialType | null>(null);

    
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

  const handleUpdate = (record: AllCredentialType) => {
    console.log(record);
    setEditableCredential(record);
    openModal();
    
    //showModal();
  };

  //---------------------------------------------------------------
  const updatedValue = (record: AllCredentialType) => {
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
      closeModal()
      toast.info("New valued requested to be updated", {
        position: "top-right",
        autoClose: 2500,
        theme: "light",
      });
    } else {
      console.log("No Data found");
    }
  };



  const columns: TableColumn<AllCredentialType>[] = [
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
            <button
              className=" inline-flex items-center rounded-lg bg-blue-700 p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleUpdate(row)}
            >
              <FaEdit className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleRemove(row.id)}
              className="ml-1 inline-flex items-center rounded-lg bg-red-700 p-2  text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
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
          columns={columns}
          data={Data}
          progressPending={!Data}
          pagination
          highlightOnHover
          pointerOnHover
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customModelStyles}
        contentLabel="Update User"
      >
        
        <div>
            <UpdateCredential
              credential={editableCredential}
              submitFunction={updatedValue}
            />
            </div>
      </Modal>
      <footer>
        <div className=" mt-3 w-full max-w-3xl justify-start px-3">
          <p>All right reserved</p>
          <ToastContainer />
        </div>
      </footer>
    </ChakraLayout>
  );
}

export default Index;
