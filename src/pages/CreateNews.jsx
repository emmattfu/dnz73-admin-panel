import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { projectFirestore} from "../firebase";
import { useStorage } from "../hooks";

const types = ['image/jpeg', 'image/png', 'image/jpg']

const NewsUpdate = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null)
  const [err, setError] = useState(null)
 
  const {createdAt, url, error, isReady} = useStorage(file)

  function onChangeHandle(e) {
    if (e.target.name === "title" && e.target.value) {
      setTitle(e.target.value);
    } else if (e.target.name === "text" && e.target.value) {
      setText(e.target.value);
    }
  }

  function submitHandle(e) {
    e.preventDefault()

    if (url) {
      projectFirestore.collection('news').add({
        title,
        text,
        url,
        createdAt
      })
    }

    
  }

  function loadFileHandle(e) {
      const newFile = e.target.files[0]

      if(newFile && types.includes(newFile.type)) {
        setFile(newFile)
        setError(null)
      } else {
        setError('Тип файлу має бути JPEG або PNG')
        console.log('error', newFile.type)
      }
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
        <Form.Control as="textarea" rows="6" name="text" placeholder="Текст документу" onChange={onChangeHandle} />
      </Form.Group>
      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Example file input" onChange={loadFileHandle}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isReady}>
        Зберегти
      </Button>
    </Form>
  );
};

export default NewsUpdate;
