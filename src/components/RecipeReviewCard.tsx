import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../App.css"
import escudoIA2 from "../assets/escudoIA2.png"
import frame from "../assets/frame.png"
import circle from "../assets/play_circle_filled.png"


export default function RecipeReviewCard() {

  return (
    <>
      <section className='containerCard'>
        <Card className='backgroundCardIACurrentCourses' >
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
          <img style={{margin: "16px 196px 1% 10px"}} src={frame} alt="" />
          <img style={{margin: "16px 196px 1% 10px"}} src={circle} alt="" />
          {/* <img style={{marginRight: "186px", marginLeft: "48px", marginBottom: "31px", marginTop: "76px"}} src={circle} alt="" /> */}
          </CardContent>
        </Card >
        <br />
        <br />
        <br />
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
          </CardContent>
        </Card >
      </section>
    </>
  );
}