import { createContext, useEffect, useState } from 'react';

import { api } from '../services';
import { Event, Type } from '../types';

type Data = {
  events: Event[]
  types: Type[]
}

type FetchProviderData = {
  data?: Data
  isLoading: boolean
}

type FetchProviderProps = {
  children: React.ReactNode
}

const FetchContext = createContext<FetchProviderData>({} as FetchProviderData)

const FetchProvider = ({ children }: FetchProviderProps) => {
  const [data, setData] = useState<Data>()
  const [isLoading, setIsLoading] = useState(true)

  const getDatas = async () => {
    const [{ data: events }, { data: types }] = await Promise.all([
      api.get('events'),
      api.get('tipo'),
    ])

    setData({ events, types })
    setIsLoading(false)
  }

  useEffect(() => {
    getDatas()
  }, [])

  return (
    <FetchContext.Provider value={{ data, isLoading }}>
      {children}
    </FetchContext.Provider>
  )
}

export { FetchContext, FetchProvider }
