import React, { useLayoutEffect, useRef } from "react";
import { FixedSizeList } from "react-window";
import { Droppable } from "react-beautiful-dnd";
import Item from './Item';
import Row from './Row';

const ItemListApp = React.memo(function ItemList({ column, index, open, setIsHover }) {
    const listRef = useRef();
    useLayoutEffect(() => {
      const list = listRef.current;
      if (list) {
        list.scrollTo(0);
      }
    }, [index]);

    const getListStyle = (isDraggingOver) => {
      if (!open && isDraggingOver) {
        // debugger
        setIsHover(false);
      }
      if (!open && !isDraggingOver) {
        // debugger
        setIsHover(true);
      }

      return {
      transition: 'background .4s',
      // background: open ? isDraggingOver ? 'rgb(189, 255, 217)' : 'lightblue' : isDraggingOver ? 'rgb(189, 255, 217)' : 'transparent',
      background: open ? isDraggingOver ? '#bbb' : '#f5f5f5' : isDraggingOver ? '#bbb' : 'transparent',  
      width: !open && '1%',
      left: !open && '40%',
      top: !open && '-45px',
      // borderRadius: '15px',
      opacity: !open && '0',
    }};

    const  listHeight = () => {
      const sizeWindow = window.innerWidth;
      if (sizeWindow > 900) {
        return open ? 398 : 40;
      }
      return open ? 333 : 40;
    }

    return (
      <Droppable
        droppableId={column.id}
        mode="virtual"
        renderClone={(provided, snapshot, rubric) => {
  // debugger
          return (<Item
            provided={provided}
            isDragging={snapshot.isDragging}
            item={column.items[rubric.source.index]}
            // style={getListStyle(snapshot.isDraggingOver)}
          />
        )}}
      >
        {(provided, snapshot) => {
          const itemCount = snapshot.isUsingPlaceholder
            ? column.items.length + 1
            : column.items.length;

        // const sizeKim = open ? 500 : 40;
        // const sizeKim = open ? 333 : 40;
  // debugger
          return (
            <FixedSizeList
              // height={500}
              // height={sizeKim}
              height={listHeight()}
              
              itemCount={itemCount}
              // itemSize={60}
              itemSize={60}
              // width={300}
              outerRef={provided.innerRef}
              itemData={column.items}
              className="task-list"
              style={getListStyle(snapshot.isDraggingOver)}
              ref={listRef}
            >
              {Row}
            </FixedSizeList>
          );
        }}
      </Droppable>
    );
  });
  export default ItemListApp;