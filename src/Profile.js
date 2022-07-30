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
import React, { useEffect, useState, isUserUpdating } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";
import { Web3 } from "web3";

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
      <Heading mb={3}>
        Welcome, {user ? user.attributes.username : "not logged in"}
      </Heading>
      <Stack spacing={3}>
        <Text>Change Username</Text>
        <Input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        {/* <Text>Email</Text>
        <Input
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Text>Passowrd</Text>
        <Input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        /> */}
      </Stack>
      <Button mt={5} mr={10} onClick={handleSave} isLoading={isUserUpdating}>
        Save
      </Button>
      <Button mt={5} mr={10} onClick={() => logout()}>
        Logout
      </Button>
      {userError && (
        <ErrorBox title="Error updating account" msg={userError.message} />
      )}
    </Box>
  );
};
