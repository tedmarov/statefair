const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
console.dir(contentTarget)
    eventHub.addEventListener("gameTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person player"></div>
        `
    })
}

// const render = (rideTicket) => {

// }
