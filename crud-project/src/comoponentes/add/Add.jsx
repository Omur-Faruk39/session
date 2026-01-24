import { useState } from "react";
import { add } from "../../features/studentData/studentDataSlice";
import { useDispatch, useSelector } from "react-redux";

function Add() {
  const [value, setValue] = useState({
    id: 0,
    name: "",
    city: "",
    phone: "",
    degree: ''
  });
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentData)


  const inputHandle = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      id: studentData.length + 1,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(add(value))
    setValue({
     id: 0,
    name: "",
    city: "",
    phone: "",
    degree: ''
    })

  }


  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={value.name}
          onChange={inputHandle}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={value.city}
          onChange={inputHandle}
        />
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone"
          value={value.phone}
          onChange={inputHandle}
        />
        <input
          type="text"
          name="degree"
          placeholder="Enter degree"
          value={value.degree}
          onChange={inputHandle}
        />
        <input type="submit" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
}

export default Add;
