
import Custom404 from "@/app/not-found"
import { Player } from "@/components/Player/Player"
import styles from './PlayerPage.module.scss'

import { getOne, getOneAndWatch } from "@/core/api/movies.api"
import { Metadata } from "next"


interface IPlayerPageProps {
  params: { id: string }
}

export async function generateMetadata(
  { params }: IPlayerPageProps
): Promise<Metadata> {
  const id = params.id

  const film = await getOne(id)
  return {
    title: film.name,
    description: film.description,
  }
}


export default async function PlayerPage({ params }: IPlayerPageProps) {

  const id = params.id

  return (

    <div className={styles.main}>
     <Player id={id} />
    </div>

  )
}
