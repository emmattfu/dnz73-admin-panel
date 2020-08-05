import React from "react"
import { Table, Button } from "react-bootstrap"
import {Link} from 'react-router-dom'
import {projectFirestore} from '../firebase'

const InfoTable = ({ data }) => {
  
  const removeNews = (e) => {
    projectFirestore.collection('news').doc(e.target.value).delete()
  }

  console.log(data)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Дата написання</th>
          <th>Панель дій</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              <td style={{width: "50%"}}>{el.title}</td>
              <td>{new Date(el.createdAt.seconds * 1000).toLocaleString()}</td>
              <td>
                  <Button className="edit-btn" value={el.id}><Link to={`news/update/${el.id}`}>Корегувати</Link></Button>
                  <Button className="delete-btn" variant="danger" value={el.id} onClick={removeNews}>Видалити</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default InfoTable;
