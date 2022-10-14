import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function getNotes(getItem) {

  return <Note
    title={getItem.title}
    content={getItem.content} />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(getNotes)}
      <Footer />
    </div>
  );
}

export default App;
