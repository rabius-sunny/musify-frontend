import RecList from 'components/RecList'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import endpoint from 'utils/endpoint'
import fetcher from 'utils/fetcher'

export default function SearchResult() {
  const { searchKey } = useParams()
  const { data, isLoading } = useSWR(
    `${endpoint}/search-music?q=${searchKey?.split('-').join(' ')}`,
    (arg: string) => fetcher(arg)
  )

  return (
    <div>
      <h1 className='text-center text-cyan-400 text-xl sm:text-3xl h-16'>
        Results for <span className='text-primary pl-2'>{searchKey}</span>
      </h1>
      <RecList
        loading={isLoading}
        musics={data}
      />
    </div>
  )
}
