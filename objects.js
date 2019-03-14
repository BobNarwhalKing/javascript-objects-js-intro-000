var playlist = new Object({Darude: "Sandstorm"})

function updatePlaylist (playlist, artisName, songTitle) {
  return playlist[artisName] = songTitle
}
function removeFromPlaylist (playlist, artisName) {
  return delete playlist.artistName
}
