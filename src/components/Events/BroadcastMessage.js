import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BroadCastMessage = ({ comp_id }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    message.length > 0 && setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className="rounded text-center bg-yellow-400 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            style={{
                backgroundColor: 'lightgray',
                color: 'black',
                borderRadius: 15,
                padding: "10px",
            }}
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <Button
          variant="outlined"
          onClick={handleClick}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 15,
            height: "30px",
          }}
        >
          {`Broadcast ${message}`}
        </Button>
        <Snackbar open={open} autoHideDuration={3000} message={message} action={action}/>
      </div>
    </div>
  );
};

export default BroadCastMessage;
