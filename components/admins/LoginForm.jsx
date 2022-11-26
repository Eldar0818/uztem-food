import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/admin/adminlogin.module.css'
import { adminLogin } from '../../util/baseUrl'

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(false)
    const router = useRouter()

    const handleLogin = async(e) => {
        e.preventDefault()
        let inputs = {
            username, password
        }
        try {
            await adminLogin(inputs)
            router.push('/admin')
        } catch (error) {
            setErrorMessage(true)
        }
    }

  return (
        <div className={styles.loginformbox} >
            <h3>Admin Login</h3>
            <form onSubmit={handleLogin}>
                <div className={styles.inputcontroll}>
                    <label>Username: </label>
                    <input type="text" required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.inputcontroll}>
                    <label>Password: </label>
                    <input type="Password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.loginbtnbox}>
                    <button className={styles.loginbtn}>Login</button>
                </div>
            </form>
            {
                errorMessage && <p className={styles.errormessage}>Incorrect account inputs!</p>
            }     
        </div>
  )
}

export default LoginForm