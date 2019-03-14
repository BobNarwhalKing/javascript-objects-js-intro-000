var playlist = new Object({Darude: "Sandstorm"})

function updatePlaylist (playlist, artisName, songTitle) {
  return playlist[artisName] = songTitle
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName
  return playlist
}
