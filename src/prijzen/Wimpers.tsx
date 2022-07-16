import React from 'react';
import {AppBar} from "@mui/material";

const Wimpers = () => {
    return (
        <div>
            <table  style={{ width: '100%', maxWidth: 360, backgroundColor: '#896310', color:"#DFE0DF", padding:"8px", fontSize:"24px"}}>
                <thead>
                <tr>
                    <th align={"left"}>Wimpers</th>
                    <td width={10}></td>
                    <th>Prijs</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tekst">Verven </td>
                    <td width={10}></td>
                    <td className="tekst"> &euro;12,5</td>
                </tr>
                <tr>
                    <td className="tekst">Wimperlift</td>
                    <td width={10}></td>
                    <td className="tekst">&euro;20 </td>
                </tr>
                <tr>
                    <td className="tekst">Combi </td>
                    <td width={10}></td>
                    <td className="tekst">&euro;30 </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Wimpers;
