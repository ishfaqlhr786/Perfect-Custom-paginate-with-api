import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Pagination}  from './components/Pagination'
export const App = () => {
  const [posts,setPosts]=useState([]);
  const [limit,setLimit]=useState(10)
  const [showPerPage,setShowPerPage]= useState(limit)
  const [startPage,setStartPage]= useState(0)
  const [pagination,setPagination]=useState({
    start:0,
    end:showPerPage
  })
  
  const onPageChange=(start,end)=>{
   
    console.log(start,end)
    setPagination({start:start,end:end})
  }
  const handleLimit=(e)=>{
   e.preventDefault()
    setLimit(e.target.value)
    setShowPerPage(e.target.value)
    onPageChange(0,e.target.value)
   
   
  }
  console.log("limit is",limit)
 // setShowPerPage(limit)
  console.log("show per page is", showPerPage)
  console.log(posts)
  const FetchData=async()=>{
    const res= await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    console.log(res.data)
    setPosts(res.data)

  }
  console.log("posts ",posts)
 
 

 
useEffect(()=>{
   FetchData();
},[])
  return (
    <div className="App">
      <div className="row">
     {
       posts.slice(pagination.start,pagination.end).map(post=>{
         return (<>
         <div className="col-md-3 mb3" key={post.id}>
           <div className="card">
             <div className="card-body">
               <h3>postid#{post.id}  and{post.title}</h3>
               <p>
                 {post.body}
               </p>


             </div>
           </div>
         </div>
         </>)
       })
     }
      </div>
      <select style={{height:"50px"}}
              //  value={limit}
                name="limit"
              //  placeholder={placeholder}
                onChange={handleLimit}
                
              >
                <option value="select Limit">Select Rows on one page</option>
                <option value="10">10</option>
                <option value="20">
                  20
                  </option>
                <option value="5">5</option>
              </select>
      <Pagination showPerPage={showPerPage} onPageChange={onPageChange}
      total={posts.length} limit={limit}
      />
    </div>
  )
}
