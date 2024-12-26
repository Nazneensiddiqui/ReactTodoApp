import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"myTodo",
    initialState:{
        task:[]
    },
    reducers:{
        AddTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        DeletTask:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!==actions.payload)
        },
        EditTask:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload.id)
            if(item) item.work=actions.payload.work;
        },
        Complited:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload)
            if(item) item.status=true;
        },
        UnComplited:(state, actions)=>{
            const item=state.task.find(key=>key.id===actions.payload)
            if(item) item.status=false;
        }
    }
})
export const{AddTask, DeletTask, EditTask, Complited, UnComplited}=todoSlice.actions;
export default todoSlice.reducer;