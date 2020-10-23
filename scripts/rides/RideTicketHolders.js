const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
console.dir(contentTarget)
    eventHub.addEventListener("rideTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person rider"></div>
        `
    })
}

// const render = (rideTicket) => {

// }
