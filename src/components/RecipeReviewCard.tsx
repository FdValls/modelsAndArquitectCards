import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../App.css"
import escudoIA2 from "../assets/escudoIA2.png"
import desafios from "../assets/desafios.png"
import clasesEnVivo from "../assets/clasesEnVivo.png"
import adquirir from "../assets/adquirir.png"
import CircularWithValueLabel from './utils/CircularProgressWithLabel';
import axios from "axios";
import { useEffect, useState } from 'react';


export default function RecipeReviewCard() {
  const [data, setData] = useState<ApiResponse>({ data: [] });

  useEffect(() => {
    const delay = setTimeout(() => {
      async function getUser() {
        try {
          const response = await axios.get("https://reqres.in/api/users");
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      getUser();
    }, 1000);

    // Limpia el temporizador si el componente se desmonta antes de que se complete la solicitud
    return () => clearTimeout(delay);
  }, []);

  function test() {
    console.log(data.data[0])
    
  }

  return (
    <>
      <section className='containerCard'>
        <Card className='backgroundCardIACurrentCourses' >
          <div className="centeredContent">
            Inteligencia Artificial {" "}
            <CircularWithValueLabel />
          </div>

          <div style={{ background: "black" }}>
            <img style={{ width: "100px" }} src={escudoIA2} alt="" />
          </div>
          <CardContent>
            <Typography textAlign="start" variant='h2'>
              Comision: 134098134098
              <br />
              Del 09-04-2023 al 12-12-2024
              <br />
              Días: Martes 19:00Hs
              <br />
              Info: www.inove.com.ar/ia
            </Typography>
            <div className='imageContainer'>
              <img className='fixedSizeImage' src={desafios} alt="" />
              <img className='fixedSizeImage' src={clasesEnVivo} alt="" />
            </div>
          </CardContent>
        </Card >
        <Card className='backgroundCardCoursesRecommended' >
          <CardHeader
            className='titleCard'
            title="Inteligencia Artificial"
          />
          <div style={{ background: "black" }}>
            <img style={{ width: "100px" }} src={escudoIA2} alt="" />
          </div>
          <CardContent>
            <Typography textAlign="start" variant='h2'>
              Comision: 134098134098
              <br />
              Del 09-04-2023 al 12-12-2024
              <br />
              Días: Martes 19:00Hs
              <br />
              Info: www.inove.com.ar/ia
            </Typography>
            <div className='imageContainer'>
              <img className='fixedSizeImage' src={adquirir} alt="" />
            </div>
          </CardContent>
        </Card >
        <button onClick={test}>Haz clic para probar</button>

      </section>
    </>
  );
}