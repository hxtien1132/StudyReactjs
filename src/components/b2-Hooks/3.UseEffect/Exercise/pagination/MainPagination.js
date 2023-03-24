import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Postlist from "./Postlist";
import queryString from "query-string"
import PostFilterForm from "./PostFilterForm";

const MainPagination = () => {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows:1,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
   })
  useEffect(() => {
    async function fetchPostlist() {
      try {
        const paramString = queryString.stringify(filters)
        console.log('paramString',paramString);
        const URL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        console.log(URL);
         const response = await fetch(URL).then((res) => res.json());
         console.log(response);
        const { data, pagination } = response;
        setPagination(pagination)
         setPostList(data);
     } catch (error) {
        console.log("failed to fetch post list", error.message);
     }
    }
    fetchPostlist();
  }, [filters]);
  function handlePageChange(newpage) {
    console.log("newPage", newpage);
    setFilters({
      ...filters,
      _page:newpage,
    })
  }
  function handleTodoClick(todo) {
    console.log(todo);
    const index = postList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...postList];
    newTodoList.splice(index, 1);
    setPostList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log("formvalues", formValues);
    const newTodo = {
      id: postList.length + 1,
      ...formValues,
    };
    const newTodoList = [...postList];
    newTodoList.push(newTodo);
    setPostList(newTodoList);
  }
  function handleFilterChange(newFilters) {
    // console.log("newFilter", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like:newFilters.searchTerm,
    })
    
  }
  return (
    <div>
      <h1>React Hooks - TodoList</h1>
      <PostFilterForm onSubmit={handleFilterChange}></PostFilterForm>
      <Postlist posts={postList}></Postlist>
      <Pagination pagination={pagination} onpageChange={handlePageChange} />
    </div>
  );
};

export default MainPagination;
