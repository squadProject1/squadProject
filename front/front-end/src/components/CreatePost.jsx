import React,{useState} from 'react'
import axios from 'axios'
export default function CreatePost(props){
  
   const [title,setTitle]=useState('')
   const [content,setContent]=useState('')
   const [toPost,setToPost]=useState({})
   const handlePost = (event)=>{
    event.preventDefault()
    console.log('handle posts works!',title,content)
     setToPost({title:title,content:content})
     console.log(toPost)
    axios.post("http://localhost:3001/addPost",toPost).then((posted)=>{
      console.log('posted succecssfully',posted.data)
    }).catch(err=>console.log(err.message))
   

    
   }
     return(
        <div className="article-form-container">
        <h2>Add a new Post</h2>
        <form className="article-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required  onChange={(e)=>{setTitle(e.target.value)}} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" rows="8" onChange={(e)=>{setContent(e.target.value)}} required></textarea>
          </div>
          <div className="form-group">
            <button onClick={()=>{props.changeView('')}} >close</button>
            <button onClick={(e)=>handlePost(e)} >Submit</button>
          </div>
        </form>
      </div>
  )
}