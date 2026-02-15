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
        data: "https://raw.githubusercontent.com/daniel81017/Lab2/refs/heads/main/walthamstowlines.geojson"
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
        // 'filter': ['get'['==', 'type', 'LineString']], // THIS TYPE/LINE STRING IS A PROBLEM
    });
    // map.setFilter('walthamstow-lines', ['==', ['get', 'type'], 'LineString']);
    // console.log("aaa: " + map.getFilter("walthamstow-lines"));
});

// JUST IN CASE
// map.addLayer({
//     'id': 'walthamstow-lines',
//     'type': 'line',
//     'source': 'walthamstow-data',
//     'paint': {
//         'line-width': 3,
//         'line-color': '#6e2222'
//     }
// });

//  map.addLayer({
//     'id': 'walthamstow-points',
//     'type': 'circle',
//     'source': 'walthamstow-data',
//     'paint': {
//         'circle-width': 5,
//         'circle-color': '#bc9619'
//     }
// });

// TO DELETE
// map.addSource('buildingdata', {
//     type: 'geojson',
//     data: "https://raw.githubusercontent.com/daniel81017/Lab2/main/wk5-data/buildings.geojson",
// });
// map.addLayer({
//     'id': 'buildings-points',
//     'type': 'circle',
//     'source': 'buildingdata',
//     'paint': {
//         'circle-radius': 1,
//         'circle-color': '#007cbf',
//     }
// })