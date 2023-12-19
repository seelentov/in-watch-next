'use client'


import Film from '@/core/models/Film';
import Lib from '@/core/models/Lib';
import Series from '@/core/models/Series';
import { films as myFilms } from '@/test/data/films';
import { FC, PropsWithChildren, createContext, useState } from 'react';
interface ILibContext {
  lib: Lib,
  setLib: (arg0: Lib) => void
  addFilmToLib: (arg0: Film) => void
  addSeriesToLib: (arg0: Series) => void
  delFilmFromLib: (arg0: string) => void
  delSeriesFromLib: (arg0: string) => void
  pushReceit: (arg0: Film | Series) => void
}

export const LibContext = createContext({} as ILibContext)

export const LibProvider: FC<PropsWithChildren> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([myFilms[0]])
  const [series, setSeries] = useState<Series[]>([])
  const [receit, setReceit] = useState<(Film | Series)[]>([])

  const lib: Lib = {
    films,
    series,
    receit
  }

  const setLib = (lib: Lib) => {
    setFilms(lib.films)
    setSeries(lib.series)
  }

  const addFilmToLib = (newFilmId: Film) => {

    setFilms(prev => [...prev, newFilmId])
  }

  const delFilmFromLib = (delFilmId: string) => {
    setFilms(prev => prev.filter(film => film._id !== delFilmId))
  }

  const addSeriesToLib = (newSeriesId: Series) => {
    setSeries(prev => [...prev, newSeriesId])
  }

  const delSeriesFromLib = (delSeriesId: string) => {
    setSeries(prev => prev.filter(series => series._id !== delSeriesId))
  }

  const pushReceit = (newObjectId: Series | Film) => {
    setReceit(prev => [...prev.slice(-4), newObjectId])
  }

  return <LibContext.Provider value={{ lib, setLib, addFilmToLib, addSeriesToLib, delSeriesFromLib, delFilmFromLib, pushReceit }}>
    {children}
  </LibContext.Provider>;
}