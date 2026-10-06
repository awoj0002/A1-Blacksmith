// Assignment 1: Blacksmith — The Tiny Forge
console.log(document.title)
// PLAN: Write a short pseudocode plan for making a sword here.

//when user clicks on heat forge, increase the heat by 10 and cap at 100
//when user makes a sword, check if heat is at least 30
//use 30 heat and increase the swords by 1
//update the forge status and image based on the heat value
//reset the forge to 20 heat and 0 swords made when reset function is called

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
let forgeValue = document.getElementById('forge')
let heatValue = document.getElementById('heat-value')
let swordsValue = document.getElementById('sword-count')
let statusElement = document.getElementById('forge-status')
let forgeImage = document.getElementById('forge-image')
let messageElement = document.getElementById('action-message')

// 2. Create the two state variables: heat and swords made.
let heat = 20
let swordsMade = 0

// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too Cold"
    } else if (heatValue < 70) {
        return "Ready to forge"
    } else {
        return "Roaring Fire"
    }
}


// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

function updateForge() {
    heatValue.textContent = heat
    swordsValue.textContent = swordsMade

    forgeValue.classList.remove('too-cold', 'ready-to-forge', 'roaring-fire')
    console.log(heat)

    if (heat < 30) {
        forgeValue.classList.add('too-cold')
        forgeImage.setAttribute('src', 'assets/forge-cold.svg')
        forgeImage.setAttribute('alt', 'A stone forge with dark coals and no flames')
        statusElement.textContent = "Too cold"
    } else if (heat < 70) {
        forgeValue.classList.add('ready-to-forge')
        forgeImage.setAttribute('src', 'assets/forge-ready.svg')
        forgeImage.setAttribute('alt', 'A stone forge with a small orange fire')
        statusElement.textContent = "Ready to forge"
    } else {
        forgeValue.classList.add('roaring-fire')
        forgeImage.setAttribute('src', 'assets/forge-roaring.svg')
        forgeImage.setAttribute('alt', 'A stone forge with tall bright flames and sparks')
        statusElement.textContent = "Roaring fire"
    }
}
 


// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
    heat = 20
    swordsMade = 0
    updateForge()
} 


// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
    heat += amount
    if (heat > 100) {
        heat = 100
    } else if (heat < 0) {
        heat = 0
    } 
    updateForge()
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
    if (heat >= 30) {
        swordsMade++
        heat -= 30
        messageElement.textContent = "Sword forged!"
        updateForge()
    } else {
        messageElement.textContent = "Not enough heat to forge a sword."
    }
}

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
