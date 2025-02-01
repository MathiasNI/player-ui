import { useState } from "react";
import { PlayerMode } from "../../types/Player";
import { Switch } from "./Switch";

function modeButton(currentMode: PlayerMode, newMode: PlayerMode, setPlayerMode: (mode: PlayerMode) => void) {
  const active = newMode === currentMode
  return <button className={`bg-zinc-800 px-3 py-2 rounded-lg ${active ? 'text-indigo-200' : 'text-indigo-300'} ${active ? 'border border-indigo-200' : 'border-none'} cursor-pointer`} onClick={() => setPlayerMode(newMode)}>{newMode}</button>
}

export function Player() {
  const [playerMode, setPlayerMode] = useState<PlayerMode>(PlayerMode.Default)

  return (
    <div className="m-auto">
      <Switch playerMode={playerMode} />
      <div className="flex space-x-2 mt-2">
        {modeButton(playerMode, PlayerMode.Default, setPlayerMode)}
        {modeButton(playerMode, PlayerMode.Vignette, setPlayerMode)}
        {modeButton(playerMode, PlayerMode.SkipIntro, setPlayerMode)}
        {modeButton(playerMode, PlayerMode.BingeModus, setPlayerMode)}
        {modeButton(playerMode, PlayerMode.SponsOverlay, setPlayerMode)}
        {modeButton(playerMode, PlayerMode.FollowTeam, setPlayerMode)}
      </div>
    </div>
  )
}