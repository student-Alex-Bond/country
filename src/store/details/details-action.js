export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR =  '@@details/SET_ERROR'
export const SET_COUNTRY =  '@@details/SER_COUNTRY'
export const CLEAR_CURRENT_COUNTRY = '@@details/CLEAR_CURRENT_COUNTRY'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'


const setLoading = () => ({
    type: SET_LOADING
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

export const clearCurrentCountry = () => ({
    type: CLEAR_CURRENT_COUNTRY
})

const setNeighbors =(country) => ({
    type: SET_NEIGHBORS,
    payload: country
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading())

    client.get(api.searchByCountry(name)).then(({data})=> {
        dispatch(setCountry(data[0])).catch((err)=> {
            dispatch(setError(err.message))
        })
    })
}

export const loadNeighborsByBorder = (borders) => (dispatch, _, {client, api}) => {
client.get(api.filterByCode(borders)).then(({data})=> {
    dispatch(setNeighbors(data.map((c)=> c.name))).catch(console.error)
})
}