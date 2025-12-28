const iconSize = 12;
const weaknessIce = "<img src ='img/elements/Icon_Ice.webp'width = " + iconSize +" height = " + iconSize +"> -20% Eis ";
const weaknessEther = "<img src = 'img/elements/Icon_Ether.webp' width =" + iconSize + " height = " + iconSize +"> -20% Äther ";
const weaknessFire = "<img src = 'img/elements/Icon_Fire.webp' width = " + iconSize + " height = " + iconSize + "> -20% Feuer ";
const weaknessPhysical = "<img src = 'img/elements/Icon_Physical.webp' width = " + iconSize + " height = " + iconSize + "> -20% Physisch ";
const weaknessElectric = "<img src = 'img/elements/Icon_Electric.webp' width = " + iconSize + " height = " + iconSize + "> -20% Elektrisch ";

const resistanceIce = "<img src ='img/elements/Icon_Ice.webp'width = " + iconSize + " height = " + iconSize + "> +20% Eis ";
const resistanceEther = "<img src = 'img/elements/Icon_Ether.webp' width =" + iconSize + " height = " + iconSize + "> +20% Äther ";
const resistanceFire = "<img src = 'img/elements/Icon_Fire.webp' width = " + iconSize + " height = " + iconSize + "> +20% Feuer ";
const resistancePhysical = "<img src = 'img/elements/Icon_Physical.webp' width = " + iconSize + " height = " + iconSize + "> +20% Physisch ";
const resistanceElectric = "<img src = 'img/elements/Icon_Electric.webp' width = " + iconSize + " height = " + iconSize + "> +20% Elektrisch ";

const enemyNormal = L.icon({
    iconUrl: 'img/other/enemy_normal.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

const enemyElite = L.icon({
    iconUrl: 'img/other/enemy_elite.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

const fallbackEnemyIcon = L.icon({
    iconUrl: 'img/other/fight.webp',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});
const bImageSize = 100;
const BOSS_CATALOG = {
    //#################
    //#  Elite Gegner #
    //#################
    banyrek:
    {
        id: "banyrek",
        name: "Banyrek",
        hp: 356.878,
        atk: 891,
        def: 620,
        daze: 5.855,
        enemyIcon: enemyElite,
        dazeDuration: "10",
        bImage: "<img src = 'img/enemy/elite/Enemy_Banyrek.png' height = " + bImageSize + ">",
        dazeMultipley: "150%",
        weaknesses: weaknessIce + "<br>" + weaknessEther,
        ressi: "keine"
    },
    Enemy_Farbauti_Energized:
    {
        id: "Enemy_Farbauti_Energized",
        name: "Farbauti – Energiegeladen",
        hp: 343.414,
        atk: 774,
        def: 744,
        daze:6.325,
        enemyIcon: enemyElite,
        dazeDuration:"13",
        bImage: "<img src = 'img/enemy/elite/Enemy_Farbauti_-_Energized.webp' height = " + bImageSize + ">",
        dazeMultipley: "150%",
        weaknesses: weaknessFire,
        ressi: resistanceElectric
    },
    Enemy_Hollow_Thug_Wanted_Enforcer:
    {
        id: "Enemy_Hollow_Thug_Wanted_Enforcer",
        name: "Höhlengangster <br> Gesuchter Kämpfer",
        hp: 343.291,
        atk: 706,
        def: 689,
        daze: 5069,
        dazeDuration: "10",
        enemyIcon: enemyElite,
        bImage: "<img src = 'img/enemy/elite/Enemy_Hollow_Thug_-_Wanted_Enforcer.webp' height = " + bImageSize + ">",
        dazeMultipley: "200%",
        weaknesses: weaknessFire + "<br>" + weaknessPhysical,
        ressi: resistanceIce
    },
    //##################
    //# Normale Gegner #
    //##################
    huskron:
    {
        id: "huskron",
        name: "Huskron",
        hp: 46.512,
        atk: 605,
        def: 551,
        daze: 1.003,
        dazeDuration: "6,5",        
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Huskron.webp' height = " + bImageSize + ">",
        weaknesses: weaknessFire + "<br>" + weaknessEther,
        ressi: "keine"
    },
    alpecaEng:
    {
        id: "alpecaEng",
        name: "Alpeca <br> Energiegeladen",
        hp: 45.818,
        atk: 454,
        def: 496,
        daze: 912,
        dazeDuration: "6,5",
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Alpeca_-_Energized.webp' height = " + bImageSize + ">",
        weaknesses: weaknessFire ,
        ressi: "keine"
    },
    Enemy_Hollow_Thug_Assaulter:
    {
        id: "Enemy_Hollow_Thug_Assaulter",
        name: "Höllengangster <br> Angreifer",
        hp: 45.818,
        atk: 530,
        def: 551,
        daze: 912,
        dazeDuration: "6,5",
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Hollow_Thug_-_Assaulter.webp' height = " + bImageSize + ">",
        weaknesses: weaknessIce + "<br>" + weaknessPhysical,
        ressi: "keine"
    },
    Enemy_Hollow_Thug_Rustler:
    {
        id: "Enemy_Hollow_Thug_Rustler",
        name: "Höllengangster <br> Wilddieb",
        hp: 45.818,
        atk: 454,
        def: 551,
        daze: 912,
        dazeDuration: "6,5",
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Hollow_Thug_-_Rustler.webp' height = " + bImageSize + ">",
        weaknesses: weaknessFire + "<br>" + weaknessPhysical,
        ressi: "keine"
    },
    Enemy_Miasma_Walker_Arcavor:
    {
        id: "Enemy_Miasma_Walker_Arcavor",
        name: "Miasmawanderer <br> Arcavor",
        hp: 66.422,
        atk: 547,
        def: 551,
        daze: 1003,
        dazeDuration: "6,5",
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Miasma_Walker_-_Arcavor.webp' height = " + bImageSize + ">",
        weaknesses: weaknessPhysical + "<br>" + weaknessEther,
        ressi: "keine"
    },
    Enemy_Faun_Energized:
    {
        id: "Enemy_Faun_Energized",
        name: "Faun <br> Energiegeladen",
        hp: 45.818,
        atk: 555,
        def: 496,
        daze: 912,
        dazeDuration: "6,5",
        dazeMultipley: "150%",
        enemyIcon: enemyNormal,
        bImage: "<img src = 'img/enemy/normal/Enemy_Faun_-_Energized.webp' height = " + bImageSize + ">",
        weaknesses: weaknessFire,
        ressi: "keine"
    }
  };

MAP_BOSSES.forEach(entry => {

    const boss = BOSS_CATALOG[entry.bossId];
    if (!boss) {
        console.warn("Unbekannter Boss:", entry.bossId);
        return;
    }

    const icon = boss.enemyIcon instanceof L.Icon
        ? boss.enemyIcon
        : fallbackEnemyIcon;

    entry.positions.forEach(pos => {
        L.marker(toLatLng(pos.x, pos.y), { icon })
            .addTo(map)
            .bindPopup(buildBossPopup(boss));
    });
});
