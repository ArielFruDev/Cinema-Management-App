const express = require('express')
const cors = require('cors')
const subsRouter = require('./Routers/subscriptionsRouter')
const membersBL = require('./BL/membersBL')
const moviesBL = require('./BL/moviesBL')
const subscriptionsRouter = require('./Routers/subscriptionsRouter')
const membersRouter = require('./Routers/membersRouter')
const moviesRouter = require('./Routers/moviesRouter')


let app = express()

app.use(cors())
app.use(express.json())

require('./configs/subscriptionsDB')
app.use("/subscriptions", subscriptionsRouter)
app.use("/members", membersRouter)
app.use("/movies", moviesRouter)


app.listen(8000, (req, resp) => {
    console.log("server 8000 is listening");
    // membersBL.pushUsersToMongo() <- activate only once, if data has not inserted yet.
    // moviesBL.pushShowsToMongo()  // <- activate only once, if data has not inserted yet.
})




//לברר יותר לעומק לגבי cors, express.json
