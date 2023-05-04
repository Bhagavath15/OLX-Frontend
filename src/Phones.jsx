import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

export function Phones({ phones, setPhones }) {

    // const phones = [{
    //     "id": "1",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRNiAUsFqWmJ8RQV2avyrRpzay3D50l83gw&usqp=CAU",
    //     "brand": "Apple",
    //     "name": "iphone 13 pro",
    //     "price": "₹ 63,000",
    //     "location": "Trichy",
    //     "ownerName": "Alex",
    //     "phoneNo": "9867584973",
    //     "ram": "8gb",
    //     "storage": "256gb",
    //     "batteryCondition": "Good",
    //     "charger": "Yes"


    // }, {
    //     "id": "2",
    //     "image": "data:image/jpeg;base64,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",
    //     "brand": "Redmi",
    //     "name": "10T Pro",
    //     "price": "₹ 25,000",
    //     "location": "Coimbatore",
    //     "ownerName": "John",
    //     "phoneNo": "9542284973",
    //     "ram": "8gb",
    //     "storage": "128gb",
    //     "batteryCondition": "Good",
    //     "charger": "Yes"


    // }, {
    //     "id": "3",
    //     "image": "data:image/jpeg;base64,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",
    //     "brand": "Vivo",
    //     "name": "Y 20",
    //     "price": "₹ 15,000",
    //     "location": "Pollachi",
    //     "gear": "Manual",
    //     "ownerName": "Maxwel",
    //     "phoneNo": "7893484973",
    //     "ram": "6gb",
    //     "storage": "128gb",
    //     "batteryCondition": "Good",
    //     "charger": "No"

    // }]

    const getPhones = () => {
        fetch("http://localhost:4008/phones",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setPhones(dts))
    }
    useEffect(() => getPhones(), [])
    return (
        <div className="cars">
            <h1>Buy & Sell Used Phones</h1>
            <div className="cars-flex">
                {phones.map((ph, index, id) => <PhoneDetail phones={ph} key={index} id={id} />)}
            </div>

        </div>
    );
}

function PhoneDetail({ phones, id }) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 325 }}
            className="car-card"
            onClick={() => navigate(`/phones/${phones.id}`)}>
            <CardContent>
                <img className="car-image" src={phones.image} alt={phones.name} />
                <div>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{phones.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{phones.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{phones.location}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}


export function PhoneFeatures() {
    const { id } = useParams();
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4008/phones/${id}`)
            .then((data) => data.json())
            .then((dts) => setPhones(dts));
    }, [id]);
    return (
        <div className="bike-features">
            <div>
                <div className="bike-div">
                    <img className="bike-profile" src={phones.image} alt={phones.name} />
                </div>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Details</Typography>
                        <div className="bike-flex">
                            <div>
                                <Typography>Brand </Typography>
                            </div>
                            <div>
                                <Typography>  {phones.brand}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Description</Typography>
                        <Typography color="text.primary">{phones.brand} {phones.name}</Typography>
                        <Typography color="text.primary">Ram : {phones.ram}</Typography>
                        <Typography color="text.primary">Storage : {phones.storage}</Typography>
                        <Typography color="text.primary">Battery Condition : {phones.batteryCondition}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikePriceCard">
                    <Typography variant="h6" sx={{ fontSize: 40, m: 1 }}>{phones.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{phones.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{phones.location}</Typography>

                </Card>

                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikeOwner">
                    <Typography variant="h6" sx={{ fontSize: 30, m: 1 }}>{phones.ownerName}</Typography>
                    <Button sx={{ width: 375 }} color="primary" variant="outlined">Chat</Button>
                    <Typography sx={{ fontSize: 14, m: 1 }}><CallIcon fontSize="small" />{phones.phoneNo}</Typography>

                </Card>
            </div>
        </div>
    )

}