import * as React from "react";

function withLoading(Component,url) {
  return (props) => {
    // console.log("props",props);
    const [news, setNews] = React.useState([]);
    React.useEffect(() => {
      async function fechdata() {
        const reponse = await fetch(
         url
        );
        const data = await reponse.json();
        // console.log("fetch~data", data);
        setNews(data.hits);
        // console.log(news);
      }
      fechdata();
    }, []);
    if(!news || news.length ===0) return <div>Loading....</div>
    const value = news
    console.log(value);
    return <Component data={value} {...props}></Component>;
  };
}

export default withLoading;
