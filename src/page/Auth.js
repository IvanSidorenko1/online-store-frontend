import React, { useContext, useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userAPI";

import { observer } from "mobx-react-lite";
import { Context } from "../";
const Auth = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log("login", data);
      } else {
        data = await registration(email, password);
        console.log("registration", data);
      }
      user.setUser(data);
      user.setIsAuth(true);
      // console.log("user", data, user.isAuth);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.massege);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизація" : "Регістрація"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введіть email"
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Введіть password"
            type="password"
          />
          <Row className="d-flex justify-content-between m-0 mt-3 align-items-center">
            {isLogin ? (
              <div style={{ width: "max-content" }} className="d-flex">
                Немає акаунта?
                <NavLink to={REGISTRATION_ROUTE} className="ms-2">
                  Зареєструйтесь!
                </NavLink>
              </div>
            ) : (
              <div style={{ width: "max-content" }} className="d-flex">
                Є акаунт?
                <NavLink to={LOGIN_ROUTE} className="ms-2">
                  Ввійти!
                </NavLink>
              </div>
            )}
            <Button
              style={{ width: "max-content" }}
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? "Ввійти" : "Реєстрація"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
