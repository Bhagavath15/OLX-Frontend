import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

export function Cars({ cars, setCars }) {

    // const cars = [{
    //     "id": "1",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2fbrqMvy-hq7ZJWe1pGq9w5wMPDwHZQT6A&usqp=CAU",
    //     "brand": "Maruthi suzuki",
    //     "name": "Swift Dzire",
    //     "price": "₹ 7,00,000",
    //     "model": "2018",
    //     "kmDriven": "80,000 km",
    //     "location": "Trichy",
    //     "type": "Petrol",
    //     "owner": "1st owner",
    //     "gear": "Manual",
    //     "ownerName": "Alex",
    //     "phoneNo": "9867584973",
    //     "ABS": "Yes",
    //     "Accidental": "No",
    //     "AdjustableMirror": "Power",
    //     "AdjustableSteering": "Yes",
    //     "noOfAirbags": "2",
    //     "batteryCondition": "New",
    //     "bluetooth": "Yes",
    //     "color": "brown",
    //     "insuranceType": "Comprehensive",
    //     "parkingSensor": "Yes",
    //     "rearCamera": "Yes",
    //     "registration": "TN",
    //     "tyreCondition": "New",
    //     "USB": "Yes"

    // }, {
    //     "id": "2",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToB6DogbJoR7AaRQ6wZYN5J9PXxV51-zYLPA&usqp=CAU",
    //     "brand": "Mahindra",
    //     "name": "XUV 500",
    //     "price": "₹ 10,75,000",
    //     "model": "2017",
    //     "kmDriven": "75,600 km",
    //     "location": "Coimbatore",
    //     "type": "Diesel",
    //     "owner": "2nd owner",
    //     "gear": "Manual",
    //     "ownerName": "John",
    //     "phoneNo": "9542284973",
    //     "ABS": "Yes",
    //     "Accidental": "No",
    //     "AdjustableMirror": "Power",
    //     "AdjustableSteering": "Yes",
    //     "noOfAirbags": "4",
    //     "batteryCondition": "New",
    //     "bluetooth": "Yes",
    //     "color": "Black",
    //     "insuranceType": "Comprehensive",
    //     "parkingSensor": "Yes",
    //     "rearCamera": "Yes",
    //     "registration": "TN",
    //     "tyreCondition": "New",
    //     "USB": "Yes"

    // }, {
    //     "id": "3",
    //     "image": "data:image/jpeg;base64,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",
    //     "brand": "Volkswagen",
    //     "name": "Polo",
    //     "price": "₹ 8,65,000",
    //     "model": "2017",
    //     "kmDriven": "105,000 km",
    //     "location": "Pollachi",
    //     "type": "Diesel",
    //     "owner": "1st owner",
    //     "gear": "Manual",
    //     "ownerName": "Maxwel",
    //     "phoneNo": "7893484973",
    //     "ABS": "Yes",
    //     "Accidental": "No",
    //     "AdjustableMirror": "Power",
    //     "AdjustableSteering": "Yes",
    //     "noOfAirbags": "4",
    //     "batteryCondition": "New",
    //     "bluetooth": "Yes",
    //     "color": "brown",
    //     "insuranceType": "Comprehensive",
    //     "parkingSensor": "Yes",
    //     "rearCamera": "Yes",
    //     "registration": "TN",
    //     "tyreCondition": "New",
    //     "USB": "Yes"

    // }]
    const getCars = () => {
        fetch("http://localhost:4008/cars",
            { method: "GET" })
            .then((data) => data.json())
            .then((dts) => setCars(dts))
    }
    useEffect(() => getCars(), [])
    return (
        <div className="cars">
            <h1>Buy & Sell Used Cars</h1>
            <div className="cars-flex">
                {cars.map((crs, index, id) => <CarDetail cars={crs} key={index} id={id} />)}
            </div>

        </div>
    );
}

