import React, {useEffect} from "react";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {

  const { getStockData } = useStockCall()

  useEffect(() => {
    getStockData("firms")
  }, [])

  return (
    <div>Firms</div>
  )
}

export default Firms