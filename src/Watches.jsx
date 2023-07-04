import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

export function Watches({ watches, setWatches }) {
    // const watches = [{
    //     "id": "1",
    //     "image": "data:image/jpeg;base64,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",
    //     "brand": "Boat",
    //     "name": "Wave call",
    //     "price": "₹ 1,200",
    //     "location": "Trichy",
    //     "ownerName": "Alex",
    //     "phoneNo": "9867584973",
    //     "type": "tablet"
    // }, {
    //     "id": "2",
    //     "image": "https://cdn1.smartprix.com/rx-iS2aoUImI-w1200-h1200/S2aoUImI.jpg",
    //     "brand": "Fire Boltt",
    //     "name": "Ring 3",
    //     "price": "₹ 1,500",
    //     "location": "Pollachi",
    //     "ownerName": "Peter",
    //     "phoneNo": "9867584973",
    //     "type": "tablet"
    // }, {
    //     "id": "3",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx_uzb3MZpYw5GkotmWaq_2Ta-uvJNRZHeo8PyhIJNFFAwSBb7lHLeunC8JVO64L6aJ8&usqp=CAU",
    //     "brand": "Apple",
    //     "name": "Series 7",
    //     "price": "₹ 17,200",
    //     "location": "Chennai",
    //     "ownerName": "John",
    //     "phoneNo": "9867584973",
    //     "type": "tablet"
    // }]
    const getWatches = () => {
        fetch("https://olx-backend-seven.vercel.app/watches",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setWatches(dts))
    }
    useEffect(() => getWatches(), [])
    return (
        <div className="cars">
            <h1>Buy & Sell Used Watches</h1>
            <div className="cars-flex">
                {watches.map((wth, index, id) => <WatchDetail watches={wth} key={index} id={id} />)}
            </div>
        </div>
    );
}

function WatchDetail({ watches, id }) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 325 }}
            className="car-card"
            onClick={() => navigate(`/watches/${watches.id}`)}>
            <CardContent>
                <img className="car-image" src={watches.image} alt={watches.name} />
                <div>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{watches.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{watches.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{watches.location}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}


export function WatchFeatures() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [watches, setWatches] = useState([])
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetch(`https://olx-backend-seven.vercel.app/watches/${id}`, {
            headers: {
                'x-auth-token': token,
            },
        })
            .then((data) => data.json())
            .then((dts) => setWatches(dts));
    }, [id]);
    return (
        <div className="bike-features">
            <div>
                <div className="bike-div">
                    <img className="bike-profile" src={watches.image} alt={watches.name} />
                </div>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Details</Typography>
                        <div className="bike-flex">
                            <div>
                                <Typography>Brand </Typography>
                            </div>
                            <div>
                                <Typography>  {watches.brand}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Description</Typography>
                        <Typography color="text.primary">Type : {watches.type}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikePriceCard">
                    <Typography variant="h6" sx={{ fontSize: 40, m: 1 }}>{watches.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{watches.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{watches.location}</Typography>

                </Card>

                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikeOwner">
                    <Typography variant="h6" sx={{ fontSize: 30, m: 1 }}>{watches.ownerName}</Typography>
                    <Button sx={{ width: 375 }} color="primary" variant="outlined" onClick={() => navigate("/chat")}>Chat</Button>
                    <Typography sx={{ fontSize: 14, m: 1 }}><CallIcon fontSize="small" />{watches.phoneNo}</Typography>

                </Card>
            </div>
        </div>
    )

}
