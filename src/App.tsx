import fairyVideo from './fairy.mp4'

const App: React.FC = () => {
  // handle double click to fullscreen
  const handleDoubleClick = () => {
    const video = document.querySelector('video')
    if (video) {
      video.requestFullscreen()
    }
  }

  return (
    <>
      <video
        src={fairyVideo}
        autoPlay
        loop
        muted
        className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
        onDoubleClick={handleDoubleClick}
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
      />
    </>
  )
}

export default App
