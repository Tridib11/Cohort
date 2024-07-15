import React, { useEffect, useState } from 'react';
import './App.css';

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });

    return ()=>{
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
    
  }, []);

  return isOnline;
}

function Online() {
  const isOnline = useIsOnline();
  if (isOnline) {
    return <p>You are online</p>;
  } else {
    return <p>You are offline</p>;
  }
}

export default Online;