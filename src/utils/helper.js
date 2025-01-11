function compareTime(timestamp1, timestamp2){
    let dateTime1 = new Date(timestamp1);
    let dateTime2 = new Date(timestamp2);
    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}