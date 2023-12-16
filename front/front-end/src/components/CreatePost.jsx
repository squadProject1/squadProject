import React,{useState} from 'react'
export default function CreatePost(props){
   console.log(props.changeView)
   const [title,setTitle]=useState('')
   const [content,setContent]=useState('')
   
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
            <button >Submit</button>
          </div>
        </form>
      </div>
  )
}