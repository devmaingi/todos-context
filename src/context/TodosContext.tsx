import {createContext,  useEffect, useState} from 'react';

const data = [
  {
    id: "1",
    text: "Design landing page",
    completed: true,
  },
  {
    id: "2",
    text: "Set up CI/CD pipeline",
    completed: true,
  },
  {
    id: "3",
    text: "Fix login bug",
    completed: false,
  },
  {
    id: "4",
    text: "Write unit tests",
    completed: false,
  },
  {
    id: "5",
    text: "Deploy to staging",
    completed: false,
  },
];


export const TodosContext = createContext(null);

interface TodosProviderProps {
    children: React.ReactNode;
}

export function TodosProvider({children}: TodosProviderProps) {
    // State to hold the list of todos

    const [todos, setTodos] = useState(data);

    // Actions to manipulate todos
    const addTodos = () => {};
    const deleteTodos = () => {};
    const toggleTodos = () => {};
    const editTodos = () => {};
    const clearCompleted = () => {};

    return (
        <TodosContext.Provider value={{todos, addTodos, deleteTodos, toggleTodos, editTodos, clearCompleted}}>
            {children}  
        </TodosContext.Provider>
    );
}

