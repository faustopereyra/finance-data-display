import React from "react";

import "./btn.style.scss"

const Btn = (props) => {

    const { currentPage, setCurrentPage, totalPages, action } = props

    const prev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }

    const next = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    return (

        <div onClick={action}>{props.children}</div >
    )
}

export default Btn