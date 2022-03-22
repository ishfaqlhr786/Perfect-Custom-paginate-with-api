import React,{useState,useEffect} from 'react'

export const Pagination = ({showPerPage,onPageChange,total,limit}) => {
    console.log(showPerPage)
    const [counter,setCouter]= useState(1)
    const [numberOfButtons,setNUmberOfButtons]=useState(Math.ceil(total/showPerPage))
    useEffect(()=>{
        console.log(counter)
        const value= showPerPage * counter;
        console.log("start value", value - showPerPage)
        console.log("end value", value)
        onPageChange(value-showPerPage,value)
    },[counter])
    useEffect(()=>{
        console.log("limit is",limit)
       // onPageChange(0,limit)
       setCouter(1)

    },[limit])
    const onButtonClick=(type)=>{
        if(type ==="prev"){
            if(counter === 1){
                setCouter(1)
            }else{
                setCouter(counter -1)
            }

        } else if(type==="next"){
     if(numberOfButtons === counter){
         setCouter(counter)

     }else{
         setCouter(counter +1)
     }
        }
    }
    return (
        <div>
           
            <nav aria-label="...">
  <ul className="pagination d-flex ">
    <li className={`page-item`}><a className="page-link" href="!#" onClick={()=> onButtonClick('prev')}>Previous</a></li>
    
   {
      new Array(Math.ceil(total/showPerPage)).fill("").map((el,index)=>{
       // new Array({numberOfButtons}).fill("").map((el,index)=>{
           return(<>
           <li className={`page-item ${index+1===counter ? 'active':null}`}>
               <a class="page-link" href="!#" onClick={()=> setCouter(index+1)}>
            {index +1}</a></li>
           </>)
        

        } )
          
   }
    <li class="page-item"><a class="page-link" href="!#" onClick={()=> onButtonClick("next")}>Next</a></li>
  </ul>
</nav>
            {/* <button className="btn btn-md btn-primary" >Previous</button>
            <button className="btn btn-md btn-primary" >Next</button> */}
        </div>
    )
}
