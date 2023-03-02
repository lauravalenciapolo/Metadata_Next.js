import styles from '@/styles/Home.module.css'
import Image from 'next/image';


export default function PostCard({props}) {


console.log(props);
  return (
    <>
      <h1>¡Hola, {props.data.user.name}!</h1>
      <p>Empecemos bien el día</p>
      <h3>{`${props.data.user.name} ${props.data.user.last_name}`}</h3>
      <Image src={props.data.image_url} alt={props.data.habit_name} width={500} height={500} />
      <div>
        <p>Yo también lo hice</p>
        <p>Comentar</p>
        <p>Compartir</p>
        <input type="text"/>
      </div>
    </>
  )
}