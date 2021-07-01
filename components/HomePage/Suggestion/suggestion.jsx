import Link from "next/link";
const Suggestion = () => {
  return (
    <div id="wrapper-suggestion">
      <div className="mw-1080">
        <h2>SUGGESTED FOR YOU</h2>
        <h3>
          <Link href={`/`}>
            <a>NOT REKEVANT?</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};
export default Suggestion;
