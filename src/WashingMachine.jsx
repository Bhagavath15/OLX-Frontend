import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

export function WashingMachine({ washingMachines, setWashingMachines }) {

    // const phones = [{
    //     "id": "1",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU_sBoX-RsuaCpNNeqxXH9TeckOfbbXwTVA&usqp=CAU",
    //     "brand": "Apple",
    //     "name": "7.5 kg",
    //     "price": "₹ 7,800",
    //     "location": "Trichy",
    //     "ownerName": "Alex",
    //     "phoneNo": "9867584973",
    //     "door": "Top door",
    //     "condition": "Good",
    //     "mode": "Semi Automatic"


    // }, {
    //     "id": "2",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-cBYJvw5JGLALhew0SAfJLfpKdYXK-9dEg&usqp=CAU",
    //     "brand": "LG",
    //     "name": "7.5 kg",
    //     "price": "₹ 6,700",
    //     "location": "Coimbatore",
    //     "ownerName": "John",
    //     "phoneNo": "9542284973",
    //     "door": "Top door",
    //     "condition": "Good",
    //     "mode": "Automatic"



    // }, {
    //     "id": "3",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOupDr7dwntr8tu7JlvVFu9QLEFH1iW7Jfw&usqp=CAU",
    //     "brand": "LG",
    //     "name": "7 kg",
    //     "price": "₹ 5,000",
    //     "location": "Pollachi",
    //     "gear": "Manual",
    //     "ownerName": "Maxwel",
    //     "phoneNo": "7893484973",
    //     "door": "Top door",
    //     "condition": "Good",
    //     "mode": "Automatic"

    // }]

    const getWashingMachines = () => {
        fetch("https://olx-backend-seven.vercel.app/washingMachines",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setWashingMachines(dts))
    }
    useEffect(() => getWashingMachines(), [])
    return (
        <div className="cars">
            <h1>Buy & Sell Used Washing Machines</h1>
            <div className="cars-flex">
                {washingMachines.map((wsh, index, id) => <WashingMachineDetail washingMachines={wsh} key={index} id={id} />)}
            </div>

        </div>
    );
}

function WashingMachineDetail({ washingMachines, id }) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 325 }}
            className="car-card"
            onClick={() => navigate(`/washingMachines/${washingMachines.id}`)}>
            <CardContent>
                <img className="car-image" src={washingMachines.image} alt={washingMachines.name} />
                <div>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{washingMachines.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{washingMachines.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{washingMachines.location}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}


export function WashingMachineFeatures() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [washingMachines, setWashingMachines] = useState([])
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetch(`https://olx-backend-seven.vercel.app/washingMachines/${id}`, {
            headers: {
                'x-auth-token': token,
            },
        })
            .then((data) => data.json())
            .then((dts) => setWashingMachines(dts));
    }, [id]);
    return (
        <div className="bike-features">
            <div>
                <div className="bike-div">
                    <img className="bike-profile" src={washingMachines.image} alt={washingMachines.name} />
                </div>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Details</Typography>
                        <div className="bike-flex">
                            <div>
                                <Typography>Brand </Typography>
                            </div>
                            <div>
                                <Typography>  {washingMachines.brand}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Description</Typography>
                        <Typography color="text.primary">{washingMachines.brand} {washingMachines.name}</Typography>
                        <Typography color="text.primary">Door : {washingMachines.door}</Typography>
                        <Typography color="text.primary">Condition : {washingMachines.condition}</Typography>
                        <Typography color="text.primary">Mode : {washingMachines.mode}</Typography>

                    </CardContent>
                </Card>
            </div>
            <div>
                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikePriceCard">
                    <Typography variant="h6" sx={{ fontSize: 40, m: 1 }}>{washingMachines.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{washingMachines.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{washingMachines.location}</Typography>

                </Card>

                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikeOwner">
                    <Typography variant="h6" sx={{ fontSize: 30, m: 1 }}>{washingMachines.ownerName}</Typography>
                    <Button sx={{ width: 375 }} color="primary" variant="outlined" onClick={() => navigate("/chat")}>Chat</Button>
                    <Typography sx={{ fontSize: 14, m: 1 }}><CallIcon fontSize="small" />{washingMachines.phoneNo}</Typography>

                </Card>
            </div>
        </div>
    )

}