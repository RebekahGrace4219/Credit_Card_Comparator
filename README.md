NOTE: As of Oct 8, 2021 this code is a work in progress.  Intended finish date is 10/11/2021.
Remaining Items:
  UI design with CSS
  Tests for all the credit cards
  Notifications for good rotating category cards
  clean read me of these notes
  

# Credit Comparator

Credit Comparator exists to solve for me a very real problem- what is the best credit card for my particular usage?
There are so many potential cash back credit cards on the market, and a million lists for "the best card for cash back" or 
"the best card for students", but I wanted to take my particular spending and tailor a card to meet my needs.

## Problem
Compiling credit card data across multiple websites and adding it to an excel sheet was becoming cumbersome. There was a need to
compare exactly what differnt cards would offer based on an individual's likely spending. 

## Solution
Each spending category's data is sent to a loop that judges each and every card.  Each card's cash back evaluator is stored nicely 
into its own little function.  Then, when the best handful of cards are found, they are suggested to the user, along with a brief 
statement as to the benefits of the cards.

##  Gaps
Rotating cash back sections are difficult to tackle. It is not known what sections a credit card company will pick before the year 
begins, and thus the cash back benefits are impossible to predict. The program attempts to assuage the issue by warner the user of
the highest otherwise ranked rotating category card, allowing them to go the credit card website and judge its usefulness to them.

## Exemplified Skills
Languages: HTML, CSS, JavaScript
Testing is evident here, which is an important part of any program. (see tests.js)
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