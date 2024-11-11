
import { createAlchemyWeb3 } from '@alch/alchemy-web3'

const Web3Alc = createAlchemyWeb3("https://eth-sepolia.alchemyapi.io/v2/API");

    async function mint() {
        var _mintAmount = Number(document.querySelector("[name=amount]").value); 
        var mintRate = Number(await contract.methods.cost().call()); 
        var totalAmount = mintRate * _mintAmount;
        //STARTS BELOW:
        await Web3Alc.eth.getMaxPriorityFeePerGas().then((tip) => { 
          Web3Alc.eth.getBlock('pending').then((block) => {
              var baseFee = Number(block.baseFeePerGas);
              var maxPriority = Number(tip);
              var maxFee = baseFee + maxPriority
          contract.methods.mint(account, _mintAmount)
              .send({ from: account,
                value: String(totalAmount),
                maxFeePerGas: maxFee,
                maxPriorityFeePerGas: maxPriority});
          });
      })
  }
