import React from "react";
import { Table, Button } from "react-bootstrap";

const InfoTable = ({ data }) => {
  console.log(data);
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
              <td>{el.title}</td>
              <td>дата</td>
              <td>
                  <Button>Корегувати</Button>
                  <Button variant="danger">Видалити</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default InfoTable;
