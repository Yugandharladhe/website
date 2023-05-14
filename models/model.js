const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ModelSchema = new Schema({
    // store name, last, buy, Sell, volume, base_unit of
    name:{
        type:String
    },
    last:{
        type:String
    },
    buy:{
        type:String
    },
    sell:{
        type:String
    },
    volume:{
        type:String
    },
    base_unit:{
        type:String
    }
  },
  { timestamps: true }
)


module.exports = mongoose.model('Model', ModelSchema)