const {Logger} = require("../config");
const {AirplaneRepository} = require("../repositories");
const airplaneRepository = new AirplaneRepository();
async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        Logger.error("Error in creating Airplane in createAirplane()");
        throw error;
    }
}

module.exports = {
    createAirplane
}