const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        eventHub.dispatchEvent(new CustomEvent("rideTicketPurchased", {
            detail: {
                buttonThatWasClicked: "Ride Ticket"
            }
        }))

        }}

)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

