import React,{useState} from 'react';
import {Paper,TextField} from '@material-ui/core';

const SearchBar=({searchHandler}) =>{
    const[text,setText] =useState('');

    const onSubmitHandler=(e)=>{
        
        e.preventDefault();
        searchHandler(text);
        setText('');
      
    } 

    return (
        
          <Paper elevation={6} style={{padding:'25px'}}>
            <form onSubmit={onSubmitHandler}>
                <TextField fullWidth label="Search Videos...." onChange={(e)=>setText(e.target.value)}    />
            </form>
          </Paper>
        
    )
}

export default SearchBar;
