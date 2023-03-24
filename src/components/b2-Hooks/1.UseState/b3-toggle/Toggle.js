 import React,{useState} from 'react';
 import "./ToggleStyle.css"
 // stateless functional component : component k sử dụng state
// function Toggle(){
//     return <div className='toggle'>  </div>

// }
//  stateful functional component: component sử dụng state
// function Toggle2(){
//     return <div className='toggle2'></div>
// }
function Toggle(){
  //1.enabling state: useState(initialize value)(giá trị khởi tạp)
  //2.initialize state: boolean(true,false) ; number(1,2,3,4,5,...) ; String("hxt") ; underfined ; null ; [arr] ;{object}
  //3.reading state:
  //4.update state:
  // useState có 2 tham số (initialize value ,update state(function))
   const [on, setOn] = useState(false);
   console.log(on);
   const handleToggle =  () => {
     //initialStateValue
     setOn((on) => !on);
   }

    return (
    <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle} > 
       <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className='toggle-control'>
      <div className='toggle-on'onClick={()=> setOn(true)}>on</div>
       <div className='toggle-off'onClick={()=>setOn(false)}>off</div>
      </div>  */}
    </div>
     
    );
}
export default Toggle;