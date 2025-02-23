import { configureStore } from "@reduxjs/toolkit";
import studentDataReducer from "../features/studentData/studentDataSlice";

const store = configureStore({
  reducer: {
    studentData: studentDataReducer, 
  },
});

export default store;
