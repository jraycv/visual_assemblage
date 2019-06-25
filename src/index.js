import * as React from "react";
import { render } from "react-dom";

import Panels from "./panels";

import "./css/fonts.css";
import "./css/hint.css";
import "./css/styles.scss";


function Root() {
  
  const [appState, setAppState] = React.useState("initial");
  const [previewAlt, setPreviewAlt] = React.useState("initial");
  const [previewImage, setPreviewImage] = React.useState("initial");
  const [searchState, setSearchState] = React.useState("");

  return (
    <div className={`container display-${appState}`}>

      <div className="drawer">

          <div className="close icon-exchange" onClick={()=>setAppState("initial")}></div>

      </div>

      <div className="main">

        <div className="blocker" onClick={()=>setAppState("initial")}>

              <div className="blocker-display preview">

                  <img src={previewImage} alt={previewAlt}/>

              </div>


              <div className="blocker-display qrcode">


              </div>

        </div>

        <div className="header">

          <div className="menu icon-bars" onClick={()=>setAppState("drawer")}></div>

          <div className="logo"></div>

          <div className="tools">

              <div className="search">
                <input type="text" value={searchState} placeholder="Search title here..." onChange={ev => setSearchState(ev.target.value)}/>
              </div>

          </div>

        </div>

        <div className="contents">

          <Panels onPreview={({j,k})=>{setAppState("preview"); setPreviewAlt(j); setPreviewImage(k);}} search={searchState}/>

        </div>

        <div className="footer">

            &copy; <span>{(new Date().getFullYear())}</span> Visual Assemblage. All Rights Reserved.

        </div>

      </div>

    </div>
  );
}

render(<Root />, document.getElementById("root"));
