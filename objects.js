var playlist = {nirvana: 'come as you are', crumb:'locket'}
function updatePlaylist(object,key,song){
  return Object.assign({},object,{key:song})
}
function removeFromPlaylist(object,key) {
  delete object['key']
  return object
}
