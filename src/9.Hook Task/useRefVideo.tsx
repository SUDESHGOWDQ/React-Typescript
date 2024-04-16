import React, { useState, useRef } from 'react';
import Video1 from './Hook Task/Karunada Tayi Sada Chinmayi Video Song - Kannada Rajyotsava Songs - SPB - Ravichandran Hits.mp4';

const App: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !playing;
    setPlaying(nextIsPlaying);

    if (ref.current) {
      if (nextIsPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }

  return (
    <>
      <button onClick={handleClick}>{playing ? 'Pause' : 'Play'}</button>
      <video src={Video1} height={'500px'} width="100%" ref={ref} onPlay={() => setPlaying(true)}></video>
    </>
  );
};

export default App;
