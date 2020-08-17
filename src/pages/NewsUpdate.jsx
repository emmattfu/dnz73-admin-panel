import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {projectFirestore} from "../firebase";

const NewsUpdate = ({ match }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const id = match.params.id;

  useEffect(() => {
    projectFirestore
      .collection("news")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const { title, text } = doc.data();
          setTitle(title);
          setText(text);
        });
      });
  }, []);

  function onChangeHandle(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "text") {
      setText(e.target.value);
    }
  }

  function submitHandle(e) {
    e.preventDefault();
    projectFirestore.collection("news").doc(id).update({
      title,
      text,
    });
  }

  if (!title || !text) {
    return <h1>Loading...</h1>;
  }

  return (
    <Form onSubmit={submitHandle}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Заголовок новини</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Титул документу"
          value={title}
          onChange={onChangeHandle}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Текст для новини</Form.Label>
        <Form.Control as="textarea" name="text" rows="6" value={text} onChange={onChangeHandle}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Зберегти
      </Button>
    </Form>
  );
};

export default NewsUpdate;
