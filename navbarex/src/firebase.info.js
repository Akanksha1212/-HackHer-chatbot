
import db from './firebase.config';
import {useState,useEffect} from 'react';

function GetData() {
    const [names,setNames]=useState([])
    const fetchNames=async()=>{
      const response=db.collection('names');
      const data=await response.get();
      data.docs.forEach(item=>{
       setNames([...names,item.data()])
      })
    }
    useEffect(() => {
      fetchNames();
    }, [])
    return (
      <div className="App">
        {
          names && names.map(name=>{
            return(
              <div className="name-container" >
                <h4>{name.name}</h4>
                <p>{name.bName}</p>
              </div>
  
              
  
            )
          })
        }
        <div className="Testing"></div>
      </div>
  
      
  
    );
  }
  
  export default GetData;