var playlist = {nirvana: 'come as you are', crumb:'locket'}
function updatePlaylist(artistName,songTitle){
  return Object.assign(playlist,{[artistName]:songTitle})
}

function removeFromPlaylist(object,key) {
  delete playlist[key]
  return playlist
}
