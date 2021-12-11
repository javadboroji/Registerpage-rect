import React,{useState} from 'react'
import image from '../asset/image/Forms-rafiki.png'
import { Link } from 'react-router-dom'
export default function Form() {

    const [input, setInput] = useState({text:'',email:'',password:''})
    const [submite, setSubmite] = useState(false)
    const [Error, setError] = useState(false)
   const inputHandler=(e,type)=>{
      setInput({
          ...input,
         [e.target.type]:e.target.value,
         
      })  
   }
   const submiteHandler =(e)=>{
    
    if(input.text==='' || input.email===''||input.password===''){
        setError(true)
        setSubmite(false)
    }else{
        setSubmite(true)
        setError(false)
        localStorage.setItem('email',JSON.stringify(input.email))
        localStorage.setItem('pass',JSON.stringify(input.password))
        localStorage.setItem('username',JSON.stringify(input.text))
    }
    setInput({password:'',email:'',text:''})
   
   }
    const keyPress=()=>{
        
            setSubmite(false) 
            setError(false)
  
      
    }
    return (
        
        <div className='form-main'>
           
             <div className='img-box'>
             <img className='img' src={image} alt='image' />
             </div>
            <form className='form' action=''>
                {Error&&<div > <p className='text-danger'>please check input value</p></div>}

                {submite&&<div ><p className='sucsses'> your Register sucsses!</p></div>}

                <h5>name</h5>
                <input type='text' name='user' placeholder='name' value={input.text} onChange={(e)=>inputHandler(e,"text")} onKeyPress={keyPress}  className='input'/>
                <h5>email</h5>
                <input type='email' name='email' placeholder='email' value={input.email} onChange={(e)=>inputHandler(e,"email")} onKeyPress={keyPress}  className='input'/>
                <h5>password</h5>
                <input type='password' name='password' placeholder='password' value={input.password} onChange={(e)=>inputHandler(e,"password") } onKeyPress={keyPress} className='input'/>
                <div className='btn-box'>
                <button onClick={(e)=>submiteHandler(e)} className='button'>Register </button>
                <Link className='btn-box w-100' to="/sign"><button className='button'> Sign In </button></Link>
                </div>
            </form>
        </div>
    )
}
