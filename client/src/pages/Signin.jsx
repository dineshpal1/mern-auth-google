import { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';
export default function Signin() {
  const [formData, setFormData] = useState({});
  // const [error,setError]=useState(false)
  // const [loading,setLoading]=useState(false)
  const {loading,error}=useSelector((state)=>state.user)
  // console.log(loading,error)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
     try {
      // setLoading(true)
      // setError(false)
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      // setLoading(false)
      
      if(data.success===false){
        // setError(true)
        dispatch(signInFailure(data.message))
        return
      }
      // setError(false)
      dispatch(signInSuccess(data))
      navigate("/")
     } catch (error) {
      // setLoading(false)
      // setError(true)
      dispatch(signInFailure(error))
     }
    } 
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        /> */}
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
         disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ?'Loading':'Sign in'}
          
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error?error || "Something went wrong":""}</p>
    </div>
  );
}