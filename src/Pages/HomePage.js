import { Container } from "@mui/material";
import React from "react";
import JobList from "../component/JobList";

function HomePage() {
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <JobList />
      </Container>
    </>
  );
}

export default HomePage;
