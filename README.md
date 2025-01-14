# WebCardGames
Web poker games collection

## Project Introduction
Our project aims to provides players with several small games related to poker cards online. Players can learn and play different games on our website. Besides, we also hope to offer some interesting story about the game together with the game introduction.
We utilized a set of APIs that allow us to draw decks of poker cards, shuffle, and draw cards [Deck of Cards API](https://stackoverflow.com/questions/6957443/how-to-display-div-after-click-the-button-in-javascript). In this project, we use Vue as the base of our MVP model.

---

## Workload Distribution 

**PS: Due to network issue, Yifei and Ziyu haven't upload their work to this GitHub Repo, hopefully they will do it soon.**

### Bosen Cheng
**Current Stage**
1. something 1
2. something 2

**Plan to do**
1. something 1
2. something 2


### Yating Liu
**Current Stage**
1. something 1
2. something 2

**Plan to do**
1. something 1
2. something 2

### Yifei Wang
**Current Stage**
1. Achieve basic functions of blackjack in C++

**Plan to do**
1. Rewrite the balckjack in MVP

###  Ziyu Tang
**Current Stage**
1. something 1
2. something 2

**Plan to do**
1. something 1
2. something 2




## Project Structure 
- index.html: display the content of the website from App
- js (folder):
    - apiConfig: store const values used for drawing data from the API
    - app.js: show the navigation bar and display different presenters
    - cardSource.js: fetch data from APIs
    - variable.js: store and pass the project variables to different files under one namespace. (To avoid the usage of global variable)
    - xxxModel.js: store different game models
    - views (folder):
        - xxxView.js: show the game components
- vuejs (folder):
    - xxxPresenter: display and pass data to the corresponding View components
- assets (folder): contains images like the background 
