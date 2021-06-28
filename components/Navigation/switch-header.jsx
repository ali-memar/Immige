import Link from "next/link";
import { useState } from "react";

const SwitchHeader = () => {
  const [active, setActive] = useState(2);
  const setAvtiveHeader = (id) => {
    setActive(id);
    return 0;
  };
  return (
    <div className="wrapper-switch-header">
      <div
        className={`bg-black txt-white ${active == 1 ? "active-bg" : ""}`}
        onClick={() => setAvtiveHeader(1)}
      >
        <Link href={`/`}>
          <a>WORK</a>
        </Link>
      </div>
      <div
        className={`bg-black txt-white ${active == 2 ? "active-bg" : ""}`}
        onClick={() => setAvtiveHeader(2)}
      >
        <Link href={`/`}>
          <a>HIRE</a>
        </Link>
      </div>
    </div>
  );
};
export default SwitchHeader;
