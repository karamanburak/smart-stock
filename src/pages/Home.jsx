import Container from "@mui/material/Container";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";
import PageHeader from "../components/Commonss/PageHeader";
import { useEffect } from 'react';
import useStockCall from "../hooks/useStockCall";
import loadingGif from "../assets/loading.gif";
import { useSelector } from "react-redux";


const Home = () => {
  const { getPurcSales } = useStockCall();
  const {loading} = useSelector(state=> state.stock)
useEffect(()=>{
  getPurcSales()
  console.log(getPurcSales());
},[])



  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Dashboard" />
      {
        loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (
         <>
      <KpiCards/> 
      <Charts/>
         </>
        )
      }
      </Container>
  )
};

export default Home;
