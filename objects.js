var playlist = {nirvana: 'come as you are', crumb:'locket'}
function updatePlaylist(key,song){
  return Object.assign({},playlist,{key:song})
}
function removeFromPlaylist(object,key) {
  delete playlist['key']
  return playlist
}
