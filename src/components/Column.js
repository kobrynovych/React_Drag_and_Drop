import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
// import img from './images/p1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import ListMaterialUI from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';                           // img
import ItemListApp from './ItemList';

const useStyles = makeStyles((theme) => ({
    column: {
      margin: '1px',
    },
    title__wrap: {
      border: '1px solid #ccc',
    },
    title: {
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    icon: {
      minWidth: '33px',
    },
    small: {                     // img avatar
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    ItemList_wrap: {
      backgroundColor: 'lightblue',
      // paddingTop: '3px',          // dont work only (+ItemList_wrap2)
      // height: '40px',
      // display: 'dlock!important',
      // height: '0px',
    },
    ItemList_wrap2: {      
      // padding: '3px',
      // height: '30px',
      // overflow: 'hidden',
      // display: 'dlock!important',

    },
  }));

const Column = React.memo(function Column({ column, index }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    // const handleMouseOver = isDraggingOver => event => {
    //   debugger
    //   if (isDraggingOver) {
    //     setOpen(true);
    //   }
    // };
    const handleMouseOver2 = isDraggingOver => {
      // debugger
      if (isDraggingOver) {
        setOpen(false);
      }
    };

    const getListStyle = (isDraggingOver) => {
      debugger
      if (isDraggingOver) {

      }

      return {
      // background: isDraggingOver ? 'lightblue!important' : 'lightgrey!important',
      // background: isDraggingOver ? 'lightblue' : 'lightgrey',
      background: isDraggingOver ? 'lightblue' : '#fff',
      // height: isDraggingOver && '200px',
      // top: isDraggingOver && '-50px',
      // height: isDraggingOver && '50px',
      // padding: '8px',
      // width: 250,
      // display: 'none',
    }};

    return (
      <Draggable draggableId={column.id} index={index}>
        {(provided, snapshot) => {
// debugger
          return (
          <div
            className={classes.column}
            {...provided.draggableProps}
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
            // style={getListStyle(snapshot.draggingOver)}

            // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            // style={{
            //   backgroundColor: provided.isDragging ? 'green' : 'lightblue',
            // }}
          >
              <ListItem button onClick={handleClick} {...provided.dragHandleProps} className={classes.title__wrap}
                // onMouseOver={handleMouseOver(snapshot.isDraggingOver)}
                // onMouseOver={handleMouseOver(snapshot.isDragging)}
                // onMouseMove={handleMouseOver(snapshot.isDragging)}
                style={getListStyle(snapshot.isDragging)}
              >
                <ListItemIcon className={classes.icon}>
                  <AddShoppingCartIcon />
                  {/* <Avatar variant="rounded" alt={column.name} src={column.img} className={classes.small} /> */}
                  {/* <Avatar variant="rounded" alt={column.name} src={img} className={classes.small} /> */}
                </ListItemIcon>
                <ListItemText primary={column.name} className={classes.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {/* <Collapse in={open} timeout="auto" unmountOnExit className={classes.ItemList_wrap}> */}
              <div className={classes.ItemList_wrap} >
                <ListMaterialUI component="div" disablePadding className={classes.ItemList_wrap2} style={{height: !open && '0px', paddingTop: open && '3px'}}>
                    <ItemListApp column={column} index={index} 
                      handleMouseOver2={handleMouseOver2}
                      open={open}
                    />
                </ListMaterialUI>
              {/* </Collapse> */}
              </div>
          </div>
          )}}
      </Draggable>
    );
  });
  export default Column;