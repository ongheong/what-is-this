// import { useState, useEffect } from 'react';

// // 네트워크가 꺼지면 저장 버튼을 비활성화하고(재연결 중...), 다시 연결되면 활성화
// export default function SaveButton() { 
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   function handleSaveClick() {
//     console.log('✅ 진행사항 저장됨');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? '진행사항 저장' : '재연결 중...'}
//     </button>
//   );
// }

import useOnlineStatus from './useOnlineStatus.jsx';

function SaveButton() {
    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log('✅ 진행사항 저장됨');
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? '진행사항 저장' : '재연결 중...'}
        </button>
    );
}

export default SaveButton;