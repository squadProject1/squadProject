import React,{useState,useEffect}  from 'react'
import CreatePost from './CreatePost.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function Profile(){
   
    useEffect(()=>{
        setUser('zakaria')
        setEmail('fake-email@gmail.com')
    },[])

    const [view,setView]=useState('')
    const [user,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [addBiographie,setAddBiographie]=useState(false)
    const [bioContent,setBioContent]=useState('')
    const [phone,setPhone]=useState('')
    const [validPhone,setValidPhone]=useState(false)
    const [connected,setConnected]=useState(false)
const [followers,setFollowers]=useState(0)


       const addBio = ()=>{
        console.log(bioContent)
        setAddBiographie(false)
       }
    const addPhone = (event)=>{
        setPhone(event.target.value)
        console.log(phone)
        if(phone.length===7){
            console.log(phone.length)
            setValidPhone(true)
        }
       

    }
const testConnected = ()=>{
    setConnected(!connected)
}

    const changeView =(view)=>{
        setView(view)
    }
    if(view==='')
    return (
       
        <div>
          
        <div className="modal" tabIndex="-1">
            
        <div className="modal-dialog">
        <h2>followers: {followers} </h2>
            <img className ='rounded' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/396967384_2073193743034360_1322149233104091581_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=xMIWjFQDTnIAX982Bab&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBv_k2RoI6baWb944P9FADoDM2F-h4zh_zlaEgq73lXRQ&oe=657D745B" alt="no-content" />
           
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title"> {user} </h2>
              <button type="button" className="add-biog" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setAddBiographie(true)}} >add a biographie</button>

              {addBiographie&& <div>
                <textarea name="biographie" id="" cols="30" rows="10" onChange={(e)=>setBioContent(e.target.value)}></textarea>
                <button className='add-biog' onClick={()=>{addBio()}}>add</button>
                </div>}
                <div className="connected">
   
    {/* You can place the icon next to connected text */}
    {connected ? (
        <div>
        <span className="connected-text">connected</span>
        <FontAwesomeIcon className='connected-icon' icon={faLink} />
        </div>
      ) : (<div>
        <span className="not-connected-text">not-connected</span>
        <FontAwesomeIcon className='not-connected-icon' icon={faLink} />
        </div>
      )}
   
  </div>
            </div>
            <div className="modal-body">
             <span>the biographie here:</span>
             {!addBiographie&& <h5>
                {bioContent}
             </h5> }
             
            </div>
           
          </div>
        </div>

      </div>
     
      <ul className="nav nav-underline selection">
  <li className="nav-item">
    <button className="nav-link add-bio" aria-current="page" href="#">Posts</button>
  </li>
  <li className="nav-item">
    <button className="nav-link add-bio" >Total likes</button>
  </li>
  <li className="nav-item">
    <button className="nav-link add-bio" onClick={()=>{changeView("create")}}>+ add a new post</button>
  </li>
  
</ul>
  <button onClick={()=>{testConnected()}} >test change status connected button</button>
  <footer className="profile-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About {user} </h4>
          
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: {email}</p>
          <div>
            {validPhone&& <p> +216 {phone} </p> }
            {!validPhone&& <div><span>add a phone number here:</span>
            <input type='text'  onChange={(e)=>{addPhone(e)}} /></div> }
          </div>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-media-links">
            <li> <FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 YourProfile. All Rights Reserved.</p>
      </div>
    </footer>
      </div>
      
    )
    else if(view==="create")
        return <CreatePost changeView ={changeView} />
    
}