import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            {
                'name':'Realizar actividad 1',
                'description':'Realizar actividad 1 de la materia de Desarrollo Web',
                'dueDate':'2025-10-20',
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeTodo: (state, action) => {
            console.log(action.payload);
            state.value = state.value.filter((todo) => todo.name !== action.payload);   
        }
    }
})

export const { addTodo, initAddTodo, removeTodo} =  todoSlice.actions

export default todoSlice.reducer;