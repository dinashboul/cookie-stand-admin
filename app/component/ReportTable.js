import React, { useState } from "react";
import {hourly_sales} from './data/data.js'



export default function Report(props) {

let locations = 0

  
const sum = hourly_sales.reduce((a, b) => a + b)

const total = hourly_sales.map(x => x +x);
const sumtotal = total.reduce((a, b) => a + b)
return (
    <>
    


    </>
)
}