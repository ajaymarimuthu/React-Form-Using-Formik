import React from 'react'
import { useFormik } from 'formik';
import './Form.css'

function Form() {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password: ''
        }
    })

    console.log('values:' ,formik.values );

    return (
        <div className='container'>

            <form className='form'>

                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />


                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />

                <button>Submit</button>



            </form>


        </div>
    )
}

export default Form