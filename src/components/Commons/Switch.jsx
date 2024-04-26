import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector,useDispatch } from 'react-redux';
import {toggleDarkMode} from '../../features/darkModeSlice'
import { darkMode, lightMode } from '../../styles/globalStyle';


const Switch = () => {
    const { mode } = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

    return (
    <div style={{marginLeft:".5rem"}}> 
        {mode} 
        <IconButton 
        sx={mode ? lightMode : darkMode} 
        onClick={()=>dispatch(toggleDarkMode(!mode))}>
            {mode === '' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
  </div>
  );
};

export default Switch;
