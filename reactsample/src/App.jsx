/*eslint react-hooks/exhaustive-deps: off*/
import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * 再レンダリングは、stateが更新されたとき、もしくはpropsで別の引数が渡されたとき
 */

const App = () => {
  //1つめはstateの変数名、2つめは変更するための関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShoeFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  //Reactの場合はcssの変数はキャメルケース
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  return (
    //外の{}はjavascript,内側の{}はオブジェクト
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShoeFlag}>on/off</button>
      {faceShowFlag && <p>aaaaaaaaa</p>}
    </React.Fragment>
  );
};

export default App;
