let input = document.querySelector('.input')
let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    let inputValue = input.value.trim();

    if (inputValue != '') {
        
            console.log(inputValue)
            const city = inputValue;
            const apiKey = '0bc9fb36ee8ca6936e42922839d42038'; // Replace with your actual API key

            wheather(city)
            async function wheather(city) {
                try {
                    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                    let apiJson = await api.json()
                    console.log(apiJson);
                    let temp = document.getElementById('temp')
                    let weathers = document.getElementById('weathers')
                    let wind = document.getElementById('wind-data')
                    let minimumTemp = document.getElementById('minimum-temp')
                    let maximumTemp = document.getElementById('maximum-temp')
                    let sunrises = document.getElementById('Sunrise');
                    let sunset = document.getElementById('Sunset');
                    let description = document.getElementById('desc-data');
                    let current = document.getElementById('current');
                    let sea = document.getElementById('sea');
                    let clearSKy = document.querySelector('.clear-sky');
                    let rainy = document.querySelector('.rainy');
                    let clouds = document.querySelector('.clouds');
                    let scatteredClouds = document.querySelector('.scattered-clouds');
                    let overcastClouds = document.querySelector('.overcast-clouds');
                    let brokenClouds = document.querySelector('.broken-clouds');
                    let mist = document.querySelector('.mist');
                    let moderate = document.querySelector('.moderate');
                    let wallpaper = document.querySelector('.wallpaper');
                    let smoke = document.querySelector('.smoke');
                    let gust = document.querySelector('#gust');
                    let humidity = document.querySelector('#humidity');
                    let speed = document.querySelector('#speed');
                    let pressure = document.querySelector('#pressure');



                    // sun rise and sunset time calculating with api

                    let sunriseApi = apiJson.sys.sunrise
                    let sunsetApi = apiJson.sys.sunset
                    let sunriseCalc = new Date(sunriseApi * 1000);
                    let sunsetCalc = new Date(sunsetApi * 1000);
                    let sunriseTimeStamp = sunriseCalc
                    let sunsetTimeStamp = sunsetCalc

                    let sunriseHours = ('0' + sunriseTimeStamp.getHours()).slice(-2);
                    let sunriseMinutes = ('0' + sunriseTimeStamp.getMinutes()).slice(-2);
                    let sunriseSeconds = ('0' + sunriseTimeStamp.getSeconds()).slice(-2);
                    let sunsetHours = ('0' + sunsetTimeStamp.getHours()).slice(-2);
                    let sunsetMinutes = ('0' + sunsetTimeStamp.getMinutes()).slice(-2);
                    let sunsetSeconds = ('0' + sunsetTimeStamp.getSeconds()).slice(-2);


                    // console.log(date)
                    wind.innerText = apiJson.wind.deg
                    temp.innerText = Math.ceil(apiJson.main.temp - 273.15);
                    minimumTemp.innerText = Math.ceil(apiJson.main.temp_min - 273.15);
                    maximumTemp.innerText = Math.ceil(apiJson.main.temp_max - 273.15);
                    sunrises.innerText = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`;
                    sunset.innerText = `${sunsetHours}:${sunsetMinutes}:${sunsetSeconds}`;
                    description.innerText = apiJson.weather[0].description.toUpperCase();
                    gust.innerText = apiJson.wind.gust
                    humidity.innerText = apiJson.main.humidity;
                    speed.innerText = apiJson.wind.speed;
                    pressure.innerText = apiJson.main.pressure
                    current.innerText = apiJson.weather[0].main;
                    sea.innerText = apiJson.main.sea_level;

                    // description.innerText = 'BROKEN CLOUDS';

                    if (description.innerText === 'CLEAR SKY') {
                        clouds.classList.add('none')
                        clearSKy.classList.remove('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    } else if (description.innerText === 'SCATTERED CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.remove('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'RAINY' || description.innerText === 'LIGHT RAIN') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.remove('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'OVERCAST CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.remove('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'BROKEN CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.remove('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'CLOUDS') {
                        clouds.classList.remove('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')



                    } else if (description.innerText === 'SMOKE') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.remove('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')


                    }
                    else if (description.innerText === 'MODERATE RAIN') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.remove('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')


                    }
                    else if (description.innerText === 'MIST' || description.innerText === 'HAZE') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.remove('none');
                        wallpaper.classList.add('none')

                    }

                } catch (error) {
                    console.log(error)

                }


            }

        



    }
})
input.addEventListener('keydown', (event) => {
    // input.preventDefault()
    // event.preventDefault()
    let inputValue = input.value.trim();

    if (inputValue != '') {
        if (event.key == 'Enter') {
            console.log(inputValue)
            const city = inputValue;
            const apiKey = '0bc9fb36ee8ca6936e42922839d42038'; // Replace with your actual API key

            wheather(city)
            async function wheather(city) {
                try {
                    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                    let apiJson = await api.json()
                    console.log(apiJson);
                    let temp = document.getElementById('temp')
                    let weathers = document.getElementById('weathers')
                    let wind = document.getElementById('wind-data')
                    let minimumTemp = document.getElementById('minimum-temp')
                    let maximumTemp = document.getElementById('maximum-temp')
                    let sunrises = document.getElementById('Sunrise');
                    let sunset = document.getElementById('Sunset');
                    let description = document.getElementById('desc-data');
                    let current = document.getElementById('current');
                    let sea = document.getElementById('sea');
                    let clearSKy = document.querySelector('.clear-sky');
                    let rainy = document.querySelector('.rainy');
                    let clouds = document.querySelector('.clouds');
                    let scatteredClouds = document.querySelector('.scattered-clouds');
                    let overcastClouds = document.querySelector('.overcast-clouds');
                    let brokenClouds = document.querySelector('.broken-clouds');
                    let mist = document.querySelector('.mist');
                    let moderate = document.querySelector('.moderate');
                    let wallpaper = document.querySelector('.wallpaper');
                    let smoke = document.querySelector('.smoke');
                    let gust = document.querySelector('#gust');
                    let humidity = document.querySelector('#humidity');
                    let speed = document.querySelector('#speed');
                    let pressure = document.querySelector('#pressure');



                    // sun rise and sunset time calculating with api

                    let sunriseApi = apiJson.sys.sunrise
                    let sunsetApi = apiJson.sys.sunset
                    let sunriseCalc = new Date(sunriseApi * 1000);
                    let sunsetCalc = new Date(sunsetApi * 1000);
                    let sunriseTimeStamp = sunriseCalc
                    let sunsetTimeStamp = sunsetCalc

                    let sunriseHours = ('0' + sunriseTimeStamp.getHours()).slice(-2);
                    let sunriseMinutes = ('0' + sunriseTimeStamp.getMinutes()).slice(-2);
                    let sunriseSeconds = ('0' + sunriseTimeStamp.getSeconds()).slice(-2);
                    let sunsetHours = ('0' + sunsetTimeStamp.getHours()).slice(-2);
                    let sunsetMinutes = ('0' + sunsetTimeStamp.getMinutes()).slice(-2);
                    let sunsetSeconds = ('0' + sunsetTimeStamp.getSeconds()).slice(-2);


                    // console.log(date)
                    wind.innerText = apiJson.wind.deg
                    temp.innerText = Math.ceil(apiJson.main.temp - 273.15);
                    minimumTemp.innerText = Math.ceil(apiJson.main.temp_min - 273.15);
                    maximumTemp.innerText = Math.ceil(apiJson.main.temp_max - 273.15);
                    sunrises.innerText = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`;
                    sunset.innerText = `${sunsetHours}:${sunsetMinutes}:${sunsetSeconds}`;
                    description.innerText = apiJson.weather[0].description.toUpperCase();
                    gust.innerText = apiJson.wind.gust
                    humidity.innerText = apiJson.main.humidity;
                    speed.innerText = apiJson.wind.speed;
                    pressure.innerText = apiJson.main.pressure
                    current.innerText = apiJson.weather[0].main;
                    sea.innerText = apiJson.main.sea_level;

                    // description.innerText = 'BROKEN CLOUDS';

                    if (description.innerText === 'CLEAR SKY') {
                        clouds.classList.add('none')
                        clearSKy.classList.remove('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    } else if (description.innerText === 'SCATTERED CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.remove('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'RAINY' || description.innerText === 'LIGHT RAIN') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.remove('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'OVERCAST CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.remove('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'BROKEN CLOUDS') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.remove('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')




                    }
                    else if (description.innerText === 'CLOUDS') {
                        clouds.classList.remove('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')



                    } else if (description.innerText === 'SMOKE') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.remove('none')
                        moderate.classList.add('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')


                    }
                    else if (description.innerText === 'MODERATE RAIN') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.remove('none')
                        mist.classList.add('none')
                        wallpaper.classList.add('none')


                    }
                    else if (description.innerText === 'MIST' || description.innerText === 'HAZE') {
                        clouds.classList.add('none')
                        clearSKy.classList.add('none')
                        scatteredClouds.classList.add('none')
                        rainy.classList.add('none')
                        overcastClouds.classList.add('none')
                        brokenClouds.classList.add('none')
                        smoke.classList.add('none')
                        moderate.classList.add('none')
                        mist.classList.remove('none');
                        wallpaper.classList.add('none')

                    }

                } catch (error) {
                    console.log(error)

                }


            }

        }



    }
})




