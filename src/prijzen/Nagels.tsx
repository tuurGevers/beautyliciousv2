import React from 'react';
import {List} from "@mui/material";

const Massage = () => {
    return (
        <div>
            <table style={{ width: '100%', maxWidth: 360, backgroundColor: '#896310', color:"#DFE0DF", padding:"8px", fontSize:"24px"}}>
                <thead>
                <tr>
                    <th align={"left"} className="titel"> Gelnagels</th>
                    <td width={10}/>
                    <th className="titel">Prijs</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Gel op natuurlijke nagels </td>
                    <td width={10}/>
                    <td className="tekst"> &euro;35</td>
                </tr>
                <tr>
                    <td> Gel tot 5 verlengingen</td>
                    <td width={10}/>
                    <td className="prijs">&euro;40 </td>
                </tr>
                <tr>
                    <td> Gel tot 10 verlengingen</td>
                    <td width={10}/>
                    <td className="prijs">&euro;45 </td>
                </tr>

                </tbody>
            </table>
        </div>

    );
};

export default Massage;
