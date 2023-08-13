import { useState } from "react";
import "./App.css";
import HeartIcon from "./component/Heart";
import ClickedHeartIcon from "./component/ClickedHeart";

// 'heart' : 'clickedHeart'

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        {!isClicked ? <HeartIcon /> : <ClickedHeartIcon />} <br />
        좋아요 {!isClicked ? " " : "1개"}
      </button>
    </>
  );
}

export default App;
