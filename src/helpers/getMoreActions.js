const getMoreActions = async () => {
    const url = 'https://api.twelvedata.com/stocks?source=docs&exchange=NYSE';
    const response = await fetch(url);
    const responseJSON = await response.json();
    const respuesta = responseJSON.data.slice(0,20).map((item) => {

        const data = [{
            label:item.name,   
            value:item.name,   
        }]

        return data[0];
    })
    

    return respuesta;
}

export default getMoreActions