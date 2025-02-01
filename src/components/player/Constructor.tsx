import { PlayerOptions } from '../../types/Player'
import { Backward, Forward, Frame, Center, Fullscreen, LowerLeftCorner, LowerRightCorner, Play, Settings, Spons, Subtitles, Volume, SkipIntro, BingeMode, Vignette } from './components'


export function Constructor({ play, backward, forward, volume, settings, subtitles, fullscreen, skipIntro, bingeMode, spons, vignette }: PlayerOptions) {
  return (
    <Frame>
      <Center>
        {vignette && <Vignette />}
      </Center>
      <LowerLeftCorner>
        {play && <Play />}
        {backward && <Backward />}
        {forward && <Forward />}
        {volume && <Volume />}
      </LowerLeftCorner>
      <LowerRightCorner>
        {settings && <Settings />}
        {subtitles && <Subtitles />}
        {fullscreen && <Fullscreen />}
        {spons && <Spons />}
        {skipIntro && <SkipIntro />}
        {bingeMode && <BingeMode />}
      </LowerRightCorner>
    </Frame>
  )
}
