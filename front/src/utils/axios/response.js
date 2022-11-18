const isUnauthorized = async (axios, refreshToken) => {

   try {
    const res = await axios.get('/refresh', {
        headers: {
            'Authorization': `Bearer ${refreshToken || ""}`
        },
    })

    localStorage.setItem(`tokens`, JSON.stringify(res.data))
    
    return res

   } catch (error) {
    
    window.location = '/'

   }
}

module.exports = {
    isUnauthorized
}