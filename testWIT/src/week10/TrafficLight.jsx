import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  //렌더링의 이벤트 핸들러 내에서는, state 값을 고정으로 유지함
  function handleClick() {
    //walk ? alert("다음은 정지입니다") : alert("다음은 걷기입니다");
    setWalk(!walk);
    walk ? alert("다음은 정지입니다") : alert("다음은 걷기입니다");
    //alert 안에 이런식으로도 작성 가능 => alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
