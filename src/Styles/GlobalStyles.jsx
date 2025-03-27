import React from 'react'
import { useSelector } from 'react-redux'
import { GlobalStyles } from './globalStyles';



const GlobalStylesComponent = () => {

  const color  = useSelector(state => state.background?.color)

  return <GlobalStyles color={color} />;
}

export default GlobalStylesComponent