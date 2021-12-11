import React,{useState} from 'react'
import image from '../asset/image/Forms-rafiki.png'

export default function SignIn() {
    var email=JSON.parse(localStorage.getItem('email'))
    var pass=JSON.parse(localStorage.getItem('pass'))
    var username=JSON.parse(localStorage.getItem('username'))

    const [signIn, setSignIn] = useState({email:'',password:''})
    const [welcom, setWelcom] = useState(false)
   
    const singnIn =(e,type)=>{
        setSignIn({
            ...signIn,
            [e.target.type]:e.target.value
        })
       

    }
    const login=(e)=>{
        e.preventDefault()
        signIn.email===email&&signIn.password===pass?setWelcom(true):setWelcom(false)
       
       
    }
    return (
        <div className='form-main'>

            <div className='img-box'>
                <img className='img' src={image} alt='image' />
             </div>

            <form className='form' action=''>
              {
                   welcom &&(<div > <p className='sucsses'>Wlcom {username}</p></div>)}

                   { !welcom&& <div ><p className='text-danger'>The amount entered is incorrect </p></div>
              }
                <h5>email</h5>
                <input type='email' name='email' placeholder='email' className='input' value={signIn.email} onChange={(e)=>{singnIn(e)}} />
                <h5>password</h5>
                <input type='password' name='password' placeholder='password' className='input' value={signIn.password} onChange={(e)=>{singnIn(e)}}/>
                <div className='btn-box'>
                <button  className='button' onClick={(e)=>login(e)}>Sign In </button>
                
                </div>
            </form>
        </div>
    )
}
