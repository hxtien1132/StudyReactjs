import React from "react";
/**
 * element = <div id="root">Hello world</div>  => JSX
 * element = React.createElement('div',{id:}, ' Hello world') =>react element
 * hoạt động của react element
 * function createElement(elementType , props, ...children)
 * elementType:'div','p','span'.
 * props: className , id, src , alt (là attribute)
 * ....children: (là content:text)
 * ex:
 * element2 = (<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 * build ra  react element:
 * element2 = React.createElement('div',{
 * children: [
 * React.createElement('span', null, 'Hello')
 * ' ',
 *   React.createElement('span', null, 'World')
 * ]
 * })
 */
const Jsx = () => {
  // const element = <div id="root">Hello World</div>;
  // const elementR = React.createElement("div", { id: "root" }, "Hello World");
  // const element2 = (
  //   <div>
  //     <span>Hello</span> <span>World</span>
  //   </div>
  // );
  // const element2R = React.createElement("div", {
  //   children: [
  //     React.createElement("span", null, "Hello"),
  //     " ",
  //     React.createElement("span", null, "World"),
  //   ],
  // });
  return <div>
    <div className="features">
      <h3>hxt</h3>
      <p>lorem</p>
    </div>
  </div>
};
export default Jsx;
