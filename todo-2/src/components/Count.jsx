import { useState } from "react";

function Count(props) {
  const {count, setCount} = props;

  return (
    <button onClick={() => setCount((pre) => pre + 1)}>
      this button was clicked time{count}
    </button>
  );
}

export default Count;