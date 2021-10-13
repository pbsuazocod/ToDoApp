import React, {useState} from 'react';
import Header from './Header';
import CreateArea from './CreateArea'
import Note from './Note'
import Footer from './Footer';

function App() {
    
    const [notes, setNotes] = useState([]);

function addNote(note){

    setNotes(prevValue=>{
        return [
            ...prevValue,
            note
        ]
    })
}

function deleteNote(id) {
    setNotes(prevValues => {
           return prevValues.filter((item, index) => {
                return index !== id;
            });
        }
    )
}


    return <div>
<Header/>
<CreateArea
    onAdd={addNote}
/>
{notes.map((note, index)=>{
    return <Note
    key={index}
    id={index}
    Title={note.title}
    Content={note.content}
    onDelete={deleteNote}
/>
})}
<Footer/>
    </div>
}

export default App;