import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import TimeToLeaveTwoToneIcon from '@mui/icons-material/TimeToLeaveTwoTone';
import TwoWheelerTwoToneIcon from '@mui/icons-material/TwoWheelerTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import LocalLaundryServiceTwoToneIcon from '@mui/icons-material/LocalLaundryServiceTwoTone';

export function AdPost() {
    const navigate = useNavigate()
    return (
        <div className="adpost">
            <h2>POST YOUR AD</h2>
            <table>
                <thead>
                    <tr>
                        <th>CHOOSE YOUR CATEGORY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td onClick={() => navigate("/addcar")}><TimeToLeaveTwoToneIcon />  Cars</td>
                    </tr>
                    <tr>
                        <td onClick={() => navigate("/addbike")}><TwoWheelerTwoToneIcon />  Bikes</td>
                    </tr>
                    <tr>
                        <td onClick={() => navigate("/addphone")}><PhoneIphoneTwoToneIcon />  Phones</td>
                    </tr>
                    <tr>
                        <td onClick={() => navigate("/addwatch")}><WatchTwoToneIcon />  Watches</td>
                    </tr>
                    <tr>
                        <td onClick={() => navigate("/addlaptop")}><LaptopMacTwoToneIcon />  Laptops</td>
                    </tr>
                    <tr>
                        <td onClick={() => navigate("/addwashingmachine")}><LocalLaundryServiceTwoToneIcon />  Washing Machines</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
