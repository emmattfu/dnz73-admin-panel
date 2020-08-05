import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { projectFirestore } from "../firebase";
import { useStorage } from "../hooks";
import { useForm } from "react-hook-form";

const types = ["image/jpeg", "image/png", "image/jpg"];

const NewsUpdate = () => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();

  const { createdAt, url, error, isReady } = useStorage(file);

  function submitHandle(data) {
    console.log(data)
    if (url) {
      projectFirestore.collection("news").add({
        title: data.title,
        text: data.text,
        url,
        createdAt,
      });
    }
  }

  function loadFileHandle(e) {
    const newFile = e.target.files[0];

    if (newFile && types.includes(newFile.type)) {
      setFile(newFile);
    } else {
      console.log('error')
    }
  }

  return (
    <form className="create-news-form" onSubmit={handleSubmit(submitHandle)}>
      <label htmlFor="title">Назва новини</label>
      <input className="form-control" type="text" name="title" ref={register}/>
      <label htmlFor="text">Текст новини</label>
      <textarea className="form-control" rows="10" name="text" ref={register}></textarea>
      <input type="file" name="file" onChange={loadFileHandle} ref={register}/>
      <Button variant="primary" type="submit" disabled={!isReady}>
        Зберегти
      </Button>
    </form>
  );
};

export default NewsUpdate;
