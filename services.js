const AccountModel = require("./account.model");
const { emit } = require("./account.model");

async function getTicketTotalByRole(pid){
    console.time(pid, 'label')
    let o = {},
    self = this;
    o.map = function () {
        emit(this.role, this.ticket)
    };
    o.reduce = function (k, vals) {
        function sum(arr){
            let total = 0
            for(let i = 0; i< arr.length; i++){
                if(arr[i] == undefined){
                    total += 0
                }else{
                    total += arr[i]
                }
            }
            return total
        }
        return sum(vals)
    };
   const result = await AccountModel.mapReduce(o)
   console.timeEnd(pid, 'label')
   return result
}

module.exports = { 
    getTicketTotalByRole
}