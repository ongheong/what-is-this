export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let state of queue) {
    if (typeof state === "function") {
      //업데이트 된 이전값인 finalState를 파라미터로 사용
      finalState = state(finalState);
    } else {
      finalState = state;
    }
  }

  return finalState;
}
