export enum PlayerMode {
  Default = 'default',
  Vignette = 'vignette',
  SkipIntro = 'skip-intro',
  BingeModus = 'binge-modus',
  SponsOverlay = 'spons-overlay',
  FollowTeam = 'follow-team'
}


export type PlayerControlOptions = {
  play?: boolean,
  backward?: boolean,
  forward?: boolean,
  volume?: boolean,
  settings?: boolean,
  subtitles?: boolean,
  fullscreen?: boolean
  skipIntro?: boolean
  bingeMode?: boolean
}

export type PlayerOverlayOptions = {
  spons?: boolean,
  vignette?: boolean,
}

export type PlayerOptions = PlayerControlOptions & PlayerOverlayOptions