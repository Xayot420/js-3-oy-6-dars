const joylashuv = document.getElementById("btn");
const box = document.getElementById("card");

async function getLocation() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=09dfe3fc63fe66'); 
        const data = await response.json();

        const mapUrl = `https://maps.google.com/maps?q=${data.loc}&z=12&output=embed`;

        box.innerHTML = `
            <p><strong>Ip :</strong> ${data.ip}</p>
            <p><strong>Country :</strong> ${data.country}</p>
            <p><strong>Region :</strong> ${data.region}</p>
            <p><strong>City :</strong> ${data.city}</p>
            <p><strong>Timezone :</strong> ${data.timezone}</p>
            <iframe 
                width="100%" 
                height="300" 
                style="border:0; margin-top:10px; border-radius:10px;"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="${mapUrl}">
            </iframe>
        `;
    } catch (error) {
        console.error('Error:', error);
        box.innerHTML = `<p style="color: red;">Ma'lumotni yuklab bo'lmadi</p>`;
    }
}

joylashuv.addEventListener("click", getLocation);
