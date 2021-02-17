import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from '@material-ui/core/styles';
import ListMaterialUI from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';                           
import ItemListApp from './ItemList';

const Column = React.memo(function Column({ column, index, columnId = null }) {
    const openStart = columnId === 'разное' ? true : false;
    const [open, setOpen] = useState(openStart);
    const [isHover, setIsHover] = useState(false);
  
    const useStyles = makeStyles((theme) => ({
      column: {
        margin: '3px',
      },
      title__wrap: {
        border: '1px solid #ddd',
        padding: '15px',
        backgroundColor: isHover ? '' : open ? '#f4f4f4!important' : '#bbb!important',
        transition: 'background .4s',
      },
      listItemText: {              
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
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '50%',
        padding: '7% 13%',
        textAlign: 'center',
        verticalAlign: 'center',
        lineHeight: '1em',
      },
      small: {          
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      ItemList_wrap: {
        backgroundColor: '#f5f5f5',
        transition: 'background .4s',
      },
    }));

    const classes = useStyles();

    const handleClick = () => {
      setOpen(!open);
    };

    const getListStyle = (isDraggingOver) => {
      return {
        background: isDraggingOver ? '#a0a0ff' :  open ? '#f4f4f4' : '#ddd',   
      }
    };

    return (
      <Draggable draggableId={column.id} index={index}>
        {(provided, snapshot) => {
          return (
          <div
            className={classes.column}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
              <ListItem button 
                onClick={handleClick} 
                {...provided.dragHandleProps} 
                className={classes.title__wrap}
                style={getListStyle(snapshot.isDragging)}
              >
                <ListItemIcon className={classes.icon}>
                  {column.items.length > 0 && <p className={classes.lengthGroup}>{column.items.length}</p>}
                  <AddShoppingCartIcon />
                  {/* <Avatar variant="rounded" alt={column.name} src={column.img} className={classes.small} /> */}
                </ListItemIcon>
                <ListItemText primary={column.name} className={classes.title} classes={{primary:classes.listItemText}}/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <div className={classes.ItemList_wrap} >
                <ListMaterialUI component="div" disablePadding className={classes.ItemList_wrap2} style={{height: !open && '0px', paddingTop: open && '3px'}}>
                    <ItemListApp column={column} index={index} 
                      open={open}
                      setIsHover={setIsHover}
                    />
                </ListMaterialUI>
              </div>
          </div>
          )}}
      </Draggable>
    );
  });
  export default Column;