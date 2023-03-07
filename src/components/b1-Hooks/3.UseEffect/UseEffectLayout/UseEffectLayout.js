import React, { useLayoutEffect, useState } from 'react';

// + UseEffectLayout
// 1. cập nhật lại state
// 2. cập nhật dom(mutated)
// 3. gọi cleanup nếu deps thay đổi
// 4. gọi useEffect callback
// 5. render lại Ui
const UseEffectLayout = () => {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if (count > 5) {
          setCount(0)
        }
    },[count])
    const handleRun = () => {
     setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>RUN</button>
        </div>
    );
};

export default UseEffectLayout;