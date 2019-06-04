export const fetchPokemon = async (url) => {
  const response = await fetch(url);
  if(!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

// name(pin): "pidgey"
// id(pin): "16"
// type(pin): "1"
// weight(pin): 18