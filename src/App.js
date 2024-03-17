import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { Container } from "@mui/material";
function App() {

  const [todo, setTodo] = useState([
    
  ]);
  return (
    <Container className="App">
        <Header />
        <TodoAdd todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
