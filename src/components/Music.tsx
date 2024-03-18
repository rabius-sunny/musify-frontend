import { ChevronFirst, ChevronLast, Play, Repeat, Shuffle } from 'lucide-react'
import music from 'assets/music.png'

export default function Music({ title }: { title: string }) {
  return (
    <div className='flex items-start gap-2 border border-white/20 rounded-lg p-2 md:p-4 min-h-24 md:min-h-28'>
      <img
        className='size-16 md:size-20'
        src={music}
        alt='music'
      />
      <div className='w-full'>
        <h2 className='text-base font-light tracking-wide'>{title}</h2>
        <p className='text-[0.7rem] sm:text-xs uppercase font-medium tracking-widest'>
          lorem ipsum
        </p>
        <div className='flex items-center gap-14 mt-4'>
          <Shuffle className='size-5' />
          <div className='flex gap-4'>
            <ChevronFirst className='size-5' />
            <Play className='size-5' />
            <ChevronLast className='size-5' />
          </div>
          <Repeat className='size-5' />
        </div>
      </div>
    </div>
  )
}
