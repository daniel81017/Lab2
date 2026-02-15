mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVsODEwMTciLCJhIjoiY21rZWI2eGg4MDU5NjNscHdxbjhkMTNmciJ9.jdsMukp7zHz3llySNBJs0A"

const map = new mapboxgl.Map(
    {
        container: 'main-map1',
        style: 'mapbox://styles/mapbox/standard',
        center: [-0.01624, 51.58548],
        zoom: 12,
    }
);

map.on('load', () => {
    // console.log("--------");
    map.addSource('walthamstow-data', {
        type: 'geojson',
        data: "https://raw.githubusercontent.com/daniel81017/Lab2/refs/heads/main/walthamstow.geojson"
    }
    );

    map.addLayer({
        'id': 'walthamstow-lines',
        'type': 'line',
        'source': 'walthamstow-data',
        'paint': {
            'line-width': 3,
            'line-color': '#6e2222'
        },
        'filter': ['==', ['geometry-type'], 'LineString'], // THIS TYPE/LINE STRING IS A PROBLEM
    });

    map.addLayer({
        'id': 'walthamstow-points',
        'type': 'circle',
        'source': 'walthamstow-data',
        'paint': {
            'circle-width': 10,
            'circle-color': '#160202'
        },
        'filter': ['==', ['geometry-type'], 'Point'], // THIS TYPE/LINE STRING IS A PROBLEM
    });
    map.addLayer({
        'id': 'walthamstow-polygon',
        'type': 'line',
        'source': 'walthamstow-data',
        'paint': {
            'line-width': 3,
            'line-color': '#ec1616'
        },
        'filter': ['==', ['geometry-type'], 'Polygon'], // THIS TYPE/LINE STRING IS A PROBLEM
    });

    //Source: https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
    //When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.addInteraction('walthamstow-click-interaction', {
        type: 'click',
        target: { layerId: 'walthamstow-points'},
        handler: (e) => {
            // Copy coordinates array.
            console.log("e = ", e);
            const coordinates = e.feature.geometry.coordinates.slice();
            const description = e.feature.properties.description;

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        }
    });
});
//Detached head solution: https://stackoverflow.com/questions/10228760/how-do-i-fix-a-git-detached-head