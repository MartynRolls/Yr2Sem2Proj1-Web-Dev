import { flipcard } from "./Components/flipcards.js"

import { copyright_data } from "./Components/copyright.js"
import { web_privacy_data } from "./Components/web_privacy.js"
import { search_engine_optimization_data } from "./Components/search_engine_optimization.js"
import { web_publishing_data } from "./Components/web_publishing.js"
import { web_performance_and_maintenance_data } from "./Components/web_performance_and_maintenance.js"
import { web_security_data } from "./Components/web_security.js"

flipcard.data = copyright_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

flipcard.data = web_privacy_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

flipcard.data = search_engine_optimization_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

flipcard.data = web_publishing_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

flipcard.data = web_performance_and_maintenance_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

flipcard.data = web_security_data
document.getElementById("flipcards").innerHTML += flipcard.insertCard()

