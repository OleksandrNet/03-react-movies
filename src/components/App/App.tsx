import { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const myKey = import.meta.env.VITE_API_KEY;

function App() {
  try {
  } catch {
  } finally {
  }

  return (
    <>
      <SearchBar />
      <Loader />
    </>
  );
}

export default App;
