const BgDashboard = () => {
  const bgUrl =
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1440&ixid=MnwxfDB8MXxhbGx8fHx8fHx8Mnx8MTYyNTE0Nzg5OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=3440";
  return (
    <>
      <div id="wrapper-bg-dashboard">
        <div className="mw-1080">
          <h2>HELLO, MOH</h2>
        </div>
      </div>
      <style jsx>{`
        #wrapper-bg-dashboard {
          background: url(${bgUrl}) fixed;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
};
export default BgDashboard;
