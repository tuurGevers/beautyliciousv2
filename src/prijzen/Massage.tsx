import React from 'react';
import {Box, List} from "@mui/material";

const Massage = () => {
    return (
        <Box sx={{ml:{xs:"-10%", md:"0"}}} >
            <table style={{backgroundColor: '#896310', color:"#DFE0DF", padding:"8px", fontSize:"24px"}}>
                <thead>
                <tr>
                    <th align={"left"} className="titel"> Massages</th>
                    <td width={10}/>
                    <th className={"tijd"}>Duurtijd</th>
                    <td width={10}/>
                    <th className="titel">Prijs</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Lichaam</td>
                    <td width={10}/>
                    <td className="tekst tijd"> 45min </td>
                    <td width={10}/>
                    <td className="tekst"> &euro;45</td>
                </tr>
                <tr>
                    <td>Nek &rug</td>
                    <td width={10}/>
                    <td className="tekst tijd"> 30min </td>
                    <td width={10}/>
                    <td className="prijs">&euro;35 </td>
                </tr>
                <tr>
                    <td>lichaam hotstone</td>
                    <td width={10}/>
                    <td className="tekst tijd"> 45min </td>
                    <td width={10}/>
                    <td className="prijs">&euro;55 </td>
                </tr>
                <tr>
                    <td>Oriental lichaamsmassage met kruidenstempels</td>
                    <td width={10}/>
                    <td className="tekst tijd"> 45min </td>
                    <td width={10}/>
                    <td className="prijs">&euro;60 </td>
                </tr>
                <tr>
                    <td>Oriental nek/rugmassage </td>
                    <td width={10}/>
                    <td className="tekst tijd"> 30min </td>
                    <td width={10}/>
                    <td className="prijs">&euro;50 </td>
                </tr>
                <tr>
                    <td className={"titel"}><b> Extra's </b></td>
                    <td width={10}/>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td className="tekst"> Reinigende lichaamsscrub (Dode Zeezout) </td>
                    <td width={10}/>
                    <td className="tijd">+15min</td>
                    <td className="tekst">&euro;15 </td>
                </tr>

                </tbody>
            </table>
        </Box>

    );
};

export default Massage;
