import herobg from 'assets/herobg.webp'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-center'>
        <div className='text-center lg:text-start grid gap-8'>
          <h1 className='text-5xl text-white lg:text-7xl font-bold tracking-wide'>
            Worlds best <span className='text-primary'>Musics</span> only on{' '}
            <span className='text-primary'>Musify</span>
          </h1>
          <p className='md:text-xl'>
            Discover amazing musics that reveal another meaning of your life.
            Enjoy a large collection of the best musics ever.
          </p>
          <div className='lg:w-[60%] xl:w-2/5'>
            <Link
              to='/recommended'
              className='flex items-center gap-4 bg-primary text-white font-medium rounded-full px-4 py-2 md:px-6 md:py-4 shadow-lg shadow-white/10 justify-center'
            >
              Recommended music <ArrowRight />
            </Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <img
            src={herobg}
            alt='hero image'
          />
        </div>
      </div>
    </div>
  )
}
