import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';


export function AddWashingMachine() {
    const navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            id: "",
            image: "",
            brand: "",
            name: "",
            price: "",
            location: "",
            ownerName: "",
            phoneNo: "",
            door: "",
            condition: "",
            mode: ""
        },
        // validationSchema: formValidationSchema,
        onSubmit: (newdata) => {
            console.log("form value", newdata)
            addData(newdata)
            navigate("/dashboard/washingMachines")
            console.log("clicked")
        }
    });
    const addData = (newdata) => {
        fetch("https://olx-backend-seven.vercel.app/washingMachines",
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
                <h3>SELECTED CATEGORY <label>Washing Machine</label></h3>
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
                            <Typography >Washing Machine Image</Typography>
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
                            <Typography>Washing Machine Name</Typography>
                            <TextField
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                label="Washing Machine load" size="small" required></TextField>
                            <Typography>Price</Typography>
                            <TextField
                                name="price"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.price}
                                label="Price" size="small" required></TextField>
                            <Typography>Location</Typography>
                            <TextField
                                name="location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                label="location" size="small" required></TextField>



                        </div>
                        <div className="add-carflex">
                            <Typography>Owner Name</Typography>
                            <TextField
                                name="ownerName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ownerName}
                                label="Owner Name" size="small" required></TextField>
                            <Typography>Phone Number</Typography>
                            <TextField
                                name="phoneNo"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phoneNo}
                                label="contact" size="small" required></TextField>
                            <Typography>Door</Typography>
                            <TextField
                                name="door"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.door}
                                label="Top door" size="small" required></TextField>

                            <Typography>Condition</Typography>
                            <TextField
                                name="condition"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.condition}
                                label="Good" size="small" required></TextField>

                            <Typography>Mode</Typography>
                            <TextField
                                name="mode"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.mode} label="automatic" size="small" required></TextField>



                        </div>
                    </div>

                    <Button color="primary" type="submit">Add Washing Machine</Button>

                </form>
            </div>
        </div>
    )
}

