import Image from "next/image"
import {styles} from "@/components/header/header.module.css"

export default function Header() {

    return (
        <div>
            
          <Image src="/Rectangle.png" alt="Stalak phone" width={333.08} height={550} />
          <p>Stalak, una app para lograr hábitos</p>
            <p>Soy una red social que te acompaña a todos lados, te ayudo a establecer metas que se conviertan en hábitos para organizar tu vida.</p>
          <button>Descargar Stalak</button>
          <Image src="/index_1.png" alt="Stalak ios" width={182.59} height={61.55} />
          <Image src="/android_1.png" alt="Stalak android" width={224.21} height={92.84} />
        </div>
    )
  }