import { useState, useEffect } from 'react';

function StatusBar() { // 사용자의 온라인 상태를 확인하는 함수
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return <h1>{isOnline? 'Online' : 'Offline'}</h1>;
}

//------------------------------------------------------------------

import { useState, useEffect } from 'react';

function useOnlineStatus() { // 커스텀 훅 정의
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

function StatusBar() { //내부 로직을 커스텀 훅으로 분리
    const isOnline = useOnlineStatus(); // 커스텀 훅 호출
    return <h1>{isOnline? 'Online' : 'Offline'}</h1>;
}