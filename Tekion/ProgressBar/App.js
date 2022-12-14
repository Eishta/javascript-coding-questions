import "./style.css";
import { useEffect, useState } from "react";

// progress bar -> 5s
export default function App({ duration }) {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    console.log('mount')
    let timerId = setTimeout(() => {
      if (width < 100) {
        let time = parseInt(duration);
        let w = width + Math.ceil(100 / time);
        console.log(w);
        setWidth(w);
      }
    }, 1000);

    return () => {
      console.log('clear')
      clearTimeout(timerId);
    }
  }, [width]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${width}%` }}></div>
    </div>
  );
}
