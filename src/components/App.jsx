import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes"

function addNote(currentNote){
    return(
        <Note 
            key={currentNote.key}
            title={currentNote.title}
            content={currentNote.title}
        />
    )
}


function App(){
    return(
        <div>
            <Header />
            {notes.map(addNote)}
            <Footer />
        </div>
    );
};

export default App;

// reference:  https://w00gz.csb.app/