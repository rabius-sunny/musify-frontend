import MusicList from './MusicList'

type TProps = {
  loading: boolean
  musics: { title: string }[]
}
export default function RecList({ loading, musics }: TProps) {
  return (
    <div className='recommended max-w-xl mx-auto p-3 md:p-5 bg-white/20 rounded-xl shadow-lg shadow-white/20 z-10 flex flex-col gap-2'>
      <MusicList
        loading={loading}
        musics={musics}
      />
    </div>
  )
}
