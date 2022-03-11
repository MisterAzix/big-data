const TRAFIC_DATA_FILE = "../data/comptage_trafic_2021.json";
const SENSOR_INFO_FILE = "../data/pc_capte_p.json";
const STOPS_FILE = "../data/13e7e219-b037-4d60-a3ab-e55d2d3e5291.20220215.120242.484070.zip.geojson";

const initMap = async () => {
    const traficData = await fetchJSON(TRAFIC_DATA_FILE);
    const sensorData = await fetchJSON(SENSOR_INFO_FILE);

    const newtraficData = traficData.map((element) => {
        const { mjo_val, ident } = element.fields;
        const { coordinates } = sensorData.find((sensor) => sensor.fields.ident === ident)?.fields.geo_shape || {};

        // console.log(coordinates);

        return {
            // sensorID: ident,
            coordinates,
            mjo_val,
        };
    });

    const filteredData = newtraficData.filter((element) => element?.coordinates !== undefined);

    renderMap(filteredData);
};

const renderMap = (data) => {
    let map = L.map("map").setView([44.8378, -0.594], 12);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
            'Data from <a target="_blank" href="https://www.data.gouv.fr/fr/datasets/comptage-du-trafic-metropole-2021/" rel="noreferrer">Data Gouv</a> & <a target="_blank" href="https://opendata.bordeaux-metropole.fr/explore/dataset/pc_capte_p/table/" rel="noreferrer">L\'atelier OpenData</a>',
    }).addTo(map);

    const maxValueOfHPM = Math.max(...data.map((o) => o.mjo_val), 0);

    addressPoints = data.map((p) => {
        return [p.coordinates[1], p.coordinates[0], p.mjo_val];
    });

    L.heatLayer(addressPoints, { radius: 100, max: maxValueOfHPM / 2 }).addTo(map);
    fetchJSON(STOPS_FILE).then((dataStops) => {
        L.geoJSON(dataStops)
            .bindPopup(function (stop) {
                const [long, lat] = stop.feature.geometry.coordinates;
                return `
                <div class="text-center"><span class="fw-bold">Arrêt : </span>${stop.feature.properties.name}
                <br />
                <a target="_blank" href="https://www.google.com/maps/search/${lat.toString()},${long.toString()}" rel="noreferrer">${lat.toString()}, ${long.toString()}</a></div>
                `;
            })
            .addTo(map);
    });
};

initMap();
