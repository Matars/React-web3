import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Box,
  Container,
  Flex,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MoralisProvider, useMoralis, useSate } from "react-moralis";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Web3 from "web3";
import { Auth } from "./Auth";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Voting } from "./Voting";

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();
  const providerURL = process.env.PROVIDER_URL;
  
  useEffect(() =>{
    const web3 = new Web3(providerURL)
  }, []);

  return (
    <Container>
      <Flex my={6}>
        <Link to="/">Home</Link>
        <Spacer />
        {isAuthenticated && <Button p='4' m='2' ><Link to="/Voting">Voting</Link></Button>}
        {isAuthenticated && <Link to="/profile"><Avatar name={user.attributes.username} /></Link>}
      </Flex>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Voting" element={<Voting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <>
          {/* Not redirecting */}
          {/*{!isAuthUndefined <Navigate replace to="/" />} */}
          <Auth />
        </>
      )}
      {/* Some weird ass syntax*/}
    </Container>
  );
}

export default App;
