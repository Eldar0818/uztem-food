import LoginForm from '../../components/admins/LoginForm'
import styles from '../../styles/admin/adminlogin.module.css'

const login = () => {

  return (
    <div className={styles.loginpage}>
        <LoginForm/>
    </div>
  )
}

export async function getServerSideProps(ctx){

    const myCookie = ctx.req?.cookies || ""
    if(myCookie.token === process.env.TOKEN){
        return{
            redirect: {
                destination: "/admin",
                permanent: false
            }
        }
    }

    return{
        props:{
          message: "logged in"
        }
      }
}

export default login