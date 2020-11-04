const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person eater"></div>
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
