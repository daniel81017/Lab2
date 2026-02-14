mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVsODEwMTciLCJhIjoiY21rZWI2eGg4MDU5NjNscHdxbjhkMTNmciJ9.jdsMukp7zHz3llySNBJs0A"

const map = new mapboxgl.Map(
    {
        container: 'main-map1',
        style: 'mapbox://styles/mapbox/standard',
        center: [-79.39218, 43.66370],
        zoom: 12,
    }
);

map.on('load', () => {
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    map.addSource('buildingdata', {
        type: 'geojson',
        data: "https://raw.githubusercontent.com/daniel81017/Lab2/main/wk5-data/buildings.geojson",
    });
    map.addLayer({
        'id': 'buildings-points',
        'type': 'circle',
        'source': 'buildingdata',
        'paint': {
            'circle-radius': 7,
            'circle-color': '#007cbf',
        }
    })
});