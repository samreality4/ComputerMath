import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Count = () => {
  const [state, setState] = useState();

  function handleChange(event) {
    setState(event.target.value);
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
      <Button variant="contained" color="primary">Start</Button>
    </div>
  );
};

export default Count;
