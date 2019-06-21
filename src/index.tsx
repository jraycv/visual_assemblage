import * as React from "react";
import { render } from "react-dom";

import "./styles.scss";

function Root() {
  const [appState, setAppState] = React.useState("initial");

  return (
    <div className={`container guide display-${appState}`}>
      <div className="creativeArea" />

      <div className="subscriptionArea">
        {appState == "initial" ? (
          <button className="ctaInitial" onClick={() => setAppState("confirm")}>
            Subscribe Now!
          </button>
        ) : (
          <button className="cta animated bounceIn">Confirm</button>
        )}
      </div>

      <div className="persuasiveArea" />

      <div className="legalArea" />
    </div>
  );
}

render(<Root />, document.getElementById("root"));
