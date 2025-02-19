// import style from './style.module.css';

function App() {

  const func = (text) => {
    alert(text)
  }


  return (
    <button onClick={ () => { func('hello world!')} }>
      hello world
    </button>
  );
}

export default App;
