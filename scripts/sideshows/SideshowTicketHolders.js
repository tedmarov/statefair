const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
console.dir(contentTarget)
    eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person gawker"></div>
        `
    })
}

// const render = (rideTicket) => {

// }
