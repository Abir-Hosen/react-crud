import React, { useEffect, useState } from 'react';
import {create, update} from '../store/action'
import { useSelector, useDispatch } from 'react-redux';


function Form() {
    const dispatch = useDispatch();
    const { list, currentData, currentIndex} = useSelector((state) => state);
    const [data, setData] = useState({})

    useEffect(() => {

    }, [dispatch]);

    const createBook = () => {
        dispatch(create(data))
    }

    const updateBook = () => {
        // dispatch(update(data))
    }

    const setBookData = (e) => {
        if(e.target.id==='name') setData({...data, name: e.target.value})
        if(e.target.id==='author') setData({...data, author: e.target.value})
        if(e.target.id==='type') setData({...data, type: e.target.value})
    }

    const updateBookData = (e) => {
        if(e.target.id==='uname') setData({...data, name: e.target.value})
        if(e.target.id==='uauthor') setData({...data, author: e.target.value})
        if(e.target.id==='utype') setData({...data, type: e.target.value})
    }
    // if(currentIndex!=''){
    //     document.getElementById("uname").defaultValue = currentData.name;
    //     document.getElementById("uauthor").defaultValue = currentData.author;
    //     document.getElementById("utype").defaultValue = currentData.type;
    // }
    if(currentData && currentData.name!==null) document.getElementById("uname").defaultValue = currentData.name;
    if(currentData && currentData.author!==null) document.getElementById("uauthor").defaultValue = currentData.author;
    if(currentData && currentData.type!==null) document.getElementById("utype").defaultValue = currentData.type;

    console.log(list)

    return (
        <>
            <form>
                <div class="form-group">
                    <label for="name">Book Name</label>
                    <input type="text" class="form-control" id="name" onChange={setBookData} placeholder="Enter book name"></input>
                </div>
                <div class="form-group">
                    <label for="author">Author Name</label>
                    <input type="text" class="form-control" id="author" onChange={setBookData} placeholder="Enter book author name"></input>
                </div>
                <div class="form-group">
                    <label for="type">Types Name</label>
                    <input type="text" class="form-control" id="type" onChange={setBookData} placeholder="Enter book type name"></input>
                </div>
                <button type="button" onClick={createBook} class="btn btn-primary">CREATE</button>
            </form><br/><br/><hr/><br/><br/>

            <form>
                <div class="form-group">
                    <label for="name">Book Name</label>
                    <input type="text" class="form-control" id="uname" onChange={updateBookData} placeholder="Enter book name"></input>
                </div>
                <div class="form-group">
                    <label for="author">Author Name</label>
                    <input type="text" class="form-control" id="uauthor" onChange={updateBookData} placeholder="Enter book author name"></input>
                </div>
                <div class="form-group">
                    <label for="type">Types Name</label>
                    <input type="text" class="form-control" id="utype" onChange={updateBookData} placeholder="Enter book type name"></input>
                </div>
                <button type="button" onClick={updateBook} class="btn btn-primary">UPDATE</button>
            </form>
        </>
    )
}
export default Form