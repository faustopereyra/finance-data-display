import React, { useEffect, useState } from "react";
import Chart from "../../components/chart/chart.component";

import "./view-data.style.scss"

const ViewData = () => {
    const [data, setData] = useState(["p"])
    const [totalData, setTotalData] = useState([])
    useEffect(() => {
        //Fetch data from our api
        const fetchFunc = async () => {
            const fetchData = await fetch("http://localhost:5000/api/getView")

            const resData = await fetchData.json()

            //Parse created_at and closed_at to Datetime Values
            resData.created_at = new Date(resData.created_at).toLocaleString();
            resData.closed_at = new Date(resData.closed_at).toLocaleString();

            setData(resData.price_history);
            setTotalData(resData);

        }

        fetchFunc()
    }, [])


    return (
        <div>
            <div>
                <div className="heading-primary">{totalData.name}</div>

                <Chart data={data} />

                <div className="data-view">

                    <div className="data-view__description paragraph">
                        <div className="heading-secondary">Description</div>
                        {totalData.description}
                    </div>

                    <div className="data-view__showdown">
                        <div className="heading-secondary">Data</div>
                        <div>
                            <div className="data-view__showdown--item paragraph">ID = {totalData.id}</div>
                            <div className="data-view__showdown--item paragraph">CLOSED = {totalData.closed}</div>
                            <div className="data-view__showdown--item paragraph">CLOSED AT = {totalData.closed_at}</div>
                            <div className="data-view__showdown--item paragraph">CREATED AT = {totalData.created_at}</div>
                            <div className="data-view__showdown--item paragraph">CREATED BY = {totalData.created_by}</div>
                            <div className="data-view__showdown--item paragraph">RESULT = {totalData.result}</div>
                            <div className="data-view__showdown--item paragraph">URL = {totalData.url}</div>
                            <div className="data-view__showdown--item paragraph">MIN = {totalData.min}</div>
                            <div className="data-view__showdown--item paragraph">MAX = {totalData.max}</div>
                            <div className="data-view__showdown--item paragraph">CURRENT = {totalData.current}</div>
                            <div className="data-view__showdown--item paragraph">TENDENCY = {totalData.tendency}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewData