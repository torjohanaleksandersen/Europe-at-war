let pieceWidth = 15;
let troopWar = false
const gameArea = document.querySelector('.game-area')

const emojies = {
    you: '💂',
    enemy: '💂🏾',
    other: '👨🏽‍✈️',
    barracks: '🏭',
    city: '🏙️',
    defence: '🏟️'
}

//TROOP INFO

const troopInfo = {
    you: {
        health: 100,
        damage: 20,
        speed: 0.1
    },
    enemy: {
        health: 100,
        damage: 20,
        speed: 0.1
    }
}

const countryInfo = {
    you: {
        damage: 20
    },
    enemy: {
        damage: 20
    }
}

const enemyColours = ['rgb(154, 0, 0)', 'rgb(160, 0, 0)', 'rgb(176, 0, 0)', 'rgb(195, 0, 0)', 'rgb(220, 0, 0)', 'rgb(201, 46, 46)', 'rgb(141, 16, 16)']

const countryInformation = {
    Ic: { color: 'gray', name: 'Iceland', relation: 'Peace' },
    No: { color: 'black', name: 'Norway', relation: 'Peace' },
    Ru: { color: '#3B444B', name: 'Russia', relation: 'Peace' },
    S: { color: '#54626F', name: 'Sweden', relation: 'Peace' },
    Fi: { color: 'gray', name: 'Finland', relation: 'Peace' },
    UK: { color: '#3B444B', name: 'United Kingdom', relation: 'Peace' },
    Ir: { color: 'gray', name: 'Ireland', relation: 'Peace' },
    D: { color: 'black', name: 'Denmark', relation: 'Peace' },
    G: { color: 'slategray', name: 'Germany', relation: 'Peace' },
    P: { color: '#54626F', name: 'Poland', relation: 'Peace' },
    Br: { color: 'black', name: 'Belarus', relation: 'Peace' },
    N: { color: 'black', name: 'Netherlands', relation: 'Peace' },
    B: { color: '#54626F', name: 'Belgium', relation: 'Peace' },
    L: { color: '', name: 'Lichtenstein', relation: 'Peace' },
    F: { color: '#eedc82', name: 'France', relation: 'Peace' },
    Es: { color: 'slategray', name: 'Estonia', relation: 'Peace' },
    Li: { color: 'gray', name: 'Lithuania', relation: 'Peace' },
    La: { color: 'darkgray', name: 'Latvia', relation: 'Peace' },
    U: { color: 'dimgray', name: 'Ukraine', relation: 'Peace' },
    Cz: { color: 'black', name: 'Czech Republic', relation: 'Peace' },
    Sk: { color: 'darkgray', name: 'Slovakia', relation: 'Peace' },
    H: { color: 'gray', name: 'Hungary', relation: 'Peace' },
    A: { color: '#54626F', name: 'Austria', relation: 'Peace' },
    Ml: { color: 'black', name: 'Moldova', relation: 'Peace' },
    Sw: { color: 'black', name: 'Switzerland', relation: 'Peace' },
    R: { color: '#54626F', name: 'Romania', relation: 'Peace' },
    Sp: { color: 'slategray', name: 'Spain', relation: 'Peace' },
    I: { color: 'gray', name: 'Italy', relation: 'Peace' },
    Sl: { color: 'black', name: 'Slovenia', relation: 'Peace' },
    Sr: { color: '#3B444B', name: 'Serbia', relation: 'Peace' },
    BH: { color: 'darkgray', name: 'Bosnia and Herzegovina', relation: 'Peace' },
    Po: { color: '#3B444B', name: 'Portugal', relation: 'Peace' },
    Bu: { color: 'black', name: 'Bulgaria', relation: 'Peace' },
    Ko: { color: 'dimgray', name: 'Kosovo', relation: 'Peace' },
    NM: { color: 'slategray', name: 'North Macedonia', relation: 'Peace' },
    Gr: { color: '#3B444B', name: 'Greece', relation: 'Peace' },
    T: { color: 'black', name: 'Turkey', relation: 'Peace' }

}

