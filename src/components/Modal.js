import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Modal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

{
  /* <div className="modalContainer" onClick={changeContent}>
          <div
            className="modalBody"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modalExit">
              <button className="exitModal" onClick={changeContent}>
                x
              </button>
            </div>
            {modalContent.map((modal) => {
              return (
                <div key={modal.id} className="modalCard">
                  <div className="modalHead">
                    <img className="modalImg" src={modal.imageUrl}></img>
                    <h2 className="modalTitle">
                      {modal.title} at {modal.organization}
                    </h2>
                    <h3 className="modalPay">{modal.payRate}</h3>
                  </div>
                  <div className="modalInfo">
                    <h4 className="modalShort">
                      If you are an experienced {modal.title} who wants to grow
                      in a high performing business in {modal.field}, we are
                      perfect for you.{' '}
                    </h4>
                    <p className="modalDescription">{modal.description}</p>
                  </div>
                  <div className="messageBtnDiv">
                    <button className="messageBtn">
                      Message {modal.organization}
                    </button>
                  </div>
                </div> */
}
