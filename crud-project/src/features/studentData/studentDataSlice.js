import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 1,
  name: 'sakib',
  email: 'sakib@gmail.com',
  phone: 2938257,
  degree: 'tokai',
  city: 'dhaka'
}, {
  id: 2,
  name: 'tamim',
  email: 'tamim@gmail.com',
  degree: 'fixing',
  phone: 29382543,
  city: 'khulna'
}];

const studentDataSlice = createSlice({
  name: 'studentDataSlice',
  initialState,
  reducers: {

    add: (state, action) => {
      return [...state, action.payload];
    },
    

    delete: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    }
    
    
  }
})

export default studentDataSlice.reducer;

export const { add, delete: deleteStudent } = studentDataSlice.actions;


