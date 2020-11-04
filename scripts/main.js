// Import and invoke the ticket booth component function
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { TicketBooth } from "./TicketBooth.js"
import { TicketCounter } from "./TicketCounter.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
TicketCounter()