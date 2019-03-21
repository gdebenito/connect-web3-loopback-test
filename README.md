# connect-web3

I'm learning loopback and web3.

Installing parity node:
```
sudo snap install parity
```

plug on parity local node
```
parity --chain dev --jsonrpc-apis all --geth --logging=rpc=trace
```
jsonrpc-apis all: unlock accounts
--geth: metodos rpc para geth

little test
```js
const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');
web3.eth.net.getId().then(console.log);
```


for installing loopback:
```sh
lb4 app # creating app
lb4 controller # adding empty controller
```


then  `npm start`
