import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();

  const [file, setFile] = useState();

  const uploadFileClick = () => {
    fileInputRef.current.click();
  };

  const url =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        console.log(data);
        const response = await uploadFile(data);
      }
    };
    getImage();
  }, [file]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <img src={url} alt="banner" style={{ height: "100vh", width: "30%" }} />
        <div
          style={{
            padding: 5,
            margin: 5,
            marginTop: 120,
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1>Simple File Sharing App</h1>
          <p>
            Upload your files and retrive them from any where ! <br /> For Free
            !
          </p>
          <button
            onClick={() => uploadFileClick()}
            style={{
              backgroundColor: "#aae112",
              border: 0,
              padding: 15,
              borderRadius: 20,
            }}
          >
            Upload
          </button>
          <br />
          <br />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
    </>
  );
}

export default App;
