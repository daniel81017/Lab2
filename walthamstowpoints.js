mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVsODEwMTciLCJhIjoiY21rZWI2eGg4MDU5NjNscHdxbjhkMTNmciJ9.jdsMukp7zHz3llySNBJs0A"

const map2 = new mapboxgl.Map(
    {
        container: 'main-map2',
        style: 'mapbox://styles/mapbox/standard',
        center: [-0.01624, 51.58548],
        zoom: 12,
    }
);

map2.on('load', () => {
    // console.log("--------");
    map2.addSource('walthamstow-data', {
        type: 'geojson',
        data: "https://raw.githubusercontent.com/daniel81017/Lab2/refs/heads/main/walthamstowpoints.geojson"
        }
    );

    map2.addLayer({
        'id': 'walthamstow-points',
        'type': 'circle',
        'source': 'walthamstow-data',
        'paint': {
            'circle-width': 3,
            'circle-color': '#6e2222'
        },
        // 'filter': ['get'['==', 'type', 'LineString']], // THIS TYPE/LINE STRING IS A PROBLEM
    });
    // map.setFilter('walthamstow-lines', ['==', ['get', 'type'], 'LineString']);
    // console.log("aaa: " + map.getFilter("walthamstow-lines"));
});