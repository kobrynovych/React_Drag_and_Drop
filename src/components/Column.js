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

const Column = React.memo(function Column({ column, index, columnId = null }) {
  // debugger
    const openStart = columnId === 'разное' ? true : false;
    const [open, setOpen] = useState(openStart);
    const [isHover, setIsHover] = useState(false);
  
    const useStyles = makeStyles((theme) => ({
      column: {
        margin: '3px',
        // padding: '1px',
      },
      title__wrap: {
        border: '1px solid #ccc',
        // padding: '11px',
        // backgroundColor: styleHover && 'red!important',
        // backgroundColor: isHover ? '' : 'rgb(189, 255, 217)!important',
        // backgroundColor: isHover ? '' : '#fff!important',

        backgroundColor: isHover ? '' : open ? 'rgb(160, 160, 255)!important' : 'rgb(189, 255, 217)!important',
    
        // backgroundColor: columnId === 'разное' && '#fff!important',
        transition: 'background .4s',
      },
      listItemText: {                  // title
        fontSize:'.9rem',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: '8px',
      },
      icon: {
        minWidth: '33px',
        position: 'relative',
      },
      lengthGroup: {
        position: 'absolute',
        fontSize: '12px',
        top: '-105%',
        left: '55%',
        // transform: translate(),
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '50%',
        padding: '7% 13%',
        textAlign: 'center',
        verticalAlign: 'center',
        lineHeight: '1em',
      },
      small: {                     // img avatar
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      ItemList_wrap: {
        // backgroundColor: 'lightblue',
        backgroundColor: '#f5f5f5',
        transition: 'background .4s',
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

    const classes = useStyles();

    const handleClick = () => {
      setOpen(!open);
    };
  
    const handleMouseOver2 = isDraggingOver => {
      // debugger
      if (isDraggingOver) {
        setOpen(false);
      }
    };

    const getListStyle = (isDraggingOver) => {
      // debugger
      if (isDraggingOver) {

      }

      return {
      // background: isDraggingOver ? 'rgb(160, 160, 255)' : '#fff',
      // background: isDraggingOver ? 'rgb(160, 160, 255)' : '#6fda44',    // column title wrap
      // background: isDraggingOver ? 'rgb(160, 160, 255)' : 'rgb(160, 160, 255)',    // column title wrap
      // background: isDraggingOver ? 'rgb(160, 160, 255)' :  open ? '#cacaff' : 'rgb(160, 160, 255)',    // column title wrap
      background: isDraggingOver ? 'rgb(160, 160, 255)' :  open ? 'rgb(160, 160, 255)' : '#cacaff',    // column title wrap
      // backgroundColor: open ? 'red!important' : 'black!important',

      
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
            // style={getListStyleAll(provided.draggableProps)}
            // style={getListStyleAll(provided.draggableProps['data-rbd-draggable-id'])}
            // style={{
            //   // color: provided.draggableProps['data-rbd-draggable-id'] === 'разное' ? 'green!important' : 'lightblue!important',
            // }}
          >
              <ListItem button onClick={handleClick} {...provided.dragHandleProps} className={classes.title__wrap}
                // onMouseOver={handleMouseOver(snapshot.isDraggingOver)}
                // onMouseOver={handleMouseOver(snapshot.isDragging)}
                // onMouseMove={handleMouseOver(snapshot.isDragging)}
                style={getListStyle(snapshot.isDragging)}
              >
                <ListItemIcon className={classes.icon}>
                  {column.items.length > 0 && <p className={classes.lengthGroup}>{column.items.length}</p>}
                  <AddShoppingCartIcon />
                  {/* <Avatar variant="rounded" alt={column.name} src={column.img} className={classes.small} /> */}
                  {/* <Avatar variant="rounded" alt={column.name} src={img} className={classes.small} /> */}
                </ListItemIcon>
                <ListItemText primary={column.name} className={classes.title} classes={{primary:classes.listItemText}}/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {/* <Collapse in={open} timeout="auto" unmountOnExit className={classes.ItemList_wrap}> */}
              <div className={classes.ItemList_wrap} >
                <ListMaterialUI component="div" disablePadding className={classes.ItemList_wrap2} style={{height: !open && '0px', paddingTop: open && '3px'}}>
                    <ItemListApp column={column} index={index} 
                      open={open}
                      setIsHover={setIsHover}
                    />
                </ListMaterialUI>
              </div>
              {/* </Collapse> */}
          </div>
          )}}
      </Draggable>
    );
  });
  export default Column;