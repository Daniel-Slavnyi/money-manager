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
  TableCurrency,
  TableFirstLetter,
  TableHead,
  TableLeft,
  TablePurchase,
  TableRow,
  TableRowTop,
  TableTop,
} from './currency.styled';
import { privatbankApi } from '../../services/currencyApi';
import image from '../../images/templateMountains.png';

export const Currency = () => {
  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem('currency'))
  );
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    privatbankApi()
      .then(data => {
        setCurrency(data);
        localStorage.setItem(
          'currency',
          JSON.stringify(
            data.filter(
              euro =>
                (euro.currencyCodeA === 840 && euro.currencyCodeB === 980) ||
                (euro.currencyCodeA === 978 && euro.currencyCodeB === 980)
            )
          )
        );
      })
      .catch(error => {
        console.log(error);
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
              <TableCurrency>Currency</TableCurrency>
              <TablePurchase>Purchase</TablePurchase>
              <TableTop>Sale</TableTop>
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
                  <TableRowTop key={el.currencyCodeA}>
                    <TableFirstLetter>USD</TableFirstLetter>
                    <td>{el.rateBuy.toFixed(2)}</td>
                    <TableArray>{el.rateSell.toFixed(2)}</TableArray>
                  </TableRowTop>
                ))}

            {currency &&
              currency
                .filter(
                  euro =>
                    euro.currencyCodeA === 978 && euro.currencyCodeB === 980
                )
                .map(el => (
                  <TableRow key={el.currencyCodeA}>
                    <TableFirstLetter>EUR</TableFirstLetter>
                    <td>{el.rateBuy.toFixed(2)}</td>
                    <TableLeft>{el.rateSell.toFixed(2)}</TableLeft>
                  </TableRow>
                ))}
          </TableBody>
        </TableContainer>
        <Image src={image} alt="" />
        {isLoad && <Loader />}
      </Background>
    </>
  );
};
