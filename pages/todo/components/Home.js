import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getData, postData } from "../config/todoConfig";

const HomeComponents = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todo);
  const [addTodo, setDataTodo] = useState({
    title: "",
    status: false,
  });
  const handleChange = (event) => {
    setDataTodo({
      ...addTodo,
      [event.target.name]: event.target.value,
    });
  };

  const AddTodo = (event) => {
    event.preventDefault();

    let Data = {
      title: addTodo.title,
      status: addTodo.status,
    };

    dispatch(postData({ ...Data }));
  };

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Container>
      <Form style={{ marginTop: "1rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="name"
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />

          <Form.Select
            value={addTodo.gender}
            onChange={handleChange}
            name="status"
            className="mt-2"
          >
            <option>Status</option>
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </Form.Select>

          <button
            onClick={AddTodo}
            style={{
              padding: "0.2rem",
              borderRadius: "1rem",
              backgroundColor: "#",
              width: "5rem",
              margin: "10px",
            }}
          >
            Add
          </button>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        {todo.map((td, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{td.id}</td>
                <td>{td.title}</td>
                {td.completed ? (
                  <td>
                    <input type="checkbox" checked value="true" readOnly />
                  </td>
                ) : (
                  <td>
                    <input type="checkbox" value="false" readOnly />
                  </td>
                )}
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default HomeComponents;

// export async function getServerSideProps() {
//   // const dispatch = useDispatch();
//   const res = await dispatch(getData());
//   const data = await res.json();
//   return { props: { data } };
// }
