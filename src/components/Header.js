import { useContext } from "react";
import  {ThemeContext } from '../store/ThemeContextProvider'
export default function Header({children}) {
    const {toggleTheme} = useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </header>
  );
}
