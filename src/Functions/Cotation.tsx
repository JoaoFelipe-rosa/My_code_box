import axios from 'axios';
import { useState } from 'react';

export default function GetCotation() {
  interface CotationType {
    value: string | undefined;
    USDBRL: string;
    EURBRL: string;
    BTCBRL: string | any;
  }

  const [cotationUsd, setCotationUsd] = useState();
  const [codeUsd, setCodeUsd] = useState();

  const [cotationEur, setCotationEur] = useState();
  const [codeEur, setCodeEur] = useState();

  const [cotationBtc, setCotationBtc] = useState();
  const [codeBtc, setCodeBtc] = useState();

  function getDolarCotation() {
    const dolarUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL';

    axios
      .get(dolarUrl)
      .then((response: { data: CotationType }) => {
        const data = response.data;
        const coin = data.USDBRL;

        setCodeUsd(coin.code);
        setCotationUsd(coin.bid);
      })
      .catch((err: string) => {
        err;
      });
  }
  function getEURCotation() {
    const dolarUrl = 'https://economia.awesomeapi.com.br/last/EUR-BRL';

    axios
      .get(dolarUrl)
      .then((response: { data: CotationType }) => {
        const data = response.data;
        const coin = data.EURBRL;

        setCodeEur(coin.code);
        setCotationEur(coin.bid);
      })
      .catch((err: string) => {
        err;
      });
  }
  function getBTCCotation() {
    const dolarUrl = 'https://economia.awesomeapi.com.br/last/BTC-BRL';

    axios
      .get(dolarUrl)
      .then((response: { data: CotationType }) => {
        const data = response.data;
        const coin = data.BTCBRL;

        setCodeBtc(coin.code);
        setCotationBtc(coin.bid);
      })
      .catch((err: string) => {
        err;
      });
  }
  getDolarCotation();
  getEURCotation();
  getBTCCotation();
  return (
    <>
      <h1>Cotaçoes diarias para Real</h1>
      <h2>USD</h2>
      <p>
        {codeUsd} {cotationUsd}
      </p>
      <h2>EUR</h2>
      <p>
        {codeEur} {cotationEur}
      </p>
      <h2>BTC</h2>
      <p>
        {codeBtc} {cotationBtc}
      </p>
    </>
  );
}
