import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";


const Count = () => {

  function handleChange(event) {
    
  }

  function handlePermutation(){
    
  }

  return (
    <div>
      <form className="count-form" autoComplete>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={handleChange}
          value={state}
        />
      </form>
      <Button variant="contained" color="primary" onClick={handlePermutation}>Start</Button>
    </div>
  );
};

export default Count;
