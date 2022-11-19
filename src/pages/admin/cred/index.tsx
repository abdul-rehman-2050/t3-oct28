import React, { useMemo, useState } from "react";
import ChakraLayout from "../../../layouts/chakra-layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import {
  FaUserEdit,
  FaTrash,
  FaEdit,
  FaSearch,
  FaUber,
  FaRandom,
  FaAd,
  FaPlus,
} from "react-icons/fa";
import Modal from "react-modal";
import {
  Button,
  Flex,
  Badge,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons";
import { trpc } from "../../../utils/trpc";
import UpdateCredential from "../../../components/credentials/update";
import styled from "styled-components";

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

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#002b36",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line react/prop-types
const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

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

  const [filtData, setFiltData] = useState(Data as AllCredentialType[] | []);
  const [filtText, setFiltText] = useState<string>("");
  useMemo(() => {
    if (filtText == "") {
      setFiltData(Data);
    } else {
      setFiltData(
        Data.filter(function (e) {
          return e.username.toLowerCase().includes(filtText.toLowerCase());
        })
      );
    }
  }, [Data, filtText]);

  const [editableCredential, setEditableCredential] =
    useState<AllCredentialType | null>(null);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //=======================================================================
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltText(e.target.value);
  };
  //========================================================================
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
      closeModal();
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
          <InputGroup gap={1}>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaEdit />}
              onClick={() => handleUpdate(row)}
            />
            <IconButton
              colorScheme="red"
              aria-label="Search database"
              icon={<FaTrash />}
              onClick={() => handleRemove(row.id)}
            />
          </InputGroup>
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
      <div className="flex w-full gap-1 ">
        <Button
          leftIcon={<FaPlus />}
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
        <Button
          leftIcon={<FaRandom />}
          colorScheme="teal"
          variant="solid"
          className="mb-3"
          onClick={() => {
            fakeMutation.mutate();
          }}
          disabled={fakeMutation.isLoading}
        >
          Auto Credential
        </Button>
        <div className="ml-auto">
          <div className="relative   mb-3   text-gray-600">
            <input
              className=" h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleSearchInputChange}
            />
            <button className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch className="h-4 w-4 fill-current text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <DataTable
          title="Credentials"
          columns={columns}
          data={filtData}
          pagination
          persistTableHead
          progressPending={!Data}
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
