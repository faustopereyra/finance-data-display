import React from "react";

import "./pagination-controller.style.scss"

const PaginationController = (props) => {

    const { currentPage, setCurrentPage, totalPages } = props


    return (
        <div className="page-controller">
            <button onClick={() => { if (currentPage !== 1) setCurrentPage(currentPage - 1) }}>Prev</button>
            <p className="paragraph">{currentPage}</p>
            <button onClick={() => { if (currentPage < totalPages) setCurrentPage(currentPage + 1) }}>Next</button>
        </div >
    )
}

export default PaginationController