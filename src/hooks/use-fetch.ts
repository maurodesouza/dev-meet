import { useContext } from 'react'
import { FetchContext } from '../context'

const useFetch = () => useContext(FetchContext)

export { useFetch }
