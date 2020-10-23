const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", clickEvent => {
        contentTarget.innerHTML += `
        <div class="person eater"></div>
        `
    })
}

// const render = (rideTicket) => {

// }
