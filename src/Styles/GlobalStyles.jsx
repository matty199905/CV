 
import { useSelector } from 'react-redux'
import { GlobalStyles } from './globalStyles';



const GlobalStylesComponent = () => {

  const {color}  = useSelector(state => state.Background)

  return <GlobalStyles bgcolor={color} />;
}

export default GlobalStylesComponent