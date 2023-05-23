const text = [
    `Uttarakhand is a beautiful Himalayan state in India known for its traditions, culture, tasty cuisine, blissful environment, alluring hill stations and for the mesmerising beauty of the Himalayas. Since ages, Uttarakhand has been the place of Yogis, sadhus & Gods.`,

    `What is the short paragraph of Uttarakhand?
    Uttarakhand was formed on the 9th November 2000 as the 27th State of India, when it was carved out of northern Uttar Pradesh. Located at the foothills of the Himalayan mountain ranges, it is largely a hilly State, having international boundaries with China (Tibet) in the north and Nepal in the east.`,

    `Uttarakhand is known for the natural environment of the Himalayas, the Bhabar and the Terai regions.`,

    `Boasting of enchanting view of the Himalayas, and cultural ethos that speaks of simplistic living amidst nature and harmony – Uttarakhand is a land of sublime natural beauty and serene spirituality.`,

    `Beauty is so inherent to almost all things Uttarakhand stands for – the magnanimous Himalayas, the holiest of the rivers, the spiritual mystery, stunning landscapes, the incessantly colorful play of nature, enchanting history carved in ancient stones, a mesmerizing floral and faunal plethora and the simplest `,

    `Uttarakhand is known as "the land of the gods" (Devbhumi) because of its number of Hindu pilgrimage sites.`,

    `A land of myths and mountains, Devbhoomi Uttarakhand, is one of the most beautiful states of India. Snow-capped Himalayan peaks, serpentine rivers, revered temples, quaint villages, vibrant culture, and World Heritage Sites, Uttarakhand's sheer natural beauty and diversity beckon travelers from across the world.
    `,

    `One of India's most prominent Himalayan areas, the Garhwal Himalayas refer to a particular set of mountain ranges in the state. `,

    `The Garhwal division is home to some of India's holiest of shrines, sitting high up in the mountains.`,

   ];
   const item = document.querySelector("#items");
   const dataContainer = document.querySelector("#data");

   const generate = () => {
if( isNaN(item.value)|| item.value<0 || item.value>9){
const randomIndex = Math.floor(Math.random()*text.length);
dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`;

}else{
    const data = text.slice(0, item.value)
    const paras = data.map(
        (d) =>{
            return`<p> ${d} <br> <br> </p>`
        }
    );
    dataContainer.innerHTML = paras.join("");

}

   }