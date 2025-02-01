import { PlayerMode } from "../../types/Player";
import { Constructor } from "./Constructor";

export function Switch({ playerMode }: { playerMode: PlayerMode }) {
  switch (playerMode) {

    case PlayerMode.Default:
      return (
        <Constructor
          play
          backward
          forward
          volume
          settings
          subtitles
          fullscreen
        />
      )

    case PlayerMode.Vignette:
      return (
        <Constructor
          vignette
        />
      )

    case PlayerMode.SkipIntro:
      return (
        <Constructor
          play
          volume
          skipIntro
        />
      )

    case PlayerMode.BingeModus:
      return (
        <Constructor
          play
          volume
          bingeMode
        />
      )

    case PlayerMode.SponsOverlay:
      return (
        <Constructor
          play
          volume
          spons
        />
      )

    case PlayerMode.FollowTeam:
      return (
        <Constructor
        />
      )
  }
}
