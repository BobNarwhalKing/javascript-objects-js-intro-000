var playlist = new Object({Darude: "Sandstorm"})

function updatePlaylist (playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}
function removeFromPlaylist (playlist, artistName) {
  return delete playlist.artistName
}
