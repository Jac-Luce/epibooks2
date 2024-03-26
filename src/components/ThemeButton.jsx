import React from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../contextProvider/ThemeContextProvider';
import { useContext } from 'react';
import { IoSunny } from "react-icons/io5";

export default function ThemeButton() {

    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <Button className='mx-2' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <IoSunny />
    </Button>
  )
}
