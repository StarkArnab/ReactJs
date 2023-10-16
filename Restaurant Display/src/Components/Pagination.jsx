const Pagination = ({ totalPages, currentPage, pageUpdate}) => {
  const array = [];
  for (var i = 0; i < totalPages; i++){
    array[i] = i + 1;
  }
  return <div className="pagination_wrapper">
    {
      array.map((btn) => (
        <button onClick={()=>{pageUpdate(btn)}} style={{backgroundColor : btn==currentPage ? "red":"blue" }} disabled={btn==currentPage} >{btn}</button>
      ))
      }
  </div>;
};

export default Pagination;
