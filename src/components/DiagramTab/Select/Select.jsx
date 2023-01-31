import React from 'react';

export default function Select({ setMonth, setYear }) {
  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };

  const handleChangeYear = e => {
    setYear(e.target.value);
  };

  return (
    <>
      <select onChange={handleChangeMonth} name="month" id="month-select">
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <select onChange={handleChangeYear} name="year" id="year-select">
        <option value="2023">2023</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </>
  );
}
