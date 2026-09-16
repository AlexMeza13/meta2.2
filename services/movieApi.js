const API_KEY = '4699028' // Reemplaza con tu API key
const BASE_URL = 'https://www.omdbapi.com/'

const consultarApi = async (parametros) => {
    const consulta = new URLSearchParams({
        apikey: API_KEY,
        ...parametros
    })

    const response = await fetch(`${BASE_URL}?${consulta}`)

    if (!response.ok) {
        throw new Error('Error en la petición a la API')
    }

    return response.json()
}

export const searchMovies = async (params) => {
    return consultarApi({
        s: params.query,
        type: params.type || 'movie',
        y: params.year || '',
        page: params.page || 1
    })
}

export const getMovieDetails = async (imdbID) => {
    return consultarApi({
        i: imdbID,
        plot: 'full'
    })
}