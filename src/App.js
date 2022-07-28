import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import { MoralisProvider, useMoralis, useSate } from "react-moralis";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Auth } from "./Auth";
import { Home } from "./Home";
import { Profile } from "./Profile";

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();

  return (
    <Container>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
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
