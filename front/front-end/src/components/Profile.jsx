import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import CreatePost from './CreatePost.jsx'
import SingleUser from './SingleUser.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
export default function Profile(){
   const [userData,setUserData]=useState({})
   const [followers,setFollowers]=useState(0)
   const [photo,setPhoto] = useState('')
   const [refresh,setRefresh]=useState(false)
    useEffect(()=>{
      
      axios.get('http://localhost:3001/api/oneUser/4').then((message)=>{
        setUserData(message.data[0])
       
      }).catch((err)=>console.log('there is error',err.message))
              setUser(userData.userName)
            testConnected(userData.userStatus)
        setEmail(userData.userEmail)
        setPhoto(userData.userPic)
        setFollowers(userData.userFollowers)
    },[refresh])
    
 
  const [phoclicked,setPhoclicked]=useState(false)
    const [view,setView]=useState('singleuser')
    const [user,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [addBiographie,setAddBiographie]=useState(false)
    const [bioContent,setBioContent]=useState('')
    const [phone,setPhone]=useState('')
    const [validPhone,setValidPhone]=useState(false)
    const [connected,setConnected]=useState(false)


const updatePhoto = ()=>{
  setPhoclicked(true)
  
}
const sendUpdates  = ()=>{
  const picture = photo
  console.log(picture)
 axios.put('http://localhost:3001/api/updateUserPhoto/',{userPic:picture}).then((results)=>console.log(results)).catch((err)=>console.log('there is an err on picture updating',err))
}
       const addBio = ()=>{
        console.log(bioContent)
        setAddBiographie(false)
        let updatedBio = bioContent
        axios.put('http://localhost:3001/api/updateUserBio/2',{userBio:updatedBio}).then((updated)=>console.log(updated.data))
        .catch((error)=>console.log('error on  updating',error))
       }
    const addPhone = (event)=>{
        setPhone(event.target.value)
        console.log(phone)
        if(phone.length===7){
            console.log(phone.length)
            setValidPhone(true)
        }
       

    }
const testConnected = (status)=>{
    
    console.log(  userData.userStatus)
    if(status !=='online'){
      setConnected(false)
    }
    else setConnected(true)
}

    const changeView =(view)=>{
        setView(view)
    }
    if(view==='')
    return (
       
        <div>
          
        <div className="modal" tabIndex="-1">
        <FontAwesomeIcon onClick={()=>{setRefresh(true)}} icon={faSync} />
        <div className="modal-dialog">
        <h2>followers: {followers} </h2>
            <img onClick={()=>{updatePhoto()}} className ='rounded' src= {photo} alt="no-content" />
           {phoclicked&& <div><input type="text" onChange={(e)=>{setPhoto(e.target.value)}} /> <button onClick={()=>{sendUpdates()}} >validate</button> </div>  }
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title"> {user} </h2>
              <button type="button" className="add-biog" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setAddBiographie(true)}} >add a biographie</button>

              {addBiographie&& <div>
                <textarea name="biographie" id="bio-text" cols="30" rows="10" onChange={(e)=>setBioContent(e.target.value)}></textarea>
                <button className='add-biog' onClick={()=>{addBio()}}>add</button>
                </div>}
                <div className="connected">
   
    
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
    else if(view==="singleuser"){return <SingleUser userData={userData} /> }
}