import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true); // 네트워크가 온라인 상태인지 아닌지를 추적하는 state

  useEffect(() => { // 전역 online, offline 이벤트를 구독하고, 이에 따라 상태를 업데이트하는 effect
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '온라인' : '연결 안 됨'}</h1>;
}
