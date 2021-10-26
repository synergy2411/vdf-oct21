const LUCKY_NUMBER = Math.round(Math.random() * 100)

const getDailyQuotes = () =>{
    if(LUCKY_NUMBER > 30){
        return "Run 5 miles today"
    }else{
        return 'hard luck, try again!'
    }
}

module.exports = {
    LUCKY_NUMBER,
    getDailyQuotes
}