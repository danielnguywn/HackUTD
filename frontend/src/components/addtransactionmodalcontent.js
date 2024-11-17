import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Box, Button } from '@mui/material';

export default function Portal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setShowModal(true)} sx={{ bgcolor: '#40B7BA', borderRadius: '20px'}}>
        Add Transaction
      </Button>
      {showModal && createPortal(
        <>
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            backdropFilter: 'blur(5px)', 
            zIndex: 1000 
          }} />
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', bgcolor: 'white', boxShadow: 24, p: 4 , borderRadius: '20px'}}>
              <ModalContent onClose={() => setShowModal(false)} />
            </Box>
          </Modal>
        </>,
        document.body
      )}
    </>
  );
}

function ModalContent({ onClose }) {
  useEffect(() => {
    const inputs = document.querySelectorAll('input[type="text"]');
    const submitButton = document.getElementById('submitButton');
    const handleInput = () => {
      if (inputs[0].value || inputs[1].value) {
        submitButton.style.display = 'block';
      } else {
        submitButton.style.display = 'none';
      }
    };
    inputs.forEach(input => input.addEventListener('input', handleInput));
    return () => {
      inputs.forEach(input => input.removeEventListener('input', handleInput));
    };
  }, []);
  //todo: use the above code to hook this up to ocr.
  return (
    <div>
      <h2 style={{ textAlign: 'left', marginBottom: '40px' }}>Add New Transaction</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '60px' }}>
        <input type="text" placeholder="Transaction Name" style={{ padding: '10px', borderRadius: '20px', border: '1px solid #ccc', height: '40px' }} />
        <input type="text" placeholder="Transaction Amount" style={{ padding: '10px', borderRadius: '20px', border: '1px solid #ccc', height: '40px' }} />
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: '20px', display: 'none', backgroundColor: 'rgba(63, 81, 181, 0.75)', width: '200px', height: '60px', fontSize: '18px' }} id="submitButton">
        Submit
      </Button>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" component="label" style={{ width: '200px', height: '60px', backgroundColor: 'rgba(64, 183, 186, 0.75)', padding: 0, borderRadius: '40px', fontSize: '24px', fontWeight: '700' }}>
          <input type="file" hidden />
          Upload
        </Button>
      </div>
      <Button variant="contained" color="primary" onClick={onClose} style={{ marginTop: '20px', backgroundColor: '#40B7BA', borderRadius: '20px' }}>
        Close
      </Button>
    </div>
  );
}
