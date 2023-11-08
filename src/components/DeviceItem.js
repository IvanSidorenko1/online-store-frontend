import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";

import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
      <Card className="mb-3" style={{ cursor: "pointer" }} border={"light"}>
        <Image
          height={150}
          style={{ width: "100%", objectFit: "cover", margin: "auto" }}
          src={process.env.REACT_APP__API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>Scvdsf</div>
          <div className="mt-1 d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
