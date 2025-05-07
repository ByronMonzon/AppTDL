import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        value: [
            {
                'name':'Actividad',
                'description':'Realizar actividad 1 de la materia de Desarrollo Web',
                'dueDate':'2025-10-20',
            }
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addGoal } =  goalSlice.actions;

export default goalSlice.reducer;