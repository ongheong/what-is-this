// import { useState, useEffect } from 'react';

// function StatusBar() {
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

//   return <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>;
// }

import useOnlineStatus from './useOnlineStatus.jsx';

function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>;
}

export default StatusBar;
