Create a Progress Bar in React where you pass a duration in which the progress bar is completed 100%

so we need to keep the track of width of the progress bar that is filled
to calculate the width from duration => 

example the duration is 5s and we have to fill the progress bar 100% 
so in every second -> 1s , the progress bar filled = 100% / 5

width to be increased in one second => 100% / duration

we set an timeout which will calculate the new width of the progress bar and set the width if width < 100
on unmount we clear the timeout 