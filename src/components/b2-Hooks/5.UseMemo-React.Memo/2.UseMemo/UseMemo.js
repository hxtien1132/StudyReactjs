import React, { useMemo, useRef, useState } from "react";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const namRef = useRef();
  const handleSubmit = () => {
    setProducts([...products, { name, price: parseInt(price) }]);
    setName("");
    setPrice("");
    namRef.current.focus();
  };
  const total = useMemo(() => {
    const results = products.reduce((result, prod) => {
      console.log("tính toán lại ...");
      return result + prod.price;
    }, 0);
    return results; //trả ra cho total
  }, [products]);
  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={namRef}
        type="text"
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total:{total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} : {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
