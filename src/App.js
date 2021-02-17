import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import getInitialData from "./components/get-initial-data";
import { reorderList } from "./components/reorder";
import './App.css';
import Column from './components/Column';
import axios from "axios";

function App() {
  const [state, setState] = useState(() => getInitialData());
  const [newProductId, setNewProductId] = useState(null);
  const [newGroupId, setNewGroupId] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  
  // const myArray = Object.values(state.columns).map(el => el.items).flat();
  // const myArray2 = myArray.map(el => ({id: Number(el.id), name: el.name, groupId: el.groupId, groupName: el.groupName}));
  // const myArray3 = myArray2.sort((a, b) => a.id - b.id);
  // console.log(myArray3);

  // useEffect(async () => {
  //   if (newProductId && newGroupId) {
  //     const url = 'https://helper-pepper.com/api/';
  //     const id = 'asd';
  //     setIsPending(true);

  //     try {
  //       const response = await axios.put(`${url}product/${newProductId}/group/${newGroupId}/${id}`, 
  //         {},           // {"body":data}, 
  //         {
  //           headers: {
  //            'Content-Type': 'application/json'
  //         },
  //       });

  //       console.log(response);
  //       setNewProductId(null);
  //       setNewGroupId(null);

  //     } catch (error) {
  //       // console.log(error.response.data.error);
  //       setError(error);
  //       console.error(error);
  //     }

  //     setIsPending(false);
  //   }
  // }, [newProductId, newGroupId]);
  
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.type === "column") {
      const columnOrder = reorderList(
        state.columnOrder,
        result.source.index,
        result.destination.index
      );
      setState({
        ...state,
        columnOrder
      });
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const items = reorderList(
        column.items,
        result.source.index,
        // result.destination.index
        0                            // kim order 0
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [column.id]: {
            ...column,
            items
          }
        }
      };
      setState(newState);
      return;
    }

    // moving between lists
    const sourceColumn = state.columns[result.source.droppableId];
    const destinationColumn = state.columns[result.destination.droppableId];
    const item = sourceColumn.items[result.source.index];

    item.groupId = destinationColumn.id0;     // kim rename
    item.groupName = destinationColumn.id;    // kim rename

    // 1. remove item from source column
    const newSourceColumn = {
      ...sourceColumn,
      items: [...sourceColumn.items]
    };
    newSourceColumn.items.splice(result.source.index, 1);

    // 2. insert into destination column
    const newDestinationColumn = {
      ...destinationColumn,
      items: [...destinationColumn.items]
    };

    // newDestinationColumn.items.splice(result.destination.index, 0, item);
    newDestinationColumn.items.splice(0, 0, item);   // kim order 0

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn
      }
    };

    setState(newState);
    setNewProductId(Number(item.id));
    setNewGroupId(newDestinationColumn.id0);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="columns_wrap">
          <div>
            <Droppable
              droppableId="all-droppables1"
              type="column"
            >
              {(provided, snapshot) => {
                return (
                <div
                  className="columns"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {state.columnOrder.map((columnId, index) => (<React.Fragment key={columnId}>
                    {columnId === 'разное' && (<Column
                        columnId={columnId}
                        column={state.columns[columnId]}
                        index={index}
                      />)}</React.Fragment>
                    ))}
                  {provided.placeholder}
                </div>
              )}}
            </Droppable>
          </div>
        <Droppable
          droppableId="all-droppables"
          type="column"
        >
          {(provided, snapshot) => {
            return (
            <div
              className="columns"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => (<React.Fragment key={columnId}>
                {columnId !== 'разное' && (<Column
                  column={state.columns[columnId]}
                  index={index}
                />)}</React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}}
        </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
export default App;