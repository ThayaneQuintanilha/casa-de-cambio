const endPoint = 'https://api.exchangerate.host/latest?base='

const fetchCurrency = async (coin) => {
  try {
    const api = `${endPoint}${coin}`
    const response = await fetch(api);
    const data = await response.json();
    return data

  }catch(error) {
    return error('Não consegui executar a busca da API!');
  }
}

fetchCurrency('BRL');