const map = [
    [' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ic', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ic', 'Ic', 'Ic', 'Ic', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'No', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ic', 'Ic', 'Ic', 'Ic', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'No', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ic', 'Ic', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'S', 'Fi', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'S', 'S', 'Fi', 'Fi', 'Fi', 'Ru', 'Ru', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'S', 'S', 'S', ' ', 'Fi', 'Fi', 'Ru', 'Ru', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'S', 'S', 'S', ' ', ' ', 'Fi', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'S', 'S', 'S', 'S', ' ', 'Fi', 'Fi', 'Fi', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'No', 'S', 'S', 'S', ' ', ' ', 'Fi', 'Fi', 'Fi', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'No', 'S', 'S', 'S', ' ', ' ', 'Fi', 'Fi', 'Fi', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'UK', ' ', ' ', ' ', ' ', ' ', 'No', 'No', 'No-C', 'S', 'S', 'S', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'UK', 'UK', ' ', ' ', ' ', ' ', 'No', 'No', ' ', 'S', 'S', 'S', ' ', ' ', ' ', 'Es', 'Es', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'UK', 'UK', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', 'S', ' ', ' ', ' ', ' ', 'Es', 'Es', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ir', 'UK', ' ', 'UK', 'UK', ' ', ' ', ' ', ' ', ' ', 'D', 'D', ' ', 'S', 'S', ' ', ' ', 'La', 'La', 'La', 'La', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ir', 'Ir', 'Ir', ' ', ' ', 'UK', 'UK', ' ', ' ', ' ', ' ', 'D', 'D', ' ', 'S', ' ', ' ', ' ', 'Li', 'Li', 'Li', 'Br', 'Br', 'Br', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'UK', 'UK', 'UK', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ', ' ', ' ', ' ', 'P', 'P', 'Li', 'Br', 'Br', 'Br', 'Br', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'UK', 'UK', 'UK', 'UK', ' ', ' ', 'N', 'G', 'G', 'G', 'G', 'P', 'P', 'P', 'P', 'P', 'P', 'Br', 'Br', 'Br', 'Br', 'Br', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', 'N', 'G', 'G', 'G', 'G', 'P', 'P', 'P', 'P', 'P', 'P', 'Br', 'Br', 'Br', 'Br', 'U', 'U', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', ' ', 'F--T', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'P', 'P', 'P', 'P', 'P', 'P', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', 'F', 'F', 'F', 'F', 'F--T', 'B', 'G--E', 'G--E', 'G', 'G', 'Cz', 'Cz', 'P', 'P', 'P', 'P', 'P', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', 'F', 'F', 'F-C', 'F', 'F--T', 'F--T', 'G-D-E', 'G', 'G', 'Cz', 'Cz', 'Cz', 'Cz', 'Sk', 'Sk', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', 'F', 'F', 'F', 'F', 'F--T', 'G-D-E', 'G', 'G', 'A', 'A', 'A', 'Sk', 'Sk', 'Sk', 'U', 'U', 'U', 'Ml', 'Ml', 'U', 'U', 'U', 'U', 'U', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Sp', ' ', ' ', ' ', ' ', 'F-C', 'F', 'F', 'F-B', 'F', 'F', 'Sw', 'Sw', 'A', 'A', 'A', 'A', 'A', 'H', 'H', 'H', 'R', 'R', 'R', 'R', 'Ml', 'U', ' ', 'U', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', ' ', 'F', 'F-B', 'F', 'F', 'F', 'F-D', 'I', 'I', 'I', 'I', 'Sl--E', 'Sl--E', 'Sl', 'H', 'H', 'R', 'R', 'R', 'R', 'R', 'Ml', ' ', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Po', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', 'F', 'F', 'F', 'F', 'F', 'F--T', 'I', 'I', 'I', ' ', ' ', 'BH', 'BH', 'BH', 'Sr', 'Sr', 'R', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Po', 'Po', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp--E', 'Sp--E', 'F--T', ' ', ' ', ' ', ' ', ' ', 'I', 'I', ' ', ' ', 'BH', 'BH', 'Sr', 'Sr', 'R', 'R', 'R', 'Bu', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T', 'Ru', 'Ru', 'Ru', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Po', 'Po', 'Sp--E', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', ' ', ' ', ' ', ' ', 'F', ' ', 'I', 'I', 'I', ' ', ' ', 'BH', 'Sr', 'Sr', 'Bu', 'Bu', 'Bu', 'Bu', ' ', ' ', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'Ru', 'Ru'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Po', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', 'I', 'I', ' ', ' ', 'Ko', 'NM', 'Bu', 'Bu', 'Bu', 'Gr', 'T', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', 'Sp', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', 'I', 'I', 'I', ' ', 'Ko', 'NM', 'Bu', 'Gr', 'Gr', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Sp', 'Sp', 'Sp', 'Sp', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', 'Gr', 'Gr', ' ', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', 'I', ' ', ' ', ' ', 'Gr', 'Gr', ' ', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', ' ', 'Gr', 'Gr', ' ', ' ', 'T', 'T', 'T', 'T', 'T', 'T'],

]

let healthMap = [];
for (let row of map) {
    let rowHealth = [];
    for (let element of row) {
        if (element.split('-')[2] == 'T') {
            rowHealth.push(troopInfo.you.health);
        } else if(element.split('-')[2] == 'E') {
            rowHealth.push(troopInfo.enemy.health)
        } else {
            rowHealth.push(' ');
        }
    }
    healthMap.push(rowHealth);
}

function resetHealthMap(last, current, whosAttacking, health, winner) {
    if(whosAttacking == 'you') {
        if(winner != 'tie') {
            healthMap[last[0]][last[1]] = 0
            healthMap[current[0]][current[1]] = health
        } else {
            healthMap[last[0]][last[1]] = 0
            healthMap[current[0]][current[1]] = 0
        }
    } else if (whosAttacking == 'enemy'){
        healthMap[last[0]][last[1]] = 0
        healthMap[current[0]][current[1]] = health
    }
}

function buildMap() {
    map.forEach((row, i) => {
        row.forEach((element, j) => {
            let newElement = element.split('-')

            //0 = countrycode
            //1 = building
            //2 = troop

            if (newElement[2] == 'T') {
                buildPiece(j * pieceWidth, i * pieceWidth, emojies.you, i + '-' + j, countryInformation[newElement[0]].color, 'you', troopInfo.you.health)
            }
            else if (newElement[2] == 'E') {
                buildPiece(j * pieceWidth, i * pieceWidth, emojies.enemy, i + '-' + j, countryInformation[newElement[0]].color, 'enemy', troopInfo.enemy.health)
            }  
            else if (newElement[1] === 'C') {
                buildPiece(j * pieceWidth, i * pieceWidth, emojies.city, i + '-' + j, countryInformation[newElement[0]].color)
            }
            else if (newElement[1] === 'B') {
                buildPiece(j * pieceWidth, i * pieceWidth, emojies.barracks, i + '-' + j, countryInformation[newElement[0]].color)
            }
            else if (newElement[1] === 'D') {
                buildPiece(j * pieceWidth, i * pieceWidth, emojies.defence, i + '-' + j, countryInformation[newElement[0]].color)
            }
            else if (newElement[0] != ' ') {
                buildPiece(j * pieceWidth, i * pieceWidth, '', i + '-' + j, countryInformation[newElement[0]].color)
            }
        })
    })
}

function buildPiece(left, top, country, id, color, troop, health) {
    const newPiece = document.createElement('div');
    newPiece.style.position = 'absolute'
    newPiece.style.height = pieceWidth + 'px'
    newPiece.style.width = pieceWidth + 'px'
    newPiece.style.left = left + 'px'
    newPiece.style.top = top + 'px'
    newPiece.style.color = 'white'
    newPiece.style.fontSize = '10px'
    newPiece.textContent = country
    newPiece.style.backgroundColor = color
    newPiece.style.textAlign = 'center'
    newPiece.id = id
    newPiece.setAttribute('data', troop)
    newPiece.setAttribute('health', health)

    gameArea.appendChild(newPiece)
}

buildMap()

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//RESOURCES

let metalAmount = 99999
let wheatAmount = 99999
let oilAmount = 99999

let deltaMetal = 1
let deltaWheat = 1
let deltaOil = 1

function increaseResources() {
    metalAmount = metalAmount + deltaMetal
    wheatAmount = wheatAmount + deltaWheat
    oilAmount = oilAmount + deltaOil

    document.getElementById('metal').innerHTML = metalAmount
    document.getElementById('wheat').innerHTML = wheatAmount
    document.getElementById('oil').innerHTML = oilAmount
}
increaseResources()

setInterval(() => {
    increaseResources()
}, 5000);

//MOVING TROOP

let movingTroop = false
let ifThereIsAnActiveTroop = false
let lastID, lastIDnotSplit
let lastSoldier
let dx, dy

gameArea.addEventListener('click', (e) => {
    let data = e.target.getAttribute('data')
    if (movingTroop == false && ifThereIsAnActiveTroop == false) {
        if (data == 'you') {
            movingTroop = true
            lastID = e.target.id.split('-')
            lastIDnotSplit = e.target

            map[lastID[0]][lastID[1]] = (map[lastID[0]][lastID[1]]).substring(0, ((map[lastID[0]][lastID[1]]).length - 2))

            resetMap()

            buildPiece(parseInt(e.target.style.left), parseInt(e.target.style.top), emojies.you, e.target.id, 'red', 'you')

            lastSoldier = gameArea.children[gameArea.children.length - 1]
        }
    } else {
        let thisIDSplit = e.target.id.split('-')

        if (ifThereIsAnActiveTroop == false) {
            if ((Math.abs(parseInt(lastID[0]) - parseInt(thisIDSplit[0])) > 1) || (Math.abs(parseInt(lastID[1]) - parseInt(thisIDSplit[1])) > 1) || (lastID[0] == thisIDSplit[0] && lastID[1] == thisIDSplit[1])) {
                lastSoldier.style.backgroundColor = countryInformation.F.color
                if (map[lastID[0]][lastID[1]].includes('-')) {
                    map[lastID[0]][lastID[1]] = map[lastID[0]][lastID[1]] + '-T';
                } else {
                    map[lastID[0]][lastID[1]] = map[lastID[0]][lastID[1]] + '--T';
                }
                resetMap()
                movingTroop = false
            }
            else {
                //IF THE MOVE IS VALID:
                if(e.target.getAttribute('data') == 'you') {
                    lastSoldier.style.backgroundColor = countryInformation.F.color
                if (map[lastID[0]][lastID[1]].includes('-')) {
                    map[lastID[0]][lastID[1]] = map[lastID[0]][lastID[1]] + '-T';
                } else {
                    map[lastID[0]][lastID[1]] = map[lastID[0]][lastID[1]] + '--T';
                }
                resetMap()
                movingTroop = false
                    return
                }

            setTimeout(() => {
                lastSoldier.style.backgroundColor = countryInformation.F.color

                let position = map[thisIDSplit[0]][thisIDSplit[1]].split('-')
                if(position[0] != 'F') {
                    if(!enemyColours.includes(countryInformation[position[0]].color)) {
                        countryInformation[position[0]].color = enemyColours[Math.floor(Math.random() * enemyColours.length)]
                    }
                    countryInformation[position[0]].relation = 'War'
                    createCountryList()
                    AI()
                }
                if(position[1] === 'D') {
                    if(position[2] === 'E') {
                        healthMap[lastID[0]][lastID[1]] = parseInt(healthMap[lastID[0]][lastID[1]]) - countryInfo.enemy.damage
                    } else if (position[0] != 'F' && position[2] != 'E') {
                        map[thisIDSplit[0]][thisIDSplit[1]] = position[0] + '-'
                        healthMap[thisIDSplit[0]][thisIDSplit[1]] = healthMap[lastID[0]][lastID[1]]
                        healthMap[lastID[0]][lastID[1]] = 0
                        healthMap[thisIDSplit[0]][thisIDSplit[1]] = parseInt(healthMap[thisIDSplit[0]][thisIDSplit[1]]) - countryInfo.enemy.damage
                    }
                }
                
                if (map[thisIDSplit[0]][thisIDSplit[1]].includes('-E')) {
                    troopWar = true
                    troopFight(lastIDnotSplit.id.split('-'), e.target.id.split('-'))
                } else if (map[thisIDSplit[0]][thisIDSplit[1]].includes('-')) {
                    if(position[0].length == 2) {
                        map[thisIDSplit[0]][thisIDSplit[1]] = 'F' + (map[thisIDSplit[0]][thisIDSplit[1]]).slice(2)
                    } else {
                        map[thisIDSplit[0]][thisIDSplit[1]] = (map[thisIDSplit[0]][thisIDSplit[1]]).replace((map[thisIDSplit[0]][thisIDSplit[1]])[0], 'F')
                    }
                    map[thisIDSplit[0]][thisIDSplit[1]] = map[thisIDSplit[0]][thisIDSplit[1]] + '-T';
                } else {
                    healthMap[thisIDSplit[0]][thisIDSplit[1]] = healthMap[lastID[0]][lastID[1]]
                    healthMap[lastID[0]][lastID[1]] = 0
                    if(position[0].length == 2) {
                        map[thisIDSplit[0]][thisIDSplit[1]] = 'F' + (map[thisIDSplit[0]][thisIDSplit[1]]).slice(2)
                    } else {
                        map[thisIDSplit[0]][thisIDSplit[1]] = (map[thisIDSplit[0]][thisIDSplit[1]]).replace((map[thisIDSplit[0]][thisIDSplit[1]])[0], 'F')
                    }
                    map[thisIDSplit[0]][thisIDSplit[1]] = map[thisIDSplit[0]][thisIDSplit[1]] + '--T';
                }
                ifThereIsAnActiveTroop = false
                resetMap()
            }, 500)
            }
        movingTroop = false
        }
    }
})

//FIGHTING

function troopFight(you, enemy) {
    const interval = setInterval(() => {
        healthMap[enemy[0]][enemy[1]] = healthMap[enemy[0]][enemy[1]] - troopInfo.you.damage
        healthMap[you[0]][you[1]] = healthMap[you[0]][you[1]] - troopInfo.enemy.damage

        if(healthMap[you[0]][you[1]] <= 0 && healthMap[enemy[0]][enemy[1]] <= 0) {
            if(healthMap[you[0]][you[1]] > healthMap[enemy[0]][enemy[1]]) {
                if(thisPosition[0].length == 2) {
                    map[thisIDSplit[0]][thisIDSplit[1]] = 'F' + (map[thisIDSplit[0]][thisIDSplit[1]]).slice(2)
                } else {
                    map[thisIDSplit[0]][thisIDSplit[1]] = (map[thisIDSplit[0]][thisIDSplit[1]]).replace((map[thisIDSplit[0]][thisIDSplit[1]])[0], 'F')
                }         
                map[enemy[0]][enemy[1]] = map[enemy[0]][enemy[1]].substring(0, map[enemy[0]][enemy[1]].length - 1) + 'T'
                resetMap()
                resetHealthMap(you, enemy, 'you', healthMap[you[0]][you[1]])
                clearInterval(interval)
                return
            } else if (healthMap[you[0]][you[1]] < healthMap[enemy[0]][enemy[1]]) {
                //NEED CODING
                resetHealthMap(you, enemy, 'you', healthMap[enemy[0]][enemy[1]])
                clearInterval(interval)
                return
            } else {
                map[enemy[0]][enemy[1]] = map[enemy[0]][enemy[1]].substring(0, map[enemy[0]][enemy[1]].length - 2)
                resetHealthMap(you, enemy, 'you', 0, 'tie')
                resetMap()
                clearInterval(interval)
                return
            }
        }
        if(healthMap[you[0]][you[1]] <= 0){
            resetHealthMap(you, enemy, 'you', healthMap[enemy[0]][enemy[1]]) 
            clearInterval(interval)
            return
        }
        if(healthMap[enemy[0]][enemy[1]] <= 0) {
            const replaceFirstLetterString = (map[enemy[0]][enemy[1]]).replace((map[enemy[0]][enemy[1]])[0], 'F')          
            map[enemy[0]][enemy[1]] = replaceFirstLetterString.substring(0, map[enemy[0]][enemy[1]].length - 1) + 'T'
            resetHealthMap(you, enemy, 'you', healthMap[you[0]][you[1]])
            resetMap()
            clearInterval(interval)
            return
        } 
    }, 200)

    setTimeout(() => {
        troopWar = false
        AI()
    }, 2000)
}

function resetMap() {
    removeAllChildNodes(gameArea);
    buildMap()
}


//PLACETROOPS

const placeTroopsButton = document.getElementById('place-troops')
let placing = false

let remainingTroops = 3

function updateTroopsCounter(troops) {
    document.getElementById('remaining-troops').innerHTML = troops
}
updateTroopsCounter(remainingTroops)


placeTroopsButton.addEventListener('click', () => {
    if (placing === false) {
        placeTroopsButton.style.backgroundColor = 'green'
        //PLACING CODE
        placing = true
        document.getElementById('remaining-troops-p').style.display = ''

    } else {
        placeTroopsButton.style.backgroundColor = 'rgb(0, 0, 177)'
        placing = false
        document.getElementById('remaining-troops-p').style.display = 'none'
    }
})

gameArea.addEventListener('click', (e) => {
    if(placing) {
        if (remainingTroops > 0) {
            remainingTroops = remainingTroops - 1
            updateTroopsCounter(remainingTroops)

            thisID = e.target.id.split('-')
            if (map[thisID[0]][thisID[1]].includes('T')) {

            } else {
                if (map[thisID[0]][thisID[1]].includes('-')) {
                    map[thisID[0]][thisID[1]] = map[thisID[0]][thisID[1]] + '-T';
                } else {
                    map[thisID[0]][thisID[1]] = map[thisID[0]][thisID[1]] + '--T';
                }
                resetMap()
                healthMap[thisID[0]][thisID[1]] = troopInfo.you.health
            }
        } else {
            return
        }
    }
})

//HOVER ON SOLDIERS
/*
addEventListener('mousemove', () => {
    for(let i = 0; i < gameArea.children.length; i++) {
        if(gameArea.children[i].getAttribute('data') == 'you' || gameArea.children[i].getAttribute('data') == 'enemy'){
            gameArea.children[i].addEventListener('mouseenter', (e) => {
                const infoBox = document.createElement('div')
                infoBox.style.height = 10 + 'px'
                infoBox.style.width = 25 + 'px'
                infoBox.style.backgroundColor = 'black'
                infoBox.style.position = 'absolute'
                infoBox.id = 'hover-info'
                infoBox.style.left = parseInt(gameArea.children[i].style.left) - 5 + 'px'
                infoBox.style.top = parseInt(gameArea.children[i].style.top) - 13 + 'px'
                infoBox.style.color = 'white'
                infoBox.style.fontSize = '8px'
                infoBox.style.textAlign = 'center'

                let current = e.target.id.split('-')
                infoBox.textContent = healthMap[current[0]][current[1]]

                gameArea.appendChild(infoBox)
            }) 
            gameArea.children[i].addEventListener('mouseleave', () => {
                for(let j = 0; j < gameArea.children.length; j++) {
                    if(gameArea.children[j].id == 'hover-info'){
                        gameArea.children[j].remove()
                    }
                }
            })
        }
    }
})
*/


//COUNTRIES

function createCountryList() {
    removeAllChildNodes(document.querySelector('.countries-list-p'))
    for (let country in countryInformation) {
        const newRow = document.createElement('div');
        newRow.classList.add('countries-list-row');
        document.querySelector('.countries-list-p').appendChild(newRow)

        const texts = [countryInformation[country].name, countryInformation[country].color, countryInformation[country].relation]

        for (let i = 0; i < 3; i++) {
            const textElement = document.createElement('p');
            textElement.classList.add('text-element-countries')
            textElement.innerHTML = texts[i]
            newRow.appendChild(textElement)
        }
    }
}
createCountryList()

document.getElementById('countries').addEventListener('click', () => {
    document.querySelector('.countries-list').style.display = 'block'
})

document.getElementById('exit-list').addEventListener('click', () => {
    document.querySelector('.countries-list').style.display = 'none'
})


//BUILDING

let type = null
let building = false
let buttonSwitcher = false

let buildingsTracker = {
    B: { time: 5000, quantity: 0, price: { oil: 20000, metal: 40000, wheat: 10000 }, dailyUpkeep: { oil: 1000, metal: 2000, wheat: 1000 } },
    C: { time: 5000, quantity: 0, price: { oil: 20000, metal: 40000, wheat: 10000 }, dailyUpkeep: { oil: 1000, metal: 2000, wheat: 1000 } },
    D: { time: 5000, quantity: 0, price: { oil: 20000, metal: 40000, wheat: 10000 }, dailyUpkeep: { oil: 1000, metal: 2000, wheat: 1000 } }
}

document.getElementById('build').addEventListener('click', () => {
    if (buttonSwitcher === false) {
        document.getElementById('build').style.backgroundColor = 'green'
        document.querySelector('.building-list').style.transition = 'transform 1s ease-in-out';
        document.querySelector('.building-list').style.transform = 'translateX(500px)'
        buttonSwitcher = true
        building = true
    } else {
        document.getElementById('build').style.backgroundColor = 'rgb(0, 0, 177)'
        document.querySelector('.building-list').style.transition = 'transform 1s ease-in-out';
        document.querySelector('.building-list').style.transform = 'translateX(-500px)'
        building = false
        buttonSwitcher = false
    }
})
document.getElementById('barracks').addEventListener('click', () => {
    document.getElementById('barracks').style.borderStyle = 'solid'
    document.getElementById('cities').style.borderStyle = 'none'
    document.getElementById('defence').style.borderStyle = 'none'
    building = true
    type = 'B'
})
document.getElementById('cities').addEventListener('click', () => {
    document.getElementById('cities').style.borderStyle = 'solid'
    document.getElementById('barracks').style.borderStyle = 'none'
    document.getElementById('defence').style.borderStyle = 'none'
    building = true
    type = 'C'
    
})
document.getElementById('defence').addEventListener('click', () => {
    document.getElementById('defence').style.borderStyle = 'solid'
    document.getElementById('cities').style.borderStyle = 'none'
    document.getElementById('barracks').style.borderStyle = 'none'
    type = 'D'
    building = true
})

let interval = null
let widthTimer = 0
let eventListenerAdded = false;


gameArea.addEventListener('click', (e) => {
    if(building) {
        const ID = e.target.id.split('-');
            const tile = map[ID[0]][ID[1]];
            if (!tile.includes('-' + type)) {
                const timerBlock = document.createElement('div');
                timerBlock.classList.add('timer-block')
                timerBlock.style.top = e.target.style.top
                timerBlock.style.left = e.target.style.left
                gameArea.appendChild(timerBlock)
    
                clearInterval(interval); // clear any previous interval
                widthTimer = 0; // reset the width
                
                interval = setInterval(() => {
                    widthTimer += 3
                    timerBlock.style.width = widthTimer + 'px'
                    gameArea.appendChild(timerBlock)
                }, 1000)

                setTimeout(() => {
                    map[ID[0]][ID[1]] = tile + '-' + type;
                    clearInterval(interval)
                    widthTimer = 0
                    resetMap()
                    metalAmount -= buildingsTracker[type].price.metal
                    oilAmount -= buildingsTracker[type].price.oil
                    wheatAmount -= buildingsTracker[type].price.wheat
                    increaseResources()
                }, 5000)
            }
        }
})



//RESEARCH

document.getElementById('research').addEventListener('click', () => {
    //document.querySelector('.research').style.display = 'block'
})


const researchLevels = {
    troop: 5,
    officer: 2,
    barrack: 3,
    defence: 0,
    city: 1,
}
const indexOfResearchClasses = ['troop', 'officer', 'barrack', 'defence', 'city']

function renderResearchLevels() {
    const researchPlace = document.querySelectorAll('.research-progress')
    for(let i = 0; i < researchPlace.length; i++) {
        let researchIndex = indexOfResearchClasses[i]
        if(researchLevels[researchIndex] > 0) {
            for(let j = 0; j < researchLevels[researchIndex]; j++) {
                const researchBlock = document.createElement('div')
                researchBlock.classList.add('research-block')
                researchPlace[i].appendChild(researchBlock)
            }
        }
    }
}

/*
07.04.2022
Ting og fikse:

- Enda flere event listeners som er der og lurer når jeg skal bygge, dette gjør alt galt med bygging og pris, og unødvendig lag (FIKSET)
- Samme problem med plassering av trooper, for mange eventlisteners, må slette de! (FIKSET)
- JEG HATER LIVET (IKKE FIKSET ENDA)
- PLUTSELIG FUNKER IKKE FUCKINGS BYGGE KNAPPEN (FUNKER IDAG AHAHHA)


Ting og glede seg til:

- Research, det er simpelt, kan kode uten problemer
- Utvikle en AI (blir kanskje pain)
- Teste det mer og mer når det blir bedre;)
*/

/*
08.04.2022
Ting og fikse:

- Healthmappet er buggy, det lagrer jo fuckings ikke verdiene, det bare skriver ut 100 der det er en tropp. 
  Jeg må fikse sånn at etter det oppdateres må jeg oppdatere den spesifikke blokken der det må endres
- livet mitt.
- Research er helt buggy
- Problemet med healthmappet er at det regenereres hele tida, det gjør jo selvfølgelig at mappet blir ødelagt, det skal lages en gang, og oppdateres hele tida!
- Da har jeg en plan for imorgen

*/

//AI
let AITroops = []
const possibleMoves = []
let intervalExecuted = false

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function AI() {
    const interval = setInterval(() => {
        if(troopWar) {
            clearInterval(interval)
            resetMap()
            return
        }

    let AITroops = []
    //finne landet jeg er i krig med
    for(const country in countryInformation) {
        if(countryInformation[country].relation == 'War') {
            map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    let split = symbol.split('-')
                    if(split[0] == country) {
                        if(split[2] == 'E') {
                            AITroops.push(i + '-' + j)
                        }
                    }
                })
            })
        }
    }

    //velge random brikke jeg vil bevege nærmere landet mitt
    //sjekke naboer:

    let firstPossibleMoves = []
    for(let i = 0; i < AITroops.length; i++) {
        let split = AITroops[i].split('-')
        let f = parseInt(split[0])
        let s = parseInt(split[1])
        
        if((map[f - 1][s + 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f - 1) + '-' + (s + 1))
        }
        if((map[f - 1][s]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f - 1) + '-' + (s))
        }
        if((map[f - 1][s - 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f - 1) + '-' + (s - 1))
        }
        if((map[f][s + 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f) + '-' + (s + 1))
        }
        if((map[f][s - 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f) + '-' + (s - 1))
        }
        if((map[f + 1][s - 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f + 1) + '-' + (s - 1))
        }
        if((map[f + 1][s]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f + 1) + '-' + (s))
        }
        if((map[f + 1][s + 1]).split('-')[0] == 'F'){
            firstPossibleMoves.push((f + 1) + '-' + (s + 1))
        }
    }

    const originalArray = firstPossibleMoves;

    originalArray.forEach(element => {
        if (!possibleMoves.includes(element)) {
            possibleMoves.push(element);
        }
    });

    if(AITroops.length == 0 || possibleMoves.length == 0){
        return
    }

        const AIpiece = getRandomElement(AITroops)
        const direction = getRandomElement(possibleMoves)
        const x2 = direction.split('-')[1]
        const x1 = AIpiece.split('-')[1]
        const y2 = direction.split('-')[0]
        const y1 = AIpiece.split('-')[0]
        let dx = x2 - x1
        let dy = y2 - y1

        //FINDING BEST POSSIBLE MOVE

        if(dy > 0) {
            dy = 1
        } else if(dy == 0) {
            dy = 0
        } else {
            dy = -1
        }
        if(dx > 0) {
            dx = 1
        } else if(dx == 0) {
            dx = 0
        } else {
            dx = -1
        }

        map[y1][x1] = map[y1][x1].substring(0, map[y1][x1].length - 3)
        
        if(map[parseInt(y1) + dy][parseInt(x1) + dx].split('-')[0] == map[y1][x1].split('-')[0]) {
            if(map[parseInt(y1) + dy][parseInt(x1) + dx].split('-')[2] == 'E'){
                //Hvis AI prøver å gå på egen tropp
                map[y1][x1] = map[y1][x1].split('-')[0] + '--E'
                return
            } else {
                //Hvis AI prøver å gå på eget land
                healthMap[parseInt(y1) + dy][parseInt(x1) + dx] = healthMap[y1][x1]
                healthMap[y1][x1] = 0
                map[parseInt(y1) + dy][parseInt(x1) + dx] = map[parseInt(y1) + dy][parseInt(x1) + dx] + '--E'
            }
        } else {
            if(map[parseInt(y1) + dy][parseInt(x1) + dx].split('-')[2] == 'T'){
                //AI ATTACKING YOU CODE
                troopFight(AIpiece.split('-'), direction.split('-'))
                return
            } else {
                //Hvis AI prøver å gå på ditt land
                healthMap[parseInt(y1) + dy][parseInt(x1) + dx] = healthMap[y1][x1]
                healthMap[y1][x1] = 0
                map[parseInt(y1) + dy][parseInt(x1) + dx] = map[y1][x1].split('-')[0] + '--E'
            }
        }
        resetMap()
    }, 2000)
}