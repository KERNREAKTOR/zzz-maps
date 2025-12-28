const mapIcon = 20;
const lumiteIcon = L.icon({
  iconUrl: 'img/ore/Item_Lumite_Ore.webp',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});
const ITEM_CATALOG = {
  lumite_ore: {

    id: "lumite_ore",
    name: "Lumite-Erz",
    image: "<img src='img/ore/Item_Lumite_Ore.webp' width='" + mapIcon + "' height='" + mapIcon + "'>"
  }
};
MAP_ITEMS.forEach(entry => {
  const item = ITEM_CATALOG[entry.itemId];
  if (!item) return;

  entry.positions.forEach(pos => {
    L.marker(toLatLng(pos.x, pos.y), {
      icon: lumiteIcon
    })
      .addTo(map)
      .bindPopup(buildItemPopup(item));
  });
});
