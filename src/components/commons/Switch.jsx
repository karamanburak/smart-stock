import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector,useDispatch } from 'react-redux';
import {toggleDarkMode} from '../../features/darkModeSlice'


const Switch = () => {
    const { mode } = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

    return (
    <div style={{marginBottom:".5rem"}}> 
        {mode} 
        <IconButton sx={{ backgroundColor: mode ? "white" : "primary.main", color: mode ? "#2b3a4c" : "white", marginLeft:".5rem"}} onClick={()=>dispatch(toggleDarkMode(!mode))} color="inherit">
            {mode === '' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
  </div>
  );
};

export default Switch;
