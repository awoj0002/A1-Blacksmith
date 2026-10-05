// Assignment 1: Blacksmith — The Tiny Forge
console.log(document.title)
// PLAN: Write a short pseudocode plan for making a sword here.


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

    if (heatValue < 30) {
        forgeValue.classList.add('too-cold')
        forgeImage.setAttribute('src', 'images/forge-cold.svg')
        forgeImage.setAttribute('alt', 'A stone forge with dark coals and no flames')
        messageElement.textContent = "Too cold"
    } else if (heatValue < 70) {
        forgeValue.classList.add('ready-to-forge')
        forgeImage.setAttribute('src', 'images/forge-ready.svg')
        forgeImage.setAttribute('alt', 'A stone forge with a small orange fire')
        messageElement.textContent = "Ready to forge"
    } else {
        forgeValue.classList.add('roaring-fire')
        forgeImage.setAttribute('src', 'images/forge-roaring.svg')
        forgeImage.setAttribute('alt', 'A stone forge with tall bright flames and sparks')
        messageElement.textContent = "Roaring fire"
    }


}
 


// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
    heat = 20
    swordsMade = 0
    messageElement.textContent = "Too Cold"
    updateForge()
} 


// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
