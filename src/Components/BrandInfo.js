import React, {useEffect} from "react";
import { Navigate } from 'react-router-dom';

function BrandInfo(props) {
    console.log(props)
//     const {list} = props;
//     console.log(list);
//     let countryWiseList = [];
//     useEffect(() => {
//         if(!list.length) getFullList();
//     }, [])
//     const { pathname } = window.location;
//     const country = pathname.split("/")[2];
//     countryWiseList = list.filter(item => item.Country === country);
// const brandInfo = props.location.brandInfo;
// if(!brandInfo) {
//     return <Navigate replace to="/"/>
//  } 
  return (
    <div>kkkkkk
      {/* <div className="card text-center">
        <div className="card-header">{brandInfo.Brand}</div>
        <div className="card-body">
            <img src={brandInfo.Image} alt="" />
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
           {brandInfo.Variety}
          </p>
        </div>
        <div className="card-footer text-muted">{brandInfo.Country}</div>
      </div> */}
    </div>
  );
}
  export default React.memo(BrandInfo);

