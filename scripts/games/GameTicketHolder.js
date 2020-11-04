const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person player"></div>
        `
    })
    eventHub.addEventListener("bigSpenderTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
}

// const render = (rideTicket) => {

// }
