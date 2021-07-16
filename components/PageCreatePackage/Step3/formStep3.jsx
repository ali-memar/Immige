import PackageProvide from "./packageProvide";
import PackageAddProvide from "./packageAddProvide";
import PackageDescribe from "./packageDescribe";
import PackageOfferOptional from "./packageOfferOptional";
const FormStep3 = () => {
  return (
    <>
      {/* provide */}
      <PackageProvide />

      {/* add provide */}
      <PackageAddProvide />

      {/* describe */}
      <PackageDescribe />

      {/* offer optional */}
      <PackageOfferOptional />
    </>
  );
};

export default FormStep3;
