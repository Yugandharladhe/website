const Model=require("../models/model")
const axios=require("axios")
const store=async()=>{
    try{
        const data=await axios.get("https://api.wazirx.com/api/v2/tickers")
        // console.log(data)
        const cryptoData = Object.keys(data.data).slice(0,10).map(key => ({
            name: data.data[key].name,
            last: data.data[key].last,
            buy: data.data[key].buy,
            sell: data.data[key].sell,
            volume: data.data[key].volume,
            base_unit: data.data[key].base_unit
          }));
        //   console.log(cryptoData)
          cryptoData.forEach(async(element) => {
            const SaveData=await Model.create({
                name:element.name,
                last:element.last,
                buy:element.buy,
                sell:element.sell,
                volume:element.volume,
                base_unit:element.base_unit
            })
        })
    }
    catch(err)
    {
        console.log(err)
    }
    // try {
    //     const data = await axios.get('https://api.wazirx.com/api/v2/tickers');
    //     // const data = await response.json();
    //     console.log(data)
    //     const insertQueries = Object.keys(data)
    //       .slice(0, 10)
    //       .map((key) => {
    //         const { name, last, buy, sell, volume, base_unit } = data[key];
    //         return ({
    //             name, last, buy, sell, volume, base_unit
    //         });
    //       });
    
    //     await Promise.all(insertQueries.map(async(query) => await Model.create(query)));
    //     console.log('Data stored in database!');
    //   } catch (error) {
    //     console.error(error);
    //   }

}

module.exports=store