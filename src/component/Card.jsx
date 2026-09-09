import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function MediaCard() {
     const [api, setApi] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/questions")
            .then((response) => {
                setApi(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
         
    const vistHandlerclick = (id) => {
       console.log('Clicked on:', id);
    }

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {/* 2. استفاده صحیح از map با return */}
            {api.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 245 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.image} // استفاده از داده واقعی
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => vistHandlerclick(item.id)} size="small">
                            visit
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}