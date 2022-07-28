import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";

const SignUp = () => {
  const { signup } = useMoralis();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Stack spacing={5}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => signup(username, password, email)}>Sign Up</Button>
    </Stack>
  );
};

const LogIn = () => {
  const { login } = useMoralis();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Stack spacing={5}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => login(username, password)}>Log in</Button>
    </Stack>
  );
};

export const Auth = () => {
  const { authError, isAuthenticating, authenticate } = useMoralis();
  return (
    <Stack spacing={10}>
      <Container>
        <Heading size={"lg"} textAlign="center">
          Twitter Clone with Smart Contracts
        </Heading>
        {authError && (<ErrorBox title="Authentication Error" msg="Error" />)}
      </Container>
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Login with Metamask
      </Button>
      <Text textAlign="center">Else</Text>
      <SignUp />
      <LogIn />
    </Stack>
  );
};
