
const MAGIC_NUMBER = Math.round(Math.random() * 100)

const getFortune = () => {
    if(MAGIC_NUMBER > 50){
        return 'Today is your lucky day!!'
    }else{
        return 'Need to put more efforts today!!'
    }
}

module.exports = {
    getFortune,
    MAGIC_NUMBER
}