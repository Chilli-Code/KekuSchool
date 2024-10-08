import React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.857rem;
  box-sizing: border-box;
  padding: 10px;
  margin: 12px 0;
  min-width: 100px;
  border-radius: 0.5rem;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"};
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
`);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component'
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

const MenuItem = styled(BaseMenuItem)(({ theme }) => `
  list-style: none;
  padding: 5px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  margin-bottom:5px;
  display:flex;
  align-items: center;
  
  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
`);

const MenuButton = styled(BaseMenuButton)(({ theme }) => `
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  /* color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]}; */
  background-color: transparent;
  border:none;
  transition: all 150ms ease;
  width:auto;
  height:12px;
  
  &:hover {
    background: transparent;
    transform: scale(1.06);
    font-size:1.5rem;
  }

  &:active {
    background:transparent;
    transform: scale(1.06);
    font-size:1.5rem;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
`);


const MiniMenu = ({ options }) => {
  return (
    <Dropdown>
        <MenuButton className="icon">more_horiz</MenuButton>
    <Menu slots={{ listbox: AnimatedListbox }}>
      {options.map((option) => (
        <MenuItem key={option.label} onClick={option.action}>
          {option.isLink ? (
            <a style={{color: 'inherit',
                textDecoration:'none',
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                gap: '2px',
                cursor:'normal !important',
            }}
            
            href={option.route} className="menu-link">
              <span className="icon">{option.icon}</span>
              {option.label}
            </a>
          ) : (
            <>
              <span className="icon">{option.icon}</span>
              {option.label}
            </>
          )}
        </MenuItem>
      ))}
    </Menu>
  </Dropdown>
  );
};

export default MiniMenu;
