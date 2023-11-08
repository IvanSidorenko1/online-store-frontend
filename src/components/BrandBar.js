import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import { Context } from "..";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          style={{ width: "max-content", cursor: "pointer" }}
          className="p-2 me-2"
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => {
            device.setSelectedBrand(brand);
          }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
