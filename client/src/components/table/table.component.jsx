import React, { useEffect, useState } from "react";
import PaginationController from "../pagination-contoller/pagination-controller.component";
import Row from "../row/row.component";
//import RowDisplay from "../row-display/row-display.component"

import "./table.style.scss"

const Table = () => {

    const [data, setData] = useState(["No data"])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        //Fetch data from our api
        const fetchFunc = async () => {
            const response = await fetch("http://localhost:5000/api/getList")
            const resJson = await response.json()

            //Parse created_at and closed_at to Datetime Values
            resJson.forEach(date => {
                date.created_at = new Date(date.created_at).toLocaleString()
                date.closed_at = new Date(date.closed_at).toLocaleString()
            });

            setData(resJson)
        }

        fetchFunc()
    }, []);


    //Make pagination calculations
    let totalRecords = data.length;
    let pageLimit = 8;
    const totalPages = Math.ceil(totalRecords / pageLimit);
    const indexLastRow = pageLimit * currentPage
    const indexFirstRow = indexLastRow - pageLimit
    const currentData = data.slice(indexFirstRow, indexLastRow)


    return (
        <div className="table">
            <Row
                className={"bold"}
                id="id"
                closed="closed"
                closed_at="closed at"
                created_at="created at"
                created_by="created by"
                description="description"
                name="name"
                result="result"
                url="url"
                min="min"
                max="max"
                current="current"
                tendency="t"
            />
            {currentData.map((point, i) => (
                <Row key={i}
                    id={point.id}
                    closed={point.closed}
                    closed_at={point.closed_at}
                    created_at={point.created_at}
                    created_by={point.created_by}
                    description={point.description}
                    name={point.name}
                    result={point.result}
                    url={point.url}
                    min={point.min}
                    max={point.max}
                    current={point.current}
                    tendency={point.tendency}
                />
            ))}

            <PaginationController currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

        </div >
    )
}

export default Table