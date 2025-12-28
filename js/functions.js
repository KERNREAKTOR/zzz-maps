function switchMap(mapId, targetPosition) {
    map.remove();
    loadMap(mapId, targetPosition);
}

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2
});

function toPixel(latlng) {
    return map.project(latlng, map.getMaxZoom());
}

function toLatLng(x, y) {
    return map.unproject([x, y], map.getMaxZoom());
}
function toLatLngPixel(x, y) {
    // Für divIcon / pixelgenaue Marker
    return map.unproject([x, y], 0);
}
function buildItemPopup(item) {
    return `
    <div style="
      text-align:center;
      min-width:120px;
      font-family:Arial;
    ">
      ${item.image}<br>
      <b>${item.name}</b>
    </div>
  `;
}

function buildBossPopup(boss) {
    return `
      <div class="boss-card">
  
        <div class="boss-header">
          ${boss.bImage}
          <div>
            <div class="boss-name">${boss.name}</div>
          </div>
        </div>
  
        <div class="boss-stats">
          <div>HP:</div><div>${boss.hp ?? "-"}</div>
          <div>ATK:</div><div>${boss.atk ?? "-"}</div>
          <div>DEF:</div><div>${boss.def ?? "-"}</div>
          ${boss.daze ? `<div>Daze:</div><div>${boss.daze}</div>` : ""}
          ${boss.dazeMultipley ? `<div>Betäubungsschaden-Multiplikator:</div><div>${boss.dazeMultipley}</div>` : ""}
        </div>
  
        <div class="boss-section">
          <div class="boss-section-title">Schwächen</div>
          <div class="boss-icons">${boss.weaknesses}</div>
        </div>
  
        <div class="boss-section">
          <div class="boss-section-title">Resistenzen</div>
          ${boss.ressi}
        </div>
  
      </div>
    `;
}