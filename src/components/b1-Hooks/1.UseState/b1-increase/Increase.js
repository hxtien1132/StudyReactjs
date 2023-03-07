const { useState } = require("react");

function Increase() {
    const [counter, setcounter] = useState(1);
    function incre() {
             setcounter((counter) => counter + 1)
    }
     function decre() {
       setcounter((counter) => counter - 1);
     }
    return (
      <div style={{ padding: "50px 40%" }}>
        <h1 style={{ fontSize: "54px" }}>{counter}</h1>
        <button
          onClick={incre}
          style={{
            border: "1px solid black",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          Increase
        </button>
        <button
          onClick={decre}
          style={{
            border: "1px solid black",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          Decrease
        </button>
      </div>
    );
}
export default Increase;