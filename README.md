## Crypto Watch

### The aim of this project is to create a dashboard in which users can view their crypto investments performance

#### Features of this project will include:

- User Login (oauth2 / passport)
- Manage popular coins (BTC, ETH, LTC, XRP)
- View your investments performance
- Some market indicator functionality, to show market trends - with linear regression and other popular techniques.

#### Serving the project on your local machine.

- git clone project / or download
- cd into your local repository folder
- run, npm install
- run, npm start
- go to port 3000, localhost:3000

#### Dev Notes / Progress

- When a user adds a specific coin type, we should open up an RX subscription to
  the coins live exchange data.

  - Short term development, we'll connect the data without a dynamic sub
  - Long term development, we'll connect the data only once the coin data is    
    relevant.