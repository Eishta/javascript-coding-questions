1. Write a function that takes a string as input and returns the result for a single game of craps as a string.
Rules of Craps:  Craps is a game based around making dice rolls. Each turn consists of rolling 2 six-sided dice. The values of each dice are added together to determine the amount of the turn. Therefore, any given turn has a potential total value of 2-12. 
Craps has two phases of play, the Come-out Phase and Rolling the point.

Come-Out Phase : This is the beginning of the game. Essentially, it is the first turn. The possible results at this phase are as follows.
Natural - During the come-out phase, the player automatically wins if the turn has a score of  7 or 11.
Craps    -  During the come-out phase, the player automatically lose if the turn has a score of 2, 3, or 12.
Point set - During the come-out phase, the game continues to the next phase of play if the player scores any other numbers (4, 5, 6, 8, 9, or 10) on the first turn.

Rolling the Point Phase: The player will now win or lose based on the point that was set on the first turn of the game, either 4, 5, 6, 8, 9, or 10. The  possible results of this phase are as follows.
Seven Out - The game ends and the player loses if turn has a score of  7.
Made Point - The game ends and the player wins if the turn has same score as Point set  of Come-out Phase.
Roll Again - The game continues and the player throws the dices again if the turn score has other number than 7 or the Point set of Come-out Phase.

For the function output, we want to know the result of the game. 
The result of the game is one of "natural", "craps", "seven out", or "made point". 
The input is a string representing each individual die rolled during the game in the order they were rolled. The individual die rolls are delimited by the '|' character. For example, an input of "6|5" represents a single roll with a total of 11. An input of "2|3|2|3" represents two roll where each total was 5.
The input will be limited to a single game of craps that results in one of the four game results described above.
Finally, we are also interested in tracking if all of the valid point numbers (4, 5, 6, 8, 9, and 10)  were rolled, which should result in a "covered" being appended to the result.Ex: 2|2|2|3|3|3|4|4|4|5|5|5|1|3 result is "made point covered" since the point (4) was set and then all other point numbers (5, 6, 8, 9, and 10) were covered.Ex: 5|5|2|2|2|3|3|3|4|4|4|5|3|4 result is "seven out covered" since the point (10) was made before a seven out was rolled, and the other point numbers (4, 5, 6, 8, and 9) are covered"6|4|2|2|2|3|3|3|4|4|5|4" result is "covered” since all the points are covered and it is not made point or seven out"6|4|2|2|2|3|3|3|4|4" result is “”.  Since 9 is not covered.
As a first pass, you may assume that the input is always fully formed and represents a full, single game. In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
