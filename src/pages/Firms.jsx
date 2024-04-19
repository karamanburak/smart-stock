import React, {useEffect} from "react";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {

  const { getFirms } = useStockCall()

  useEffect(() => {
    getFirms()
  }, [])

  return (
    <div>Firms</div>
  )
}

export default Firms