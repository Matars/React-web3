import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";

export const Profile = () => {
  const { user, setUserData, userError, logout } = useMoralis();
  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [password, setPassword] = useState(" ");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password == "" ? undefined : password,
    });
  };

  return (
    <Box>
      <Heading>
        Welcome, {user ? user.attributes.username : "not logged in"}
      </Heading>
      <Stack spacing={3}>
        <Text>Username</Text>
        <Input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <Text>Email</Text>
        <Input
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Text>Passowrd</Text>
        <Input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </Stack>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={() => logout()}>Logout</Button>
    </Box>
  );
};
