import React, {useState} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

 const [hide, setHide] = useState(false);

 function handleHidden() {
   return setHide(true)
 }

const [note, setNote] = useState({
  title:'',
  content:''
});

function handleChange(event) {

  const {name, value} = event.target;

  setNote(prevNote =>{
return {
  ...prevNote, 
  [name]:value};
  });
}

function handleClick(event) {
  props.onAdd(note);

  event.preventDefault();
}


    return <div>
       <form className='create-note' >
       <input type="text" placeholder='Title' name='title' onChange={handleChange} onClick={handleHidden}/>
        <textarea style={{display: hide ? '' : 'none' }} type="text" placeholder='insert a note' name='content' onChange={handleChange}/>
        <Fab className='pedro' onClick={handleClick} >
        <AddIcon />
      </Fab>
       </form>
    </div>
}

export default CreateArea;