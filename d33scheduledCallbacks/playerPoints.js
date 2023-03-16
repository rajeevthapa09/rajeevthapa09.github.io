

/*Be sure to use meaningful variable names and write JSdoc comments for 
findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

/*
export function findTotalScores(teamStatisticsArr) {

}


export function findTotalPlayerPoints(player) {

}
*/

/**
 *
 * @param {Array} teamStats is an array of players stats
 * @returns {Array} highScore is an array of object that includes player high score
 * Step 1: loop through teamStats array
 * Step 2: Get Player object and find the highest point
 * Step 3: Add the player jersey number and highest point to an object
 */
function findHighScores(teamStats){ 
   const playerObj ={};
    const highScore = [];
    //let maxScore;
    for(const player of teamStats){
        for(const stats of player.stats){
            
               // let highScore = stats.map(stats => )
               console.log(stats.points);
                /*if (stats[0].points > stats[1].points){
                    playerObj.jersey = player.jersey;
                    playerObj.high = stats[0].points;
                }else{
                    playerObj.jersey = player.jersey;
                    playerObj.high = stats[1].points;
                }*/
                //highScore.push(playerObj);
        }
    }
    
    return highScore;
    //return maxScore;
}


const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3]; 
findHighScores(teamStats);

// console.log("expect", findHighScores(teamStats));