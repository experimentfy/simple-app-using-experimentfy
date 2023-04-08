import "./styles.css";
import DefaultFramework from "./DefaultFramework";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    document.title =
      "Master degree - Framework for Experiments in web applications";
  }, []);
  return (
    <div className="App">
      <DefaultFramework />
    </div>
  );
}
