const GEO = {
    changeOptions: (accuracy, age, time) => {
        GEO.options[enableHighAccuracy] = accuracy,
        GEO.options[maximumAge] = age,
        GEO.options[timeout] = time;
    },

    options: {
        enableHighAccuracy: true,
         maximumAge: 1000 * 60 * 5,
        timeout: 15000
    },
    getLocation: (success, failed) => {
        if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,failed, GEO.options);
        } else {
            console.log('No navigator support')
        }
    }
}

export {GEO};
