const request = require('request');

var ids = {};
const MAX_COINS = 10 //This should be discovered mathematically

function processResults(data){

}

function initializeIds(data){
    console.log(data.student_ids);
    for(val in data.student_ids){
        console.log(data.student_ids[val]);
    }
}

function getIdsOriginal(){
    var blockchain_data = {
        method: 'GET',
        url: 'https://422008e4.ngrok.io/state',
        qs: {},
        json: true
      };
    request(blockchain_data, function(err,res,data){
        if(err) {
            console.log(err);
        }
        else{
            ids = data;
            console.log("Finishing up");
            module.exports["ids"] = ids;
        }
    });
}

module.exports = {
    processTestResults: function(data){
        processResults(data);
    },
    initId: function(data){
        initializeIds(data);
    },
    "ids": ids,
    getIds: function(){
        getIdsOriginal();
    }
}