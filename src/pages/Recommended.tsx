import wave from 'assets/wave.png'
import RecList from 'components/RecList'
import withTransition from 'components/Transition'
import useSWR from 'swr'
import endpoint from 'utils/endpoint'
import fetcher from 'utils/fetcher'

export default function Recommended() {
  const { data, isLoading } = useSWR(
    `${endpoint}/recommended-musics`,
    (arg: string) => fetcher(arg)
  )
  return (
    <div className='relative'>
      <div className='absolute w-full z-50'>
        <h1 className='text-center text-xl sm:text-4xl h-16 text-white'>
          Recommended <span className='text-primary'>musics</span> for you
        </h1>
        {withTransition(
          <RecList
            loading={isLoading}
            musics={data}
          />
        )}
      </div>
      <div className='fixed text-white bottom-0 right-0 z-0'>
        <img
          className='brightness-50'
          src={wave}
          alt='wave'
        />
      </div>
    </div>
  )
}
