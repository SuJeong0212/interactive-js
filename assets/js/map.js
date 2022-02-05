;(function(){
    'use strict'

    const get = (target) =>{
        return document.querySelector(target)
    }

    const defaultPos = {
        lat:37.485474,
        lng:126.806064,
    }
    
    const $map = get('#map')
    const mapContainer = new kakao.maps.Map($map, {
        center : new kakao.maps.LatLng(defaultPos.lat, defaultPos.lng),
        level:3
    })
    console.log(mapContainer)
    

    const init = () =>{}

    init()
})()