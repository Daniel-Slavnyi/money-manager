import React, { useEffect } from "react";
import { useState } from "react";
import { privatbankApi } from "./currencyApi";


export const Currency = () => {
    const [currency, setCurrency] = useState([]);



    useEffect(() => {
        privatbankApi().then(data => setCurrency(data));
    },[])

    const money = currency.filter((obj) => {
      return  obj.currencyCodeA === 840 || obj.currencyCodeA === 978
    })

    
    return(
      
  money.map((money)=>{ 
    return console.log(money);
        })
       
    )
}