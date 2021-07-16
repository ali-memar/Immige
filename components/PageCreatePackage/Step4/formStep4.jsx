import PackageCoverImage from "./packageCoverImage";
import PackageCardPhoto from "./packageCardPhoto";
const FormStep4 = () => {
  return (
    <>
      <div id="wrapper-photos-package">
        {/* card photo */}
        <PackageCardPhoto />

        {/* cover image */}
        <PackageCoverImage />
      </div>
    </>
  );
};
export default FormStep4;
