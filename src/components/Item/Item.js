import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({excur}) => {
    return(
        <Card className="p-2 m-4" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={excur.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {excur.places}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {excur.detail}
        </Typography>
      </CardContent>
      <CardActions>
      <Button >Valor ${excur.price}</Button>
      <Button variant="contained">Comprar</Button>
    </CardActions>
    </Card>
    )
}

export default Item