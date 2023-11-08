import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand.js";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisibel, setBrandVisible] = useState(false);
  const [typeVisibel, setTypeVisible] = useState(false);
  const [deviceVisibel, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Додати тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Додати бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Додати пристрій
      </Button>
      <CreateBrand show={brandVisibel} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisibel}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisibel} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
