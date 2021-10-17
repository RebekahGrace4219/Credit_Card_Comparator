
# Credit Comparator

## Visit
The output of the code can be seen here: https://credit-comparator.glitch.me

## Problem
Different credit cards can have wildly different cash back percentages, categories, and limits. 
Additionally, many of them have fees.  Comparing ten or more credit cards by eye is incredibly 
difficult. Most online lists that suggest which credit card do so in broad strokes, i.e. 
recommending cards for "people who like to travel" or "people who use wholesale stores" and do 
not use raw numbers. Compiling credit card data across multiple websites and adding it to an excel 
sheet would technically work, but it proved very cumbersome. There was a need to
compare exactly what different cards would offer based on an individual's likely spending. 

## Solution
The expenditures and entries are used to judge the cash back for thirteen different credit cards. 
Then, the top three cash back cards and the top rotating category card are displayed for the user.

##  Gaps
Rotating cash back sections are difficult to tackle. It is not known what sections a credit card company will pick before the year 
begins, and thus the cash back benefits are impossible to predict. The program attempts to work around the issue by warning the user of
the highest ranked rotating category card, allowing them to go the credit card website and judge its usefulness to them as an individual.

## Exemplified Skills
Languages: HTML, CSS, JavaScript
Testing is evident here, which is an important part of any program. (see ./tests/)
Good Coding Practices 
  Small, Readable Functions
  READ.ME file
  Packaged files
  JavaScript exists in its own file, not spliced into the HTML
  Clear Formatting

## Contribution
A thank you to my roommate, who saw my comparator spreadsheet and said "Why don't you just program something?".

## Choose a License
https://choosealicense.com/licenses/mit/. The standard MIT license is used here.

## Me
Hi! I'm a graduating computer science student at University of California Davis.  This project was built for my own personal use (thoough my roommates did give it a go).
I can't promise that the information is 100% correct- credit card companies change their offerings all the time.  I update every two weeks. I do hope it helps you!