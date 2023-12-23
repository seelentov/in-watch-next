'use client'

import Custom404 from "@/app/not-found"
import { Player } from "@/components/Player/Player"
import { useRouter } from "next/navigation"
import styles from './PlayerPage.module.scss'

import { IoMdArrowRoundBack } from "react-icons/io"

export default function PlayerPage({ params }: { params: { slug: string[] } }) {

  const type = params.slug[0]
  const id = params.slug[1]
  const navigate = useRouter()
  const video = [...films, ...episodes].find(video => video._id === id)

  return (

    <div className={styles.main}>
      <button className={styles.back} onClick={() => navigate.back()}>
        <IoMdArrowRoundBack size={32} />
      </button>
      {video ? <Player content={video} /> : <Custom404 />}
    </div>

  )
}
