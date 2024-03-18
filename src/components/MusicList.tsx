import Music from './Music'

type TProps = {
  loading: boolean
  musics: { title: string }[]
}

export default function MusicList({ musics, loading }: TProps) {
  return loading ? (
    Array.from({ length: 10 }, (i) => i).map((_i, j) => (
      <div
        key={j}
        className='min-h-24 md:min-h-28 rounded-lg animate-pulse bg-dark/40'
      />
    ))
  ) : musics?.length ? (
    musics.map(({ title }, idx) => (
      <Music
        title={title}
        key={idx}
      />
    ))
  ) : (
    <h1 className='flex items-center h-full justify-center text-primary text-xl font-bold'>
      No music found
    </h1>
  )
}
