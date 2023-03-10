import styles from '@/components/post.module.css'
import Image from 'next/image';
// import { FaShare, HiOutlineHandRaised, FaRegCommentDots } from 'react-icons/fa';


export default function PostCard({props}) {


console.log(props);
  return (
    <>
      <h1>¡Hola, {props.data.user.name}!</h1>
      <p>Empecemos bien el día</p>
      <div className={styles.content}>
      <h1>{`${props.data.user.name} ${props.data.user.last_name}`}</h1>
      <Image src={props.data.image_url} alt={props.data.habit_name} width={350} height={500} />
      <div>
        <p>Yo también lo hice</p>
        {/* <HiOutlineHandRaised/> */}
        <p>Comentar</p>
        {/* <FaRegCommentDots/> */}
        <p>Compartir</p>
        {/* <FaShare/> */}
      </div>
      </div>
    </>
  )
}