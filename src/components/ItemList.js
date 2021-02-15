import React, { useLayoutEffect, useRef } from "react";
import { FixedSizeList } from "react-window";
import { Droppable } from "react-beautiful-dnd";
import Item from './Item';
import Row from './Row';



const ItemListApp = React.memo(function ItemList({ column, index, handleMouseOver2, open }) {
    const listRef = useRef();
    useLayoutEffect(() => {
      const list = listRef.current;
      if (list) {
        list.scrollTo(0);
      }
    }, [index]);


    // // 1
    // provided
    //   dragHandleProps:
    //     aria-describedby: "rbd-hidden-text-1-hidden-text-1"
    //     data-rbd-drag-handle-context-id: "1"
    //     data-rbd-drag-handle-draggable-id: "25"
    //     draggable: false
    //     onDragStart: ƒ preventHtml5Dnd(event)
    //     role: "button"
    //     tabIndex: 0
    //   draggableProps:
    //     data-rbd-draggable-context-id: "1"
    //     data-rbd-draggable-id: "25"
    //     onTransitionEnd: null
    //     style:
    //       boxSizing: "border-box"
    //       height: 52
    //       left: 12
    //       opacity: null
    //       pointerEvents: "none"
    //       position: "fixed"
    //       top: 57
    //       transform: "translate(326px, 162px)"
    //       transition: "opacity 0.2s cubic-bezier(0.2, 0, 0, 1)"
    //       width: 291.75
    //       zIndex: 5000


    // // 2
    // snapshot
    //   combineTargetFor: null
    //   combineWith: null
    //   draggingOver: "кулинария"
    //   dropAnimation: null
    //   isClone: true
    //   isDragging: true
    //   isDropAnimating: false
    //   mode: "FLUID"


// 3
    // rubric
    //   source:
    //     droppableId: "разное"
    //     index: 0
    //   type: "DEFAULT"


// //  44
// provided
//   droppableProps:
//     data-rbd-droppable-context-id: "1"
//     data-rbd-droppable-id: "разное"
  // droppableProps:
  //   data-rbd-droppable-context-id: "1"
  //   data-rbd-droppable-id: "деликатесы"

    const getListStyle = (isDraggingOver) => {
      // debugger
      if (isDraggingOver) {

      }

      return {
      // background: isDraggingOver ? 'lightblue!important' : 'lightgrey!important',
      // background: isDraggingOver ? 'lightblue' : 'lightgrey',
      // background: isDraggingOver ? 'lightblue' : 'green',
      background: isDraggingOver ? 'rgb(189, 255, 217)' : 'lightblue',
      // height: isDraggingOver && '200px',
      // top: isDraggingOver && '-50px',
      // height: isDraggingOver && '50px',
      // padding: '8px',
      // display: 'none',
      width: !open && '83%',
      top: !open && '-45px',
      // height: !open && '50px',
      opacity: !open && '0',
      // opacity: isDraggingOver && open ? '0' : '0.2',
      
    }};

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

        const sizeKim = open ? 500 : 40;
  // debugger
          return (
            <FixedSizeList
              // height={500}
              height={sizeKim}
              itemCount={itemCount}
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