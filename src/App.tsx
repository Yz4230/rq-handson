import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Users from "./pages/Users";

import type { FC } from "react";

const Container = styled.div({
  width: "60%",
  margin: "0 auto",
});

const App: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Container>
  );
};

export default App;
