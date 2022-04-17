import React  from "react";
import { Navigate, useLocation } from 'react-router-dom';

function BrandInfo(props) {
    const location = useLocation();
    const brandInfo = location.state;
    console.log(brandInfo)
if(!brandInfo) {
    return <Navigate replace to="/"/>
 } 
  return (
    <div>kkkkkk
      <div className="card text-center">
        <div className="card-header">{brandInfo.Brand}</div>
        <div className="card-body">
            <img src={brandInfo.Image} alt="" />
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
           {brandInfo.Variety}
          </p>
        </div>
        <div className="card-footer text-muted">{brandInfo.Country}</div>
      </div>
    </div>
  );
}
  export default React.memo(BrandInfo);

