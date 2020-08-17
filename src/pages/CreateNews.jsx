import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { projectFirestore } from "../firebase";
import { useStorage } from "../hooks";
import { useForm } from "react-hook-form";
import MyEditor from "../components/MyEditor";

const types = ["image/jpeg", "image/png", "image/jpg"];

const NewsUpdate = () => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const [editorVal, setEditorVal] = useState("")

  const { createdAt, url, error, isReady } = useStorage(file);

  function submitHandle(data) {
    console.log(data)
    if (url) {
      projectFirestore.collection("news").add({
        title: data.title,
        text: editorVal,
        morePhoto: data.more,
        video: data.video,
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

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorVal(data)
  }
  

  return (
    <form className="create-news-form" onSubmit={handleSubmit(submitHandle)}>
      <label htmlFor="title">Назва новини</label>
      <input className="form-control" type="text" name="title" ref={register}/>
      <label htmlFor="video">Посилання на відео в YouTube</label>
      <input className="form-control" type="text" name="video" ref={register}/>
      {/* <label htmlFor="text">Текст новини</label>
      <textarea className="form-control" rows="10" name="text" ref={register}></textarea> */}
      <label htmlFor="more">Більше фото</label>
      <input className="form-control" type="text" name="more" ref={register}/>
      <input type="file" name="file" onChange={loadFileHandle} ref={register}/>

      <MyEditor handleEditorChange={handleEditorChange}/>
      <Button variant="primary" type="submit" disabled={!isReady}>
        Зберегти
      </Button>
    </form>
  );
};

export default NewsUpdate;
