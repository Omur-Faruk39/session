import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Edite() {

  const [value, setValue] = useState('');

  // useEffect(() => {
  //   document.querySelector('input').value;
  // }, [])

  const func = (e) => {
    setValue(e.target.value)
  }


  return(
    <div>
      <input className="input" type="text" value={value} onChange={(e) => func(e)}/>
    </div>
  );
}

export default Edite;