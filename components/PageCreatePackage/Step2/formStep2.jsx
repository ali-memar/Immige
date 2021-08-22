import React, { useState } from "react";
import PackageAddDates from "./packageAddDates";
import PackageAddLocation from "./packageAddLocation";
import PackageTitile from "./packageTitle";
import PackagePrice from "./packagePrice";
import PackageDeposit from "./packageDeposit";
import PackageAmount from "./packageAmount";
import PackageLeadTime from "./packageLeadTime";
import PackageCheckLocation from "./packageCheckedLocation";
import PackageCheckDate from "./packageCheckDate";
const formatNumber = (value) => {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
};

const FormStep2 = () => {
  const [disableDeposit, setDisableDeposit] = useState(true);
  const [placeDeposit, setPlaceDeposit] = useState("Deposit");
  const [placeAmount, setPlaceAmount] = useState();
  const [valuePrice, setValuePrice] = useState(null);
  const [valueDeposit, setValueDeposit] = useState();
  const [displayLocation, setDisplayLocation] = useState("none");
  const [displayDates, setDisplayDates] = useState("none");
  const [locationFieldsList, setLocationFieldsList] = useState([]);

  const changeValuePrice = (e) => {
    const isInteger = /^[0-9]+$/;
    if (e.target.value === "" || isInteger.test(e.target.value)) {
      setValuePrice(e.target.value);
      if (e.target.value < 100) {
        setDisableDeposit(true);
        setPlaceDeposit("100%(Full Upfront Payment)");
        setPlaceAmount(e.target.value);
      } else {
        setDisableDeposit(false);
        setPlaceDeposit("Deposit");
        if (valueDeposit) {
          setPlaceAmount(e.target.value * (valueDeposit * 0.01));
        } else {
          setPlaceAmount(0);
        }
      }
    }
  };

  const handleDeposit = (value) => {
    setValueDeposit(value);
    // if (valueDeposit) {
    setPlaceAmount(valuePrice * value * 0.01);
    // }
  };
  //for checked location
  const onChangeCheckLoacation = (checked) => {
    setLocationFieldsList([]);
    if (checked) {
      setDisplayLocation("block");
    } else {
      setDisplayLocation("none");
    }
  };
  //for checked dates
  const onChangeCheckDates = (checked) => {
    if (checked) {
      setDisplayDates("block");
    } else {
      setDisplayDates("none");
    }
  };
  return (
    <>
      {/* //title */}
      <PackageTitile />

      <div className="wrapperPrice">
        {/* //price */}
        <PackagePrice
          valuePrice={valuePrice}
          changeValuePrice={changeValuePrice}
          formatNumber={formatNumber}
        />

        {/* //deposit */}
        <PackageDeposit
          placeDeposit={placeDeposit}
          handleDeposit={handleDeposit}
          disableDeposit={disableDeposit}
        />

        {/* //amount */}
        <PackageAmount placeAmount={placeAmount} />
      </div>
      {/* //lead time */}
      <PackageLeadTime />

      {/* checked location*/}
      <PackageCheckLocation onChangeCheckLoacation={onChangeCheckLoacation} />

      {/* add location */}
      <PackageAddLocation
        displayLocation={displayLocation}
        locationFieldsList={locationFieldsList}
      />

      {/* check date */}
      <PackageCheckDate onChangeCheckDates={onChangeCheckDates} />

      {/* add Dates */}
      <PackageAddDates displayDates={displayDates} />
    </>
  );
};

export default FormStep2;
