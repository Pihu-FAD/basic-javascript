(async()=>{
    async function getStarCount(repo){
        const repoData = await fetch(repo);
        const repoJson = await repoData.json()
        return repoJson.stargazers_count;
    }

    const reactStars = await getStarCount('https://api.openweathermap.org/data/2.5/weather?q=germany&appid=d5d181936e5d647df29dc50b5eec6feahttps://api.github.com/repos/facebook/react');
    const vueStars = await getStarCount('https://api.github.com/repos/vuejs/core');
    console.log(`React has ${reactStars} stars, whereas Vue has ${vueStars} stars`);


})();