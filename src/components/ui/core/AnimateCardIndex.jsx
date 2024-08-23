// AnimatedDivs.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';








const CustomDiv = styled(motion.div)`
  .custom-div {
    border-radius: 16px;
    padding: 16px;
    flex: 1;
    min-width: 130px;
    cursor: pointer;
  }
  .custom-div:nth-child(odd) {
    background-color: #6B21A8;
  }
  .custom-div:nth-child(even) {
    background-color: #FAE27C;
  }
  display: flex;
  gap: 16px;
  justify-content: space-between; 
  flex-wrap: wrap; 
  
  .custom-header {
    display: flex;
    justify-content: space-between;
  }
  .custom-h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 16px 0;
    color: #000;
  }
  .custom-h2 {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
  .custom-span {
    font-size: 10px; 
    background-color: #FFFFFF;
    padding: 4px 8px;
    border-radius: 9999px;
    color: #16A34A;
}
.icon{
    color: #FFF;
    font-size:1.2rem;
}
`;



const customDivVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};

// const Giro = {
//     {
//         initial={{ scale: 0 }}
//         animate={{ rotate: 360, scale: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 20
//         }}

//     }
// }

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }



const AnimatedDivs = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <CustomDiv 
    className="custom-div"
    variants={customDivVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.5 }}
    >
      <motion.div
      className="custom-div"
      variants={item}
      transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">2024/25</span>
          <span
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="icon">more_horiz
          </span>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><span className="icon">edit</span>Editar</MenuItem>
      </Menu>
        <h1 className="custom-h1">1,234</h1>
        <h2 className="custom-h2">Estudiantes</h2>
      </motion.div>
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
        whileHover={{ scale:1}}
      >
        <div className="custom-header">
          <span className="custom-span">2024/25</span>
          <span className="icon">more_horiz</span>
        </div>
        <h1 className="custom-h1">1,234</h1>
        <h2 className="custom-h2">Profesores</h2>
      </motion.div>
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">2024/25</span>
          <span className="icon">more_horiz</span>
        </div>
        <h1 className="custom-h1">1,234</h1>
        <h2 className="custom-h2">Padres</h2>
      </motion.div>
      <motion.div
        className="custom-div"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="custom-header">
          <span className="custom-span">2024/25</span>
          <span className="icon">more_horiz</span>
        </div>
        <h1 className="custom-h1">1,234</h1>
        <h2 className="custom-h2">Personal</h2>
      </motion.div>
    </CustomDiv>
  );
};

export default AnimatedDivs;
