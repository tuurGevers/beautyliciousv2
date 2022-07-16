import React from 'react';
import {List} from "@mui/material";

const Gelaat = () => {
    return (
        <div>
            <table style={{ width: '100%', maxWidth: 360, backgroundColor: '#896310', color:"#DFE0DF", padding:"8px", fontSize:"24px"}}>
                <thead>
                <tr>
                    <th align={"left"} className="titel"> Gelaatsverzorging</th>
                    <td width={10}/>
                    <th className="titel">Prijs</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> reinigend </td>
                    <td width={10}/>
                    <td className="tekst"> &euro;50</td>
                </tr>
                <tr>
                    <td> Peel off masker</td>
                    <td width={10}/>
                    <td className="prijs">&euro;7,5 </td>
                </tr>

                </tbody>
            </table>
        </div>

    );
};

export default Gelaat;
