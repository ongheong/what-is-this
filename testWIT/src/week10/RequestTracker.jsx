import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    //setPending(pending + 1) == setPending(1)과 동일한 의미!
    //set함수에 값을 할당하는 것이 아닌 기존 값을 변화시키고 싶은 것이므로
    //업데이터 함수를 써 주기
    setPending(p => p + 1); 
    await delay(3000); //3초 후에 실행
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
				Pending: {pending}
			</h3>
			<h3>
				Completed: {completed}
			</h3>
			<button onClick={handleClick}>
				Buy
			</button>
    </>
  );
}

function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
