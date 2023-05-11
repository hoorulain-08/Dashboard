// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// // import delDraz from "../assests/images/delDraz.svg"
// import delDaraz from "../../assests/images/delDaraz.png";
// import "../../assests/css/style.css"
// const style = {
//   position: 'absolute' ,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 714,
//   height:600,
//   bgcolor: 'background.paper',
//   border: '2px solid #fff',
//   boxShadow: 24,
//   p: 4,
// borderRadius:"10px"
// };

// export default function Del() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//     <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//          open={open}
//          onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
      
//       >
//         <Box sx={style}>
//        <div className='img-pos-del'><img src={delDaraz} className='del-img' />
//        <h1 className='draz-head'>Daraz</h1>
//        </div> 
       
//           <div className='del-daraz-p1'>
//             You are About to delete a Daraz buisness user.This will delete <br/>
//                <span className='p1-pos'> your entire buisness entry from digital identity system </span>
        
//           </div>
//           <div className='del-daraz-p2'>
//             All graphs and analytics will be removed & your RSS feed  <br/>
//                <span className='p2-pos'>& website will stop working </span>
        
//           </div>

//           <div className='sure'>
//           Are You Sure?

//           </div>
// <div className='del-daraz-btn-pos'>
//           <span >
//     <Button
//        style={{ width: "39%" }}
                 
//                       type="submit"
//                       variant="contained"
//                       id="daraz-del-button"
//     >
//       Delete
//     </Button>
// &nbsp;&nbsp;&nbsp;
//     <Button  className='daraz-del-button' 
                  
//   sstyle={{ width: "39%" , border:"2px solid white",backgroundColor:"	#B0C4DE",color:"white"}} >
//       Cancel
//     </Button>
//           </span>
// </div>
//           {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}
          
//         </Box>
//        {/* <h1>Hello world</h1>    */}
//       </Modal> 
    
//     </div>
//   );
// }
