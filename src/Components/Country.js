import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";

import { getFullList } from '../Redux/action';

const ListCard = React.lazy(() => import("./ListCard"));


function Country({list, imageList, getFullList}) {
    console.log(list);
    let countryWiseList = [];
    useEffect(() => {
        if(!list.length) getFullList();
    }, [])
    const { pathname } = window.location;
    const country = pathname.split("/")[2];
    countryWiseList = list.filter(item => item.Country === country);
    const fromCountryPage = true;
  return (
    <div className="mt-5">
      <Suspense fallback={<div>Loading...</div>}>
        <ListCard listObj={countryWiseList}  imageList={imageList} fromCountryPage={fromCountryPage}/>
      </Suspense>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    countryList: state.countryList,
    imageList: state.imageList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      getFullList: () => dispatch(getFullList()),
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Country));