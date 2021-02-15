import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const getStyle = ({ draggableStyle, virtualStyle, isDragging }) => {
    const combined = {
      ...virtualStyle,
      ...draggableStyle
    };  
    const grid = 8;  

    const result = {
      ...combined,
      height: isDragging ? combined.height : combined.height - (grid * 3) ,
      left: isDragging ? combined.left : combined.left + grid,
      width: isDragging
        ? draggableStyle.width
        : `calc(${combined.width} - ${grid * 2}px)`,
      marginBottom: grid,
      // backgroundColor: '#aaa',
      backgroundColor: 'lightgrey',
      borderRadius: '15px',
      color: 'rgba(0,0,0,.6)',
      // border: '1px solid lightblue',
      boxShadow: '2px 2px #aaa'
    };
    return result;
  }

const Item = ({ provided, item, style, isDragging }) => {
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
          <ListItemText primary={item.name} />
        </ListItem>
    );
  }
export default Item;