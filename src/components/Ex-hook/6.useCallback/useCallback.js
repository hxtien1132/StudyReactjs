import React, { useState, useCallback } from 'react'

const storeSet = new Set(); 

function UseCallback() {
	const [count, setCount] = useState(0);
	const [countOther, setCountOther] = useState(0);
	
	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);
	
	const increaseOther = () => setCountOther(countOther + 1);
	const decreaseOther = () => setCountOther(countOther + 1);
	
	storeSet.add(increase);
	storeSet.add(decrease);
	storeSet.add(increaseOther);
	storeSet.add(decreaseOther);
	
	console.log(storeSet);
	
	return (
			<>
				<div>Count: {count}</div>
				<button onClick={increase}>+</button>
				<button onClick={increase}>-</button>

				<div>Count other: {countOther}</div>
				<button onClick={increaseOther}>+</button>
				<button onClick={decreaseOther}>-</button>
			</>
	)
}

export default UseCallback;
