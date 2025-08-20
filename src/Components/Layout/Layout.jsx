 import { LayoutWrapper } from './layoutStyled'
import Aurora from '../React Bits/AuroraBg/Aurora'
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  
  const { color } = useSelector(state => state.Background);

  return (
    <LayoutWrapper>
    {
  color === 'dark' &&
  <Aurora
    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
    blend={5}
    amplitude={1.0}
    speed={0.8}
  />
}
      {children}
    </LayoutWrapper>


  )
}

export default Layout
