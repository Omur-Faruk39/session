import { useState } from 'react';
import Count from './components/Count'
import Comp1 from './components/Comp1';
import Total from './components/Total';
let total = 0;
function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  total = count1 + count2;



  return(
    <div>
      <Total />


      <Count count={count1} setCount={setCount1} />
      <Count count={count2} setCount={setCount2} />

      {/* {Count({
        count:count,
        setCount:setCount
      })} */}
      {/* <Count /> */}
    </div>
  );
}



export default App;

export  {total as total};