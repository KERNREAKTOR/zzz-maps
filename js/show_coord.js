function toLatLng(x, y) {
  return map.unproject([x, y], map.getMaxZoom());
}

function toPixel(latlng) {
  return map.project(latlng, map.getMaxZoom());
}
const items = [];
let nextItemId = 1;

map.on('click', function (e) {

    const p = toPixel(e.latlng);

    const x = Math.round(p.x);
    const y = Math.round(p.y);

    const name = prompt(`Item-Name\nx=${x}, y=${y}`);
    if (!name) return;

    const item = {
        id: nextItemId++,
        name: name,
        x: x,
        y: y
    };

    items.push(item);

    addItemMarker(item);
    console.log(items);
});
