import NavBar from '@/components/navbar/navbar';
import styles from '@/styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';

// export async function getServerSideProps(context) {
//   const response = await axios.get(`http://localhost:4000/api/users/email_login`, dataRegister);
//   const data = response.data;
//   return {
//     props: {
//       data
//     }
//   }
// }


export default function Login2() {
  const initialState = {
    email: "",
    password: "",
  }
  const [input, setInput] = useState(initialState);

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const router = useRouter();

  async function handleSubmit() {
    try {
      const response = await axios.post('http://localhost:4000/api/users/email_login', input);
      console.log(response.data);
      //router.push('/feedUsuario')
    } catch (error) {
      throw new Error(`Error obteniendo datos del back (llamado login); error: ${error}`)
    }
  }

  return (
    <div>
      <NavBar justify="center" />
      <div className={styles.container}>
        <input className={styles.input}
          type="text"
          name='email'
          value={input.email}
          placeholder='Email'
          onChange={(e) => handleOnChange(e)}
        />
        <input className={styles.input}
          type="password"
          name='password'
          value={input.password}
          placeholder='Contraseña'
          onChange={(e) => handleOnChange(e)}
        />
        <button className={styles.button} onClick={handleSubmit}>Iniciar sesión</button>
        <p>¿Olvidaste la contraseña?</p>
        <Link href="/register">
          <button >Registrarse</button>
        </Link>
      </div>
    </div>
  );
}