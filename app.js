// Handles student's edicoins for a lotion.js blockchain network
const lotion = require('lotion')
const axios = require('axios');
const utils = require('./utils');

let students = utils.generateStudents(5);

let opts = {
  devMode: false,       // set this true to wipe blockchain data between runs
  initialState: students, // initial blockchain state
  peers: [],            // array of '<host>:<p2pport>' of initial tendermint nodes to connect to. does automatic peer discovery if not specified. 
  logTendermint: false, // if true, shows all output from the underlying tendermint process          
  createEmptyBlocks: false, // if false, Tendermint will not create empty blocks which may result in a reduced blockchain file size        
  p2pPort: 46658,       // port to use for tendermint peer connections      
  tendermintPort: 46657 // port to use for tendermint rpc
};

let app = lotion(opts);
let port = process.env.PORT || 3000;


// Functions
let preBetHandler = (state, tx) => {
  // missing smart contract logic
}

let postExamBetsHandler = (state, tx) => {
  // missing smart contract logic
}

// blockchain middleware
app.use(preBetHandler);
app.use(postExamBetsHandler);

app.listen(port).then(appInfo => {
  console.log(`Lotion blockchain network is running on port ${port}`)
})

