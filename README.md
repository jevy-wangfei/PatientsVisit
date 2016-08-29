# Patients Visit
Coding Challenge

# Rough Plan

Task            |   Deadline
------          | ------
Plan and Design | Mon, Aug 27
UI Prototype    | Night, Aug 27
Interact Function | Night, Aug 29 (Have to leave for one day on Aug 28, personal reason)
Multi-browser Test,  Bug fix and submit  | 4:00 pm, Aug 30


# Design
<img src="http://jevy.wang/img/tmp/codingChallenge.png">

# UX/UI design

* Simplify operation: 
  + Choose a patient -> Read history notes -> Add new Note.
* Usage Guiding built in UI: 
  + Use Color, Symbol, Animation and help Text to teach user when they use the software.
* Complicate danger operation: 
  + Click "Remove Patient" button -> Click "X" of a patient -> Confirm ? -> Delete a Patient
* Error Info Display on incorrect text field 
  + Input: Day, Month, Year checking, new note without choosing patient, etc.
* Use icon to represent rarely used function: New Patient.

# Functions
## Functions included within page
* Patients operations: New, Delete, Click, Filter
  + Use JQuery selector to complete these operations.
  + Use data-* to pass data

* Notes operations: New, Delete
  + Use "id" attribute to select element
  + Use function parameter to passing data
(Note: Showing different way to do HTML&CSS operation)

* Listeners: Since the most content of page is dynamic, specific listeners should be added to changed content.
  + Patients Choosing Listener
  + Patients Sorting Listener

* Page init: loading and displaying data

## Functions outside page
Because no backend server to provide data and data operations, this app uses functions in "patientsVisit.js" to simulate CRUD operations. Replacing these functions with AJAX call could make the app running without re-coding.

# library
* bootstrap
* jquery
* jquery-ui
* Javascript, Css and html

# Time Spend (Total: roughly 16 hours)
* Design & UI: 4 hours
* patientsVisit.js: 3 hours
* App Functions in JS: 7 hours
* Test and Bugs fix: 3 hours
* Doc and description: 1 hour
