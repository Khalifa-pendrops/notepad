import React, { useState } from "react";

const Note = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "This is a sample note", image: null },
  ]);

  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const addNote = () => {
    const newNote = { id: Date.now(), content: input, image: image };
    setNotes([...notes, newNote]);
    setInput("");
    setImage(null);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    };
    
      const makeBold = () => {
        setInput(`<b>${input}</b>`);
      };

      const makeItalic = () => {
        setInput(`<i>${input}</i>`);
      };

      const makeUnderline = () => {
        setInput(`<u>${input}</u>`);
      };


  return (
    <>
      <h1>React Notepad</h1>
      <div className="input-container">
        <textarea
          placeholder="Write a new note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="file" onChange={onImageChange} />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <p>{note.content}</p>
            {note.image && (
              <img
                src={note.image}
                alt="note"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="formatting-container">
        <button onClick={makeBold}>Bold</button>
        <button onClick={makeItalic}>Italic</button>
        <button onClick={makeUnderline}>Underline</button>
      </div>
    </>
  );
};

export default Note;
