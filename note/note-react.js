// React (hay còn gọi là ReactJS) là bộ thư viện viết
// bằng ngôn ngữ JavaScript dùng để phát triển
// các ứng dụng UI (User Interface) được phát triển
// bởi các lập trình viên làm việc tại Facebook.
// ❑React có thể chạy được trên cả môi trường client  lẫn server.

// 1.  Component
// Components là những thành phần giao diện (UI)
//  được định nghĩa độc lập, có thể tái sử sụng và hoàn toàn tách biệt nhau.
// Component gồm 2 loại: “Function component” và “Class Component”.

//2.JSX
// jsx (JavaScript Xml) : là một cú pháp mở rộng của javascript
//Sử dụng JSX để React để mô tả giao diện ngườidùng (UI)
// JSX cho phép kết nối HTML và JS trong cùng 1 source

//3.props(properties): thuộc tính trong component đó(props lại được truyền giá trị từ bên ngoài vào component)
    
//4.state :Trong React, state là các thành phần để xây dựng nên một component.
// State là 1 đối tượng javascript (javascript object)  dùng lưu trữ dữ liệu động của component và
// cho phép component theo dõi những thay đổi giữa các lần render ( có nghĩa là khi state object thay đổi, component sẽ re-render )
// State là lưu lưu trữ các giá trị của component, khi state thay đổi thì component cũng được render lại.
// stateless functional component : component k sử dụng state
// stateful functional component: component sử dụng state

//5 :Hooks là những hàm cho phép bạn "kết nối" React state (trạng thái) và lifecycle(vòng đời) vào component sử dụng function component.
// Hooks không hoạt động bên trong classes (hook dùng trong function component)
// vd : useState ,useReducer,useEffect,useRef....
// useState trả về 1 mảng 2 phần tử, phần tử đầu tiên là để khởi tạo state, phần tử thứ 2 là hàm để cập nhật state

//6:Mỗi 1 component trong react có 1 vòng đời(lifecycle) phát triển của riêng nó.
//  ❑Lifecycle mỗi component có 3 giai đoạn: Initialization(khởi tạo), mounting(gắn vào), updating(cập nhật), unmounting(tháo ra)

// library
//1.formik
//2.yup: