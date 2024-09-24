import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      text: "todo Text",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  // initialState:initialState,
  initialState, //same as above
  reducers: {
    //slices will alwyas have access for state,action
    //state : (current state) state of the todo , in context api we were getting it thorugh prevState ,
    //action: we can take some values to perform actions, which is comming from the dispatch
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((ele) => ele.id !== action.payload);
    },

    // #TODO : //create update reducer
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.id) {
    //       return { ...todo, title: action.payload };
    //     }
    //     return todo;
    //   });
    // },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
