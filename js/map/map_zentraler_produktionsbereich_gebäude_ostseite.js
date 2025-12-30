const width = 1500;
const height = 1500;

const bounds = [[0, 0], [height, width]];
L.imageOverlay('img/maps/zentraler_produktionsbereich_gebäude_ostseite.png', bounds).addTo(map);
map.fitBounds(bounds);
map.on('click', function (e) {

  const p = toPixel(e.latlng);
  const x = Math.round(p.x);
  const y = Math.round(p.y);

  console.log(`Item-Name\nx: ${x}, y: ${y}`);
});
