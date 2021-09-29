import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    marginLeft: 60,
    marginRight: 30,
    marginBotton: 30
  }
}))

type ItemData = {
  data: {
    status: string;
    message: ItemArray[];
  }
};

type ItemArray = {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  quantity: string;
};

const defaultItemData = {
  "data": {
    "status": "success",
    "message": [{
      "_id": "",
      "name": "Breakfast",
      "description": "Item description",
      "image_url": "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "quantity": "1"
    }]
  }
};

const getItems = async (): Promise<ItemData> => {
  const resp = await axios
    .get('http://localhost:4000/item', {})
  console.log(resp);
  return resp;
}

export default function MediaCard() {
  const classes = useStyles();
  const [itemData, setItemData] = useState<ItemData>(defaultItemData);
  useEffect(() => {
    const fetchItemData = async (): Promise<void> => {
      try {
        const items = await getItems();
        console.log(items);
        setItemData(items);
      }
      catch (exception) {
        console.log(exception);
      }
    }
    fetchItemData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
      >
        {itemData.data.message.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={itemData.data.message.indexOf(item)}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image_url}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                {item.name} - {item.description}
              </CardContent>
              <CardActions>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     text: 'Item',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     text: 'Item description',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     text: 'Item description',
//   },
// ];

