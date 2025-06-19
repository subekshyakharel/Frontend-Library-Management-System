import React, { useState } from 'react'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { activateUserApi } from '../../services/authApi'
import Alert from 'react-bootstrap/Alert'
import { useRef } from 'react'

const VerifyUser = () => {
    const [isPending, setIsPending] = useState(true)
    const [searchParams] = useSearchParams()
    const [response, setResponse] = useState({});
    const shouldFetchRef = useRef(true)
    const navigate = useNavigate();

    const sessionId = searchParams.get("sessionId");
    const t = searchParams.get("t");
    console.log(sessionId, t)

    useEffect(()=>{
      // const callActivateUser = async()=>{
        //   const result= await activateUserApi({sessionId, t})
        // }
        // callActivateUser();
        
        if(sessionId && t && shouldFetchRef.current){
           (async()=>{
          const result= await activateUserApi({sessionId, t})
          setResponse(result)
          setIsPending(false)
          
        })();
        shouldFetchRef.current = false
        }
       if(response.status==="success"){
        setTimeout(()=>{
          navigate("/login")
        }, 1000)
       }
      },[sessionId, t, response.status, navigate])
  return (
    <div className='py-5 p-5'>
        {isPending && 
        <div className='m-auto text-center my-5' style={{width:"450px"}}>
            {/* spinner  */}
            <div>
                 <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
            </div>
           Please do not go back or refresh the browser. Please wait... 
            </div>}

{
  response?.message && <Alert className='text-center' variant={response.status === "success"? 'success' : 'danger'}>{response.message}</Alert>
  }
            
    </div>
  )
}

export default VerifyUser