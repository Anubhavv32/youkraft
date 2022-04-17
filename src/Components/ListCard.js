import React, { useState, useEffect, useCallback, useRef } from "react";
import { NavLink } from 'react-router-dom';
import useFetch from "./useFetch";

function ListCard({ listObj, imageList, fromCountryPage }) {
    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(page, listObj);
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);
    // console.log(list);
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {list.length ? list.map((item, i) => (
                <div
                    className="col mb-4"
                    key={String(i) + item.Brand + String(item.stars)}
                >
                    <div className="card">
                        {fromCountryPage ?
                            <NavLink to = {`/brand/${(item.Brand).replace(/\s+/g , "-")}`}><img src={item.Image} className="card-img-top" alt="" /></NavLink>
                            : <img src={item.Image} className="card-img-top" alt="" />}
                        <div className="card-body">
                            <h5 className="card-title">{item.Brand}</h5>
                            <p className="card-text">
                                {item.Variety}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Variety: </small>{item.Variety}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Country: </small><NavLink to={`/country/${item.Country}`}><b>{item.Country}</b></NavLink>
                        </div>
                    </div>
                </div>
            )) : null}
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
        </div>
    );
}

export default React.memo(ListCard);
