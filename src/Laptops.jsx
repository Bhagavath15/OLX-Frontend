import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

export function Laptops({ laptops, setLaptops }) {

    // const phones = [{
    //     "id": "1",
    //     "image": "data:image/jpeg;base64,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",
    //     "brand": "Apple",
    //     "name": "Mac book pro",
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
    //     "image": "data:image/jpeg;base64,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pX0dr1NbK6hlIP8A5ECizOys1O5vAZeksK8/zVseAP8AKceYnO1dJs2dX1VzvnHV9SpOe7eVses1+m2hfssmnVLZdphwqvUb7oOxXHaPHn/iwvSfQMd4Xp6q4b8JB0Vt961tZaadn1Kpd2sIttCjmdxDgerHymj6PdI9na2yxaFu1N1I3xZrFyCM4366h8K8cdgPGUOkGtp2hRZpqmvQWBcXGqzqsq4bdIHxYOOeJW6O9B2prZUNjm3d620Bq13F4itRz3c8STz4cABxoqbS2hqdXXu6zUNvWaREahBvlbxq+s40rwT92qjJxzEnp0Vtrs1dQqD26m3esxdYPpGBYoHyAYUDiG7eM7LZXQ9UA+FVHljszOm0Oxq0xhd7iOfAcsnh7QOE2b0RLsHs3rH+25LkeAJ5DynWaDo9WmMgE9w/qxz/AFynRU6UDGezd+FR2g58uf4SzXTjkAPvPvAo0aEKOACjjxPP5vyH3y2lA7s8+J5c88pYCATKBhud/H8JkBPsQEREBERAREQEREBERAREQEREBERAREQEREBERAREQExdARgzKIGk2jsRLc5HOaH/ANE172Qqj0E7mfMQOc0fRitOYz4TZ6bQBSGxjHKbDEYgQCgd2c55+Ml3P1yEziB8An2IgIiICIiAiIgIiICIiAiIgIiICIiAiBEBERAREQEREBERAREQEREBE+T7AREQEREBERAREQEREBERAREQEREBERAREQERED//2Q==",
    //     "brand": "HP",
    //     "name": "Note book",
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
    //     "brand": "Intel",
    //     "name": "Elite Book",
    //     "price": "₹ 23,000",
    //     "location": "Pollachi",
    //     "gear": "Manual",
    //     "ownerName": "Maxwel",
    //     "phoneNo": "7893484973",
    //     "ram": "6gb",
    //     "storage": "128gb",
    //     "batteryCondition": "Good",
    //     "charger": "No"

    // }]

    const getLaptops = () => {
        fetch("http://localhost:4008/laptops",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setLaptops(dts))
    }
    useEffect(() => getLaptops(), [])
    return (
        <div className="cars">
            <h1>Buy & Sell Used Laptops</h1>
            <div className="cars-flex">
                {laptops.map((lap, index, id) => <LaptopDetail laptops={lap} key={index} id={id} />)}
            </div>

        </div>
    );
}

function LaptopDetail({ laptops, id }) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 325 }}
            className="car-card"
            onClick={() => navigate(`/laptops/${laptops.id}`)}>
            <CardContent>
                <img className="car-image" src={laptops.image} alt={laptops.name} />
                <div>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{laptops.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{laptops.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{laptops.location}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}


export function LaptopFeatures() {
    const { id } = useParams();
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4008/laptops/${id}`)
            .then((data) => data.json())
            .then((dts) => setLaptops(dts));
    }, [id]);
    return (
        <div className="bike-features">
            <div>
                <div className="bike-div">
                    <img className="bike-profile" src={laptops.image} alt={laptops.name} />
                </div>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Details</Typography>
                        <div className="bike-flex">
                            <div>
                                <Typography>Brand </Typography>
                            </div>
                            <div>
                                <Typography>  {laptops.brand}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ Width: 770, m: 2 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontSize: 25 }}>Description</Typography>
                        <Typography color="text.primary">{laptops.brand} {laptops.name}</Typography>
                        <Typography color="text.primary">Ram : {laptops.ram}</Typography>
                        <Typography color="text.primary">Processor : {laptops.processor}</Typography>
                        <Typography color="text.primary">Storage : {laptops.storage}</Typography>
                        <Typography color="text.primary">Battery Condition : {laptops.batteryCondition}</Typography>
                        <Typography color="text.primary">Charger : {laptops.charger}</Typography>

                    </CardContent>
                </Card>
            </div>
            <div>
                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikePriceCard">
                    <Typography variant="h6" sx={{ fontSize: 40, m: 1 }}>{laptops.price}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{laptops.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{laptops.location}</Typography>

                </Card>

                <Card
                    sx={{ minWidth: 375, m: 2 }}
                    className="bikeOwner">
                    <Typography variant="h6" sx={{ fontSize: 30, m: 1 }}>{laptops.ownerName}</Typography>
                    <Button sx={{ width: 375 }} color="primary" variant="outlined">Chat</Button>
                    <Typography sx={{ fontSize: 14, m: 1 }}><CallIcon fontSize="small" />{laptops.phoneNo}</Typography>

                </Card>
            </div>
        </div>
    )

}