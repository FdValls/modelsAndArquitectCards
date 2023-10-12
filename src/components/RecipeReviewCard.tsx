import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../App.css"
import escudoIA2 from "../assets/escudoIA2.png"

export default function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        title="Inteligencia Artificial"
      />
      <div style={{ background: "black" }}>
        <img style={{ width: "100px" }} src={escudoIA2} alt="" />
      </div>
      <CardContent>
        <Typography textAlign="start" variant="body2" color="text.secondary">
          Comision: 134098134098
          <br />
          Del 09-04-2023 al 12-12-2024
          <br />
          Días: Martes 19:00Hs
          <br />
          Info: www.inove.com.ar/ia
        </Typography>
      </CardContent>
    </Card>
  );
}