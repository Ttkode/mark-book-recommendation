import React, { useState } from "react";
import "./styles.css";

const bookRec = {
  thriller: [
    { name: "Gone Girl", author: "Gillian Flynn" },
    { name: "And then there were noOne", author: "Agatha Christie" },
    { name: "The silence of the lambs", author: "Thomas Harris" }
  ],

  Romance: [
    { name: "Perks of being a wallflower", author: "Stephen Chbowski" },
    { name: "Normal People", author: "Sally Rooney" },
    { name: "Set on You", author: "Amy Lea" }
  ],

  Period: [
    { name: "A Song of Ice and Fire", author: "George R.R Martin" },
    { name: "Shadow and Bone", author: "Leigh Burdago" },
    { name: "Mansfield Park", author: "Jane Ausin" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Period");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Book Recommendation </h1>

      <div style={{ padding: "1%", fontSize: "smaller" }}>
        Books and Authors on different Genres, check out if your favourite
        author is here.
      </div>

      <div>
        {Object.keys(bookRec).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "rgb(210, 170, 118)"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookRec[selectedGenre].map((Book) => (
            <li
              key={Book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #45423fd8",
                width: "50%",
                margin: "1% 72.5%",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Book.name}</div>
              <div style={{ fontSize: "small" }}> {Book.author} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
