import React from "react";

import "./row-display.style.scss"
const Row = (props) => {


    return (
        <div className="row paragraph" >
            <div onClick={props.sortData(props.tendency)} className="row__item row__item--id">{props.id}</div>
            <div className="row__item">{props.name}</div>
            <div className="row__item row__item--closed">{props.closed}</div>
            <div className="row__item">{props.closed_at}</div>
            <div className="row__item">{props.created_at}</div>
            <div className="row__item row__item--created_by">{props.created_by}</div>
            <div className="row__item row__item--current">{props.current}</div>
            <div className="row__item">{props.description}</div>
            <div className="row__item row__item--max">{props.max}</div>
            <div className="row__item row__item--min">{props.min}</div>
            <div className="row__item">{props.url}</div>
            <div className="row__item">{props.result}</div>
            <div className="row__item row__item--tendency">{props.tendency}</div>
        </div >
    )
}

export default Row