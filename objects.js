var playlist = new Object({Darude: "Sandstorm"})

function updatePlaylist (playlist, artisName, songTitle) {
  return Object.assign({}, playlist, { [artisName]: songTitle })
}
