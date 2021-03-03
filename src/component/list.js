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

    const readData = (e) => {
        console.log(e.target.id)
        dispatch(read(e.target.id))
    }

    const deleteData = (e) => {
        console.log(e.target.id)
        dispatch(remove(e.target.id))
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
                        <div className='row data-table1' key={index} id={index} onClick={readData}>
                            <div className='col-md-4 col-lg-4 text-left' id={index}>{index}-{data.name}</div>
                            <div className='col-md-4 col-lg-4 text-left' id={index}>{data.author}</div>
                            <div className='col-md-3 col-lg-3 text-left' id={index}>{data.type}</div>
                            <div className='col-md-1 col-lg-1 text-left' id={index} onClick={deleteData}><span onClick={deleteData}  id={index} class="material-icons">delete</span></div>
                        </div>
                )}
            </div>
        </>
    )
}
export default List