import React from 'react';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function Note(props) {

function handleClick() {
  props.onDelete(props.id);
}




    return (
        <div className='note'>
          <h1>{props.Title}</h1>
          <p>{props.Content}</p>
          <button onClick={handleClick}><DeleteSharpIcon/></button>
        </div>
    )
};

export default Note;