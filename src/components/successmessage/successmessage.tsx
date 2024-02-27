import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SuccessMessageProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ open, message, onClose }) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top
    >
      <Alert 
        onClose={onClose} 
        severity="success" 
        sx={{ 
          width: '50%', // Adjust width as needed
          backgroundColor: 'white', // Change background color
          color: 'black', // Change text color
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SuccessMessage;
