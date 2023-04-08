import React from "react";
import BasicUsage from "./Modal2.jsx";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import "./ChatModal.css";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "68%",
  left: "88%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height: 350,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 2,
};
// export function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>
//         {" "}
//         <TelegramIcon id="charIcon" />
//       </Button>
//       <Modal
//         open={open}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <CloseIcon onClick={handleClose} />
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }


export default function ChatModal() {
  return (
    <div id="chatPopUpParentContainer">
      <div id="message">
        
        <BasicUsage/>
        <p>Chat with us.</p>
      </div>
    </div>
  );
}
