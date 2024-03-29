import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";
import { addProduct } from "redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const dispatch = useDispatch();

  let popup = document.getElementById("popup");
  function openPop() {
    popup.classList.add("open-Pop");
  }
  function closePop() {
    popup.classList.remove("open-Pop");
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!inputs.title || !inputs.desc || !inputs.price || !cat.length) {
      setConfirmationMessage("Please fill in all required fields");
      setIsSubmitted(true);
      return;
    }

    setIsSubmitted(true);

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };

          addProduct(product, dispatch);

          setConfirmationMessage("Product created successfully!");
          setTimeout(() => {
            setConfirmationMessage("");
            setIsSubmitted(false);
            // Reset form inputs
            setInputs({});
            setFile(null);
            setCat([]);
          }, 4000); // Display confirmation message for 2 seconds

          console.log(downloadURL);
          console.log(product);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      {isSubmitted && (
        <div className="confirmationPopup">
          <p className="textconfirmationPopup">
            loading..{confirmationMessage}
          </p>
          <button onClick={() => setIsSubmitted(false)}>Close</button>
        </div>
      )}
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            className="inputpro"
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            className="inputpro"
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            className="inputpro"
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            className="inputpro"
            type="text"
            placeholder="jeans,skirts"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" className="inputpro" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
}
