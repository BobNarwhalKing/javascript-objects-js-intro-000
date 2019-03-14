var playlist = new Object({Darude: "Sandstorm"})

function updatePlaylist (playlist, artisName, songTitle) {
  return playlist[artisName] = songTitle
}
