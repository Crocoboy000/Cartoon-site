import { createContext, useState } from "react";
import CartoonsData from "../data/CartoonsData.json";
import CharactersData from "../data/CharactersData.json";

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
function MyProvider({ children }) {
  const [characters, setCharacters] = useState(CharactersData.characters);

  const [cartoons, setCartoon] = useState(CartoonsData.cartoons);
  const [display, setDisplay] = useState([]);
  return (
    <MyContext.Provider
      value={{
        characters,
        setCharacters,
        cartoons,
        setCartoon,
        display,
        setDisplay,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };
