const getActions = async () => {
    const url = 'https://api.twelvedata.com/stocks?symbol=NFLX&source=docs';
    const response = await fetch(url);
    const responseJSON = await response.json();
    
    return responseJSON;
}

export default getActions