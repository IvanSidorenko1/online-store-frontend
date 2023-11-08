import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value })
      .then((data) => {
        console.log(data);
        setValue("");
        onHide();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setValue("");
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати новий бранд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"введіть назву бренду"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрити
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Додати
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
