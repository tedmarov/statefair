const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person rider"></div>
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
