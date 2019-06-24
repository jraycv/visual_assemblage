//External Libraries
import * as React from "react";
import { useFetch } from "./hooks";


function Panels(props) {

  const [cardState, setCardState] = React.useState("initial");
  const [displayState, setDisplayState] = React.useState("initial");
  const [activeIndexState, setActiveIndexState] = React.useState(false);

  const [data, loading] = useFetch(
    "https://api.myjson.com/bins/1ddjd9"
  );


function clickItem(index,command){
  let activeIndex = activeIndexState === index ? false : index;
  setActiveIndexState(activeIndex);
  setCardState(command);
  setDisplayState(command);
}

function reset(){
  setCardState(false);
}

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="panels">
          {data.map((data,index) => (
            <li className={`display-${activeIndexState === index && cardState}`} key={index}>
              <div className="poster" style={{ backgroundImage: `url(${data.poster})` }}>
                <div className="cover" onClick={()=>clickItem(index,false)}>

                  <div className={`displayer display-type-${displayState}`}>

                      <div className="inner-display information">{data.info}</div>

                      <div className="inner-display qrcode"><img src={`http://api.qrserver.com/v1/create-qr-code/?data=${data.link}`} alt=""/></div>

                  </div>

                </div>
              </div>

              <div className="info">
                <div className="title">{data.title}</div>
                <div className="category">{data.category}</div>
              </div>

              <div className="widgets">
                <span className="hint--top" data-hint="Info" onClick={()=>{reset(); clickItem(index,"info")}}><i className="icon-info-circle"></i></span>
                <span className="hint--top" data-hint="Preview" onClick={()=>{props.onPreview({j:data.title, k:data.poster}); reset()}}><i className="icon-eye"></i></span>
                <a href={data.link} className="hint--top" data-hint="Page Link" target="_new"><i className="icon-link"></i></a>
                <span className="hint--top" data-hint="QR Code" onClick={()=>{reset(); clickItem(index,"qrcode")}}><i className="icon-qrcode"></i></span>
                <span className="hint--top" data-hint="Files"><i className="icon-folder"></i></span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Panels;
