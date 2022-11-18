import React from "react";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginator(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (page > 1) onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (page < Math.max(0, Math.ceil(count / rowsPerPage) - 1))
      onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <ul className="flex">
          <li>
            <button
              onClick={handleFirstPageButtonClick}
              className="h-10 border border-r-0 border-gray-600 bg-white px-5 text-gray-600 hover:bg-gray-100"
            >
              First
            </button>
          </li>
          <li>
            <button
              onClick={handleBackButtonClick}
              className="h-10 border border-r-0 border-gray-600 bg-white px-5 text-gray-600 hover:bg-gray-100"
            >
              Prev
            </button>
          </li>
          <li>
            <button className="h-10 border border-r-0 border-gray-600 bg-white px-5 text-gray-600 ">
              1
            </button>
          </li>
          <li>
            <button className="h-10 border border-r-0 border-gray-600 bg-white px-5 text-gray-600 hover:bg-gray-100">
              2
            </button>
          </li>
          <li>
            <button className="h-10 border border-r-0 border-gray-600 bg-gray-600 px-5 text-white ">
              3
            </button>
          </li>
          <li>
            <button
              onClick={handleNextButtonClick}
              className="h-10 border border-gray-600 bg-white px-5 text-gray-600 hover:bg-gray-100"
            >
              Next
            </button>
          </li>
          <li>
            <button
              onClick={handleLastPageButtonClick}
              className="h-10 border border-gray-600 bg-white px-5 text-gray-600 hover:bg-gray-100"
            >
              Last
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TablePaginator;
