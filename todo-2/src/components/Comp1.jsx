import Comp2 from "./Comp2";

function Comp1({total}) {

  return (
    <div>
      <Comp2 total={total}/>
    </div>
  );
}

export default Comp1;