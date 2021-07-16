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

const FormStep2 = () => {
  const [disableDeposit, setDisableDeposit] = useState("false");
  const [placeDeposit, setPlaceDeposit] = useState("Deposit");
  const [packagePrice, setPackagePrice] = useState();
  const [placeAmount, setPlaceAmount] = useState();
  const [valueDeposit, setValueDeposit] = useState();
  const [displayLocation, setDisplayLocation] = useState("none");
  const [displayDates, setDisplayDates] = useState("none");
  const [isAddBefore, setIsAddBefore] = useState(true);

  const handlePrice = (value) => {
    setPackagePrice(value);
    if (value < 100) {
      setDisableDeposit(true);
      setPlaceDeposit("100%(Full Upfront Payment)");
      setPlaceAmount(value);
    } else {
      setDisableDeposit(false);
      setPlaceDeposit("Deposit");
      if (valueDeposit) {
        setPlaceAmount(value * (valueDeposit * 0.01));
      } else {
        setPlaceAmount(0);
      }
    }
  };
  const handleDeposit = (value) => {
    setValueDeposit(value);
    // if (valueDeposit) {
    setPlaceAmount(packagePrice * value * 0.01);
    // }
  };
  //for checked location
  const onChangeCheckLoacation = (checked) => {
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
  const handleAddBefore = (value) => {
    if (value != "City") {
      setIsAddBefore(true);
      console.log("is");
    } else {
      setIsAddBefore(false);
    }
    console.log(value);
    console.log(isAddBefore);
  };
  return (
    <>
      {/* //title */}
      <PackageTitile />

      <div className="wrapperPrice">
        {/* //price */}
        <PackagePrice handlePrice={handlePrice} />

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
        handleAddBefore={handleAddBefore}
        isAddBefore={isAddBefore}
      />

      {/* check date */}
      <PackageCheckDate onChangeCheckDates={onChangeCheckDates} />

      {/* add Dates */}
      <PackageAddDates displayDates={displayDates} />
    </>
  );
};

export default FormStep2;
