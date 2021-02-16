import React, {useState} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import AppleIcon from '@material-ui/icons/Apple';


const ITEM_HEIGHT = 48;

const getStyle = ({ draggableStyle, virtualStyle, isDragging }) => {
    const combined = {
      ...virtualStyle,
      ...draggableStyle
    };  
    const grid = 8;  

    const result = {
      ...combined,
      // height: isDragging ? combined.height : combined.height - (grid*3),
      height: isDragging ? combined.height : combined.height - (grid),
      left: isDragging ? combined.left : combined.left + grid,
      width: isDragging
        ? draggableStyle.width
        : `calc(${combined.width} - ${grid * 3}px)`,
      // marginBottom: grid,
      marginBottom: `${grid}px`,
      // backgroundColor: '#aaa',
      // backgroundColor: 'lightgrey',
      backgroundColor: 'lightgrey',
      // borderRadius: '15px',
      color: 'rgba(0,0,0,.6)',
      // border: '1px solid lightblue',
      boxShadow: '2px 2px #aaa',
      // paddingRight: '0px',
      // transition: 'background .4s',
    };
    return result;
  }

const useStyles = makeStyles((theme) => ({
  number: {
    width: 'auto',
    paddingRight: '15px',
  },
}));

const Item = ({ provided, item, style, isDragging, index = ''}) => {
  const classes = useStyles();
  // debugger
  const options = [
    `id: ${item.id}`,
    `name: ${item.name}`,
    `groupId: ${item.groupId}`,
    `groupName: ${item.groupName}`,
  ];


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // debugger
    return (
        <ListItem button divider 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={getStyle({
            draggableStyle: provided.draggableProps.style,
            virtualStyle: style,
            isDragging
          })}
        className={`item ${isDragging ? "is-dragging" : ""}`}
        >
          {/* <ListItemText primary={item.name} /> */}
  
          <p className={classes.number}>{index+1}</p>

          <ListItemText primary={item.name} secondary={item.groupName}/>

          <IconButton 
            edge="end" 
            color="inherit"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                // width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
    );
  }
export default Item;