import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Header,
  Form,
  FormGroup,
  FormGroupCheckBox,
  Label,
  Input,
  CheckBox,
  SubmitButton,
  Table,
  Tr,
  Th,
  Td,
  Action,
  Delete,
  Edit,
  NoData
} from "./ToDoList.Styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FieldValue {
  id: string;
  name: string;
  description: string;
  status: boolean;
}

const ToDoList = () => {
  const [isEdit, setIsEdit] = useState<string>("");
  const [data, setData] = useState<FieldValue[]>([]);

  const [fieldValue, setFieldValue] = useState({
    name: "",
    description: "",
    status: false,
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "status") {
      const { name, checked } = e.target;
      setFieldValue((prev) => ({ ...prev, [name]: checked }));
    } else {
      const { name, value } = e.target;
      setFieldValue((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fieldValue.name || !fieldValue.description) {
      return;
    }
    if (isEdit) {
      // const updated = data.map((item) => {
      //   if (item.id === isEdit) {
      //     return { ...item, name: fieldValue.name, description: fieldValue.description, status: fieldValue.status };
      //   }
      //   return item;
      // })
      // setData(updated);
      // localStorage.setItem("user", JSON.stringify(updated));
      await updateTask(isEdit,{id:isEdit,...fieldValue});
      await fetchTasks();

      setFieldValue({
        name: "",
        description: "",
        status: false,
      });
      setIsEdit("");
      toast.success("Task Successfully Updated");
      return;
    }
    const newItem: FieldValue = {
      id: crypto.randomUUID(),
      ...fieldValue,
    };
    await addTask(newItem);
    await fetchTasks();

    // setData((prev) => {
    //   const updated = [...prev, newItem];
    //   localStorage.setItem("user", JSON.stringify(updated));
    //   return updated;
    // });

    setFieldValue({
      name: "",
      description: "",
      status: false,
    });
    toast.success("Task Successfully Added");
  }, [fieldValue, isEdit, data]);

  const handleUpdate = useCallback((id: string) => {
    const task = data.find((item) => item.id === id);
    setFieldValue({
      name: task?.name ?? "",
      description: task?.description ?? "",
      status: task?.status ?? false,
    })
    setIsEdit(task?.id ?? "");
  }, [data]);

  const handleDelete = useCallback(async(id: string) => {
    if(!window.confirm("Are you sure want Delete Task")){
      return;
    }
    await deleteTask(id);
    await fetchTasks();
    // const updated = data.filter((item) => item.id !== id);
    // setData(updated);
    // localStorage.setItem("user", JSON.stringify(updated));
    toast.error("Task Successfully Deleted");
    setFieldValue({
      name: "",
      description: "",
      status: false,
    });
    setIsEdit("");
  }, [data]);

  const TableRows = useMemo(() => (
    Array.isArray(data) ? data.map((item) => (
      <Tr key={item.id}>
        <Td>{item.id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.description}</Td>
        <Td>{item.status === true ? "Completed" : "Pending"}</Td>
        <Td>
          <Action>
            <Edit onClick={() => handleUpdate(item?.id ?? "")}>Edit</Edit>
            <Delete onClick={() => handleDelete(item?.id ?? "")}>Delete</Delete>
          </Action>
        </Td>
      </Tr>
    )) : (<></>)

  ), [data, handleDelete, handleUpdate])

  useEffect(() => {
    fetchTasks();
  }, [])
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const d = await response.json();
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };
  const addTask = async (task: FieldValue) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      });
      const tasks = await response.json();
      setData(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id:string,task: FieldValue) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      });
      console.log(response);
      const tasks = await response.json();
      console.log(tasks);
      // setData(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id:string) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
      });
      console.log(response);
      // const tasks = await response.json();
      // setData(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header>To Do List</Header>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Task Name:</Label>
          <Input
            type="text"
            name="name"
            value={fieldValue.name}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Description:</Label>
          <Input
            type="text"
            name="description"
            value={fieldValue.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroupCheckBox>
          <Label>Status:</Label>
          <CheckBox
            type="checkbox"
            name="status"
            checked={fieldValue.status}
            onChange={handleChange}
          />
        </FormGroupCheckBox>

        <SubmitButton type="submit" />
      </Form>
      {
        data.length !== 0 ? (
          <Table style={{ borderCollapse: "collapse", }}>
            <thead>
              <Tr>
                <Th>Task ID</Th>
                <Th>Task Name</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </thead>
            <tbody>{TableRows}</tbody>
          </Table>
        ) : (
          <NoData>No Data Available</NoData>
        )
      }
      <ToastContainer />
    </>
  );
};

export default ToDoList;
