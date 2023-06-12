import NavBar from '@/components/navbar/navbar';
import styles from '@/styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

// export async function getServerSideProps(context) {
//   const dataRegister = {
//     email,
//     password,
//     first_name,
//     last_name,
//   };
//   const response = await axios.get(`http://34.204.134.151:4000/api/users/register_email`, dataRegister);
//   const data = response.data;
//   return {
//     props: {
//       data
//     }
//   }
// }


export default function Register() {
  const initialState = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  }
  const [input, setInput] = useState(initialState);

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  };

  const router = useRouter();

  async function handleSubmit() {
    try {
      const response = await axios.post('http://34.204.134.151:4000/api/users/register_email', input);
      console.log(response.data);
      const userToken = response.data?.user_token
      document.cookie = `token-${response.data.id}=${userToken}`;
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  // // Para leer el valor de la cookie del usuario 1
  // const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token-usuario1\s*=\s*([^;]*).*$)|^.*$/, "$1");
  // console.log(cookieValue); 

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
        <input className={styles.input}
          type="text"
          name='first_name'
          value={input.first_name}
          placeholder='Nombre'
          onChange={(e) => handleOnChange(e)}
        />
        <input className={styles.input}
          type="text"
          name='last_name'
          value={input.last_name}
          placeholder='Apellido'
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={handleSubmit}>Registrarse</button>
      </div>
    </div>
  );
}