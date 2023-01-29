/* eslint-disable no-mixed-operators */
import { Loader } from './CurrencyLoader/CurrencyLoader';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Background,
  Image,
  TableArray,
  TableBody,
  TableContainer,
  TableHead,
  TablePurchase,
  TableRow,
  TableTop,
} from './currency.styled';
import { privatbankApi } from '../../services/currencyApi';
import image from '../../images/templateMountains.png';

export const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    privatbankApi()
      .then(data => {
        setCurrency(data);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  return (
    <>
      <Background>
        <TableContainer>
          <TableHead>
            <tr>
              <TableTop>Currency</TableTop>
              <TablePurchase>Purchase</TablePurchase>
              <td>Sale</td>
            </tr>
          </TableHead>

          <TableBody>
            {currency &&
              currency
                .filter(
                  euro =>
                    euro.currencyCodeA === 840 && euro.currencyCodeB === 980
                )
                .map(el => (
                  <TableRow key={el.currencyCodeA}>
                    <TableArray>USD</TableArray>
                    <TableArray>{el.rateBuy.toFixed(2)}</TableArray>
                    <TableArray>{el.rateSell.toFixed(2)}</TableArray>
                  </TableRow>
                ))}

            {currency &&
              currency
                .filter(
                  euro =>
                    euro.currencyCodeA === 978 && euro.currencyCodeB === 980
                )
                .map(el => (
                  <TableRow key={el.currencyCodeA}>
                    <td>EUR</td>
                    <td>{el.rateBuy.toFixed(2)}</td>
                    <td>{el.rateSell.toFixed(2)}</td>
                  </TableRow>
                ))}
          </TableBody>
        </TableContainer>
        <Image src={image} alt="" width="400px" height="118px" />
      </Background>
      {isLoad && <Loader />}
    </>
  );
};
