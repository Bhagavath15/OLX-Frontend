import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';


export function AddCar() {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            id: "",
            image: "",
            brand: "",
            name: "",
            price: "",
            model: "",
            kmDriven: "",
            location: "",
            type: "",
            owner: "",
            gear: "",
            ownerName: "",
            phoneNo: "",
            ABS: "",
            Accidental: "",
            AdjustableMirror: "",
            AdjustableSteering: "",
            noOfAirbags: "",
            batteryCondition: "",
            bluetooth: "",
            color: "",
            insuranceType: "",
            parkingSensor: "",
            rearCamera: "",
            registration: "",
            tyreCondition: "",
            USB: ""
        },
        // validationSchema: formValidationSchema,
        onSubmit: (newdata) => {
            console.log("form value", newdata)
            addData(newdata)
            navigate("/dashboard/cars")
            console.log("clicked")
        }
    });
    const addData = (newdata) => {
        fetch("http://olx-backend-seven.vercel.app/cars",
            {
                method: "POST",
                body: JSON.stringify(newdata),
                headers: {
                    "content-type": "application/json"
                }
            });

    };
    return (
        <div className="add-car">
            <h2>POST YOUR AD</h2>
            <div className="add-content">
                <h3>SELECTED CATEGORY <label>car</label></h3>
            </div>
            <div className="add-carcontent">
                <div>
                    <Typography variant="h4">Include some details</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="add-carform">
                        <div className="add-carflex">
                            <Typography >Id</Typography>
                            <TextField
                                name="id"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.id}
                                label="id" size="small"
                                required></TextField>
                            <Typography >Car Image</Typography>
                            <TextField
                                name="image"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.image}
                                label="url" size="small" required></TextField>
                            <Typography>Brand</Typography>
                            <TextField
                                name="brand"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.brand}
                                label="Brand" size="small" required></TextField>
                            <Typography>Car Name</Typography>
                            <TextField
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                label="Car name" size="small" required></TextField>
                            <Typography>Price</Typography>
                            <TextField
                                name="price"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.price}
                                label="Price" size="small" required></TextField>
                            <Typography>Year</Typography>
                            <TextField
                                name="model"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.model}
                                label="Model" size="small" required></TextField>
                            <Typography>KM Driven</Typography>
                            <TextField
                                name="kmDriven"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.kmDriven}
                                label="km Driven(km)" size="small" required></TextField>

                            <Typography>Location</Typography>
                            <TextField
                                name="location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                label="location" size="small" required></TextField>

                            <Typography>Fuel</Typography>
                            <TextField
                                name="type"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.type}
                                label="Fuel type" size="small" required></TextField>
                            <Typography>Owner Name</Typography>
                            <TextField
                                name="ownerName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ownerName}
                                label="Owner Name" size="small" required></TextField>

                            <Typography>Transmission</Typography>
                            <TextField
                                name="gear"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gear}
                                label="Gear Type" size="small" required></TextField>
                            <Typography>Owners</Typography>
                            <TextField
                                name="owner"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.owner}
                                label="No.of.owners" size="small" required></TextField>
                            <Typography>Phone Number</Typography>
                            <TextField
                                name="phoneNo"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phoneNo}
                                label="contact" size="small" required></TextField>

                        </div>
                        <div className="add-carflex">
                            <Typography>ABS</Typography>
                            <TextField
                                name="ABS"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ABS}
                                label="Yes or No" size="small" required></TextField>

                            <Typography>No.of.Accidents</Typography>
                            <TextField
                                name="Accidental"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Accidental}
                                label="No.of.Accidents" size="small" required></TextField>
                            <Typography>Adjustable Mirror</Typography>
                            <TextField
                                name="AdjustableMirror"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.AdjustableMirror}
                                label="Yes or No" size="small" required></TextField>
                            <Typography>Adjustable steering</Typography>
                            <TextField
                                name="AdjustableSteering"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.AdjustableSteering}
                                label="Yes or No" size="small" required></TextField>
                            <Typography>No.of.Airbags</Typography>
                            <TextField
                                name="noOfAirbags"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.noOfAirbags}
                                label="No.of.Airbags" size="small" required></TextField>
                            <Typography>Bluetooth</Typography>
                            <TextField
                                name="bluetooth"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.bluetooth}
                                label="Yes or No" size="small" required></TextField>
                            <Typography>Color</Typography>
                            <TextField
                                name="color"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.color}
                                label="color" size="small" required></TextField>
                            <Typography>Battery Condition</Typography>
                            <TextField
                                name="batteryCondition"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.batteryCondition}
                                label="Yes or No" size="small" required></TextField>

                            <Typography>Insurance Type</Typography>
                            <TextField
                                name="insuranceType"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.insuranceType} label="Insurance type" size="small" required></TextField>

                            <Typography>Parking Sensor</Typography>
                            <TextField
                                name="parkingSensor"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.parkingSensor}
                                label="Yes or No" size="small" required></TextField>
                            <Typography>Rear Camera</Typography>
                            <TextField
                                name="rearCamera"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.rearCamera} label="Yes or No" size="small" required></TextField>

                            <Typography>Registration</Typography>
                            <TextField
                                name="registration"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.registration}
                                label="TN,KA.." size="small" required></TextField>
                            <Typography>Tyre Condition</Typography>
                            <TextField
                                name="tyreCondition"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.tyreCondition}
                                label="Tyre Condition" size="small" required></TextField>
                            <Typography>USB</Typography>
                            <TextField
                                name="USB"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.USB}
                                label="Yes or No" size="small" required></TextField>

                        </div>
                    </div>

                    <Button color="primary" type="submit">Add Car</Button>

                </form>
            </div>
        </div>
    )
}
