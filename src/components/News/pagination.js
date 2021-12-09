import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ newsData, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => {
    return (
        <div className="container mt-3" style={{ display: 'block' }}>
            <div className="pagination-center">
                { newsData.length > 0 ?
                    <TablePagination
                        rowsPerPageOptions={[5,10,25]}
                        component="div"
                        count={newsData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    :
                    <h5>No article</h5>
                }
            </div>
        </div>
    )
}

export default Pagination;