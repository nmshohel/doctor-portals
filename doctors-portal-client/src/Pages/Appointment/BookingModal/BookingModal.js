import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({bookingOpen,handleBookingClose,booking,date}) => {
    const {name,time}=booking

    ////form submit handler
    const handleBookingSubmit=e=>{
        alert("Submitting");

        //for not reload page
        e.preventDefault();

        //for close booking when form submit
        handleBookingClose()
        

    }
  
    return (
        <Modal
        open={bookingOpen}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>

          <form action="" onSubmit={handleBookingSubmit}>
                <TextField
                disabled
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
              
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue="Your name"
                size="small"
                />
                <TextField
                
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue="Your Email"
                size="small"
                />
                <TextField
                
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue="Your Mobile No"
                size="small"
                />
                <TextField
                disabled
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />
                <Button type='submit' variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;