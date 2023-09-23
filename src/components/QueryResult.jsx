import React, { useState, useMemo } from 'react';
import './QueryResult.css';

function QueryResult({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const totalPages = Math.ceil(result.length / rowsPerPage);

  const currentRows = useMemo(() => {
    return result.slice(indexOfFirstRow, indexOfLastRow);
  }, [result, indexOfFirstRow, indexOfLastRow]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    const newRowsPerPage = parseInt(e.target.value);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  if (result.length === 0) {
    return null;
  }

  const headers = Object.keys(currentRows[0]);

  return (
    <div>
      <div>
        <label htmlFor="rowsPerPageSelect">Rows per page  </label>
        <select
          id="rowsPerPageSelect"
          onChange={handleRowsPerPageChange}
          value={rowsPerPage}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
      <table className="query-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="pagination-text">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default React.memo(QueryResult);
