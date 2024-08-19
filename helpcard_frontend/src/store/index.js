import { configureStore, createSlice } from '@reduxjs/toolkit'
 

const helpCardslice = createSlice({
    name:"helpCard",
    initialState:{
        datas:[]
    },
    reducers:{
        addHelpcard:(state,actions)=>{
             state.datas = actions.payload
        }
    }
})

const helpCardstore = configureStore({
    reducer:{
        helpCard:helpCardslice.reducer
    }
})

export const helpcardActions = helpCardslice.actions

export default helpCardstore