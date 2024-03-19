import trending from 'assets/trending.png'
import MusicList from 'components/MusicList'
import useSWR from 'swr'
import endpoint from 'utils/endpoint'
import fetcher from 'utils/fetcher'
export default function Trending() {
  const { data, isLoading } = useSWR(
    `${endpoint}/recommended-musics`,
    (arg: string) => fetcher(arg)
  )
  return (
    <div>
      <h1 className='h-20 text-center text-3xl sm:text-4xl lg:text-5xl text-white'>
        Trending <span className='text-primary'>musics</span> around you
      </h1>
      <div className='relative trending grid gap-x-3 xl:gap-x-8 gap-y-12  grid-cols-1 lg:grid-cols-2'>
        <div className='trending flex flex-col gap-2 mb-8 lg:mb-0'>
          <MusicList
            loading={isLoading}
            musics={data}
          />
        </div>
        <div className='flex order-first lg:order-last'>
          <img
            src={trending}
            className='object-cover size-full'
            alt='trending bg'
          />
        </div>
      </div>
    </div>
  )
}
