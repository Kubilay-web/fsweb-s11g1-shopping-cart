import { useState, useEffect } from "react";

function useLocalStorage(key = "ls", initalData) {
  // hem kendi stateinde tutacak
  const [data, setData] = useState(initalData);

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      // hem de localstorage'a yazacak
      const lsData = JSON.parse(localStorage.getItem(key));
      setData(lsData);
    }
  }, []);

  const writeToLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  // return <div>useLocalStorage: {data}</div>;
  // div yerine metod ve değer return ediyoruz
  return [data, writeToLocalStorage];
}

export default useLocalStorage;
