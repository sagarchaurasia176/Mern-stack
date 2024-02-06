import React from 'react'
import { Input, TextField} from '@mui/material'
function TextInput() {
  return (
      <>
      <div>TextInput</div>
            <TextField  sx={{margin:'23px' , width:'23rem'}} type='text' placeholder=' email'/>
        </>
    )
}

export default TextInput