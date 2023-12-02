import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: red;
  opacity: 58%;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Forword = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline red;
  decoration-color: red;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { isFetching } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, navigate, setError, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <div className="not-italic text-red-500 text-opacity-100 text-lg ">
            Login!
          </div>
        </Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleSubmit} disabled={isFetching}>
            Login
          </Button>

          {error && <Error>{error}</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
