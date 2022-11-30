async function pegarApi() {
  const response = await fetch('http://localhost:5000/api')
  const data = await response.json()
  return data
}