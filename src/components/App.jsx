import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((term) => (
        <Note key={term.key} title={term.title} content={term.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
