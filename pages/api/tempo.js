async function tempo(request, response) {
    const dynamicDate = new Date();
    const apiSecret = process.env.CONVERTKIT_API_SECRET;

   //const subscribersResponse = await fetch(`http://localhost:3000/tempo`)
    //const subscribersResponseJson = await subscribersResponse.json()
    //const inscritos = subscribersResponseJson.date;

    response.json({
        date: dynamicDate,  
        
    })
}

export default tempo