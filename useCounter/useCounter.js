
import {useState} from 'react';

export const useCounter = (initialState=10) => {

    const [contador, setContador] = useState(initialState);
    
    const reset = () => { setContador(initialState);}
    const agrega = () => { setContador(contador+1);}
    const quita = () => { setContador(contador-1);}

  return {contador, agrega, quita, reset}

  
}
