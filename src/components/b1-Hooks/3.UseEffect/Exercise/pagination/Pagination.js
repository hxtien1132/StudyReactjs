import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { pagination, onpageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  function handlePageChange(newPage) {
    if (onpageChange) {
      onpageChange(newPage);
    }
  }
  return (
    <div>
      <button
        className="prev"
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>
      <button
        className="next"
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
};
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onpageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onpageChange: null,
};
export default Pagination;
