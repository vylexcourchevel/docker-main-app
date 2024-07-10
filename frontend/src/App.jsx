import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:8181");
      setContent(data);
    } catch (error) {
      throw new Error(
        "An error occurred while fetching data: " + error.message
      );
    }
  };

  return <>Bouh ! {content}</>;
}

export default App;
