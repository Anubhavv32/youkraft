import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFullList } from '../Redux/action';

import ListCard  from "./ListCard";


function Main({list, countryList, imageList, getFullList}) {
    console.log(list);
    useEffect(() => {
        if(!list.length) getFullList()
    }, []);
  return (
    <div className="mt-5">
        <ListCard listObj={list} countryList={countryList} imageList={imageList}/>
      
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

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Main));
