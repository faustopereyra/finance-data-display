import React from "react";

import "./row.style.scss"
const RowDisplay = (props) => {



    return (
        <div className="row paragraph" >
            <div className="row__item row__item--id">{props.id}</div>
            <div className="row__item"><a href="/view">{props.name}</a></div>
            <div className="row__item row__item--closed">{props.closed}</div>
            <div className="row__item">{props.created_at}</div>
            <div className="row__item">{props.closed_at}</div>
            <div className="row__item row__item--created_by"><a href="http://someurl/user/admin">{props.created_by}</a></div>
            <div className="row__item row__item--current">{props.current}</div>
            <div className="row__item">{props.description}</div>
            <div className="row__item row__item--max">{props.max}</div>
            <div className="row__item row__item--min">{props.min}</div>
            <div className="row__item">{props.url}</div>
            <div className="row__item">{props.result === "result" ? "result" : props.result ? "t" : props.result === null ? "" : "f"}</div>
            <div className="row__item row__item--tendency">{typeof props.tendency == "number" ? props.tendency > 0 ? <span className="arrow-up">&#8593;</span> : <span className="arrow-down">&#8595;</span> : props.tendency}</div>
        </div >
    )
}

export default RowDisplay