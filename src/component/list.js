import React, { useEffect, useState } from 'react';
import {read, remove} from '../store/action'
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";


function List() {
    const dispatch = useDispatch();
    const { list, currentData} = useSelector((state) => state);
    const [data, setData] = useState({})

    useEffect(() => {

    }, [dispatch]);

    const readData = (id) => {
        console.log(id)
        dispatch(read(id))
    }

    const deleteData = (id) => {
        console.log(id)
        dispatch(remove(id))
    }

    return (
        <>
            <div className='container-fluid' style={{overflow: 'auto', height:'94vh'}}>

                <div className='row data-table1 header table-striped'>
                    <div className='col-md-4 col-lg-4 text-left'><b>Name</b></div>
                    <div className='col-md-4 col-lg-4 text-left'><b>Author</b></div>
                    <div className='col-md-3 col-lg-3 text-left'><b>Type</b></div>
                    <div className='col-md-1 col-lg-1 text-left'><b></b></div>
                </div>
                {
                    list.map((data, index) => 
                        <div className='row data-table1' key={index} onClick={()=>readData(index)}>
                            <div className='col-md-4 col-lg-4 text-left'>{index}-{data.name}</div>
                            <div className='col-md-4 col-lg-4 text-left'>{data.author}</div>
                            <div className='col-md-3 col-lg-3 text-left'>{data.type}</div>
                            <div className='col-md-1 col-lg-1 text-left' onClick={()=>deleteData(index)}><span class="material-icons">delete</span></div>
                        </div>
                )}
            </div>
        </>
    )
}
export default List