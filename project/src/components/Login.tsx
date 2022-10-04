import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { login } from '../services'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [submitStatus, setSubmitStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const validationSchema = Yup.object({
    email: Yup.string().required().email().min(5),
    password: Yup.string().required().min(4)
  })

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
        email: '',
        password: '',
        remember: false
    },
    validationSchema: validationSchema,
    validate(values) {

        if ( submitStatus ) {
            if ( errors.email ) {
                setErrorMessage(errors.email)
            }else if ( errors.password ) {
                setErrorMessage(errors.password)
            }else {
                setErrorMessage('')
            }
        }
        
    },
    onSubmit:(values) => {
        login( values.email, values.password ).then( res => {
            const user = res.data.user[0]
            const bilgiler = user.bilgiler
            if ( user.durum && bilgiler ) {
                const stBilgi = JSON.stringify( bilgiler )
                sessionStorage.setItem('user', stBilgi)
                navigate('/dashboard')
            } else {
                setErrorMessage( user.mesaj )
            }
        })
    }
  })  


  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                { errorMessage !== '' &&  
                    <div className="alert alert-danger" role="alert">
                        { errorMessage }
                    </div>
                }
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleChange} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onChange={handleChange} name='remember' type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={ ()=> setSubmitStatus(true) } type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login