function CarDetail({ cars, id }) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 325 }}
            className="car-card"
            onClick={() => navigate(`/cars/${cars.id}`)}>
            <CardContent>
                <img className="car-image" src={cars.image} alt={cars.name} />
                <div>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{cars.price}</Typography>
                    <Typography color="text.primary" sx={{ fontSize: 14 }}>{cars.model} - {cars.kmDriven}</Typography>
                    <Typography variant="h6" sx={{ fontSize: 16 }}>{cars.name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{cars.location}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export function CarFeatures() {
    const { id } = useParams();
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4008/cars/${id}`)
            .then((data) => data.json())
            .then((dts) => setCars(dts));
    }, [id]);
    return (
        <div className="car-features">
            <div className="car-div">
                <img className="car-profile" src={cars.image} alt={cars.name} />
            </div>
            <div className="car-description">
                <div>
                    <div className="car-name">
                        <Card className="carNameCard" sx={{ m: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontSize: 40 }}>{cars.brand} {cars.name}</Typography>
                                <div className="carText">
                                    <Typography color="text.primary" sx={{ fontSize: 14 }}> <img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/petrol_1x.svg" />{cars.type}</Typography >
                                    <Typography color="text.primary" sx={{ fontSize: 14 }}>| <img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/mileage_1x.svg" />{cars.kmDriven} |</Typography >
                                    <Typography color="text.primary" sx={{ fontSize: 14 }}><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/transmission_1x.svg" /> {cars.gear}</Typography >
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="overview">
                        <Card className="carNameCard" sx={{ m: 2 }}>

                            <CardContent>
                                <Typography variant="h6" color="text.primary" sx={{ fontSize: 30 }}>Overview</Typography>
                                <div className="carText">
                                    <Typography color="text.primary" sx={{ fontSize: 14 }}> <img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/first_owner_1x.svg" /> {cars.owner}</Typography >
                                    <Typography color="text.primary" sx={{ fontSize: 14 }}>| <img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/location_1x.svg" />{cars.location} |</Typography >
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="description">
                        <Card className="carNameCard" sx={{ m: 2 }}>
                            <CardContent>
                                <Typography variant="h6" color="text.primary" sx={{ fontSize: 30 }}>Description</Typography>
                                <div className="carcardtext">
                                    <Typography color="text.primary">Full Company Maintain</Typography>
                                    <Typography color="text.primary">Additional vehicle information</Typography>
                                    <Typography color="text.primary">ABS : {cars.ABS}</Typography>
                                    <Typography color="text.primary">Accidental : {cars.Accidental}</Typography>
                                    <Typography color="text.primary">Adjustable External Mirror : {cars.AdjustableMirror}</Typography>
                                    <Typography color="text.primary">Adjustable Steering : {cars.AdjustableSteering}</Typography>
                                    <Typography color="text.primary">Number of Airbags : {cars.noOfAirbags}</Typography>
                                    <Typography color="text.primary">Battery Condition {cars.batteryCondition}</Typography>
                                    <Typography color="text.primary">Bluetooth : {cars.bluetooth}</Typography>
                                    <Typography color="text.primary">Color : {cars.color}</Typography>
                                    <Typography color="text.primary">Insurance Type : {cars.insuranceType}</Typography>
                                    <Typography color="text.primary">Parking Sensors : {cars.parkingSensor}</Typography>
                                    <Typography color="text.primary">Rear Parking Camera : {cars.rearCamera}</Typography>
                                    <Typography color="text.primary">Registration Place : {cars.registration}</Typography>
                                    <Typography color="text.primary">Tyre Condition : {cars.tyreCondition}</Typography>
                                    <Typography color="text.primary">USB Compatibility : {cars.USB}</Typography>

                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <div className="car-price">
                        <Card className="carPriceCard" sx={{ m: 2 }}>
                            <Typography variant="h6" color="text.primary" sx={{ fontSize: 30, m: 2 }}>{cars.price}</Typography>
                            <Button variant="outlined" color="primary" sx={{ width: 300, m: 3 }}>Chat</Button>
                        </Card>
                    </div>
                    <div className="car-price">
                        <Card className="carPriceCard" sx={{ m: 2 }}>
                            <Typography variant="h6" color="text.primary" sx={{ fontSize: 25, m: 2 }}>{cars.ownerName}</Typography>
                            <Typography color="text.primary" sx={{ fontSize: 15, m: 2 }}><CallIcon />{cars.phoneNo}</Typography>

                        </Card>
                    </div>
                </div>

            </div>

        </div>
    );
}