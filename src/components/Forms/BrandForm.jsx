import Box from "@mui/material/Box";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { darkModeBtn, flexColumn, lightMode } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import { brandFields } from "../../helper/formFields";
import { useSelector } from "react-redux";


export default function BrandForm({ handleClose, initialState }) {
  const { mode } = useSelector(state => state.darkMode)
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      //* id varsa edit işlemi
      putStockData("brands", info);
    } else {
      //* id yoksa create işlemi
      postStockData("brands", info);
    }
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
      {brandFields.map((item) => (
        <MyTextField
          onChange={handleChange}
          key={item.id}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        size="large"
        title={info._id ? "Update Brand" : "Submit Brand"}
        sx={mode ? lightMode : darkModeBtn}
      />
    </Box>
  );
}
