export const presaleABI = {
  _format: "hh-sol-artifact-1",
  contractName: "Presale",
  sourceName: "contracts/Presale.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "claimer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenAmount",
          type: "uint256",
        },
      ],
      name: "ClaimedTokens",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
      ],
      name: "EmergencyWithdrawal",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "remainingEther",
          type: "uint256",
        },
      ],
      name: "PresaleFinalized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenAmount",
          type: "uint256",
        },
      ],
      name: "TokensDeposited",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenAmount",
          type: "uint256",
        },
      ],
      name: "TokensPurchased",
      type: "event",
    },
    {
      inputs: [],
      name: "buyTokens",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimStartTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "claimTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimUnsoldToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "depositTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "emergencyWithdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "finalizePresale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "investor",
          type: "address",
        },
      ],
      name: "getAmountInvested",
      outputs: [
        {
          internalType: "uint256",
          name: "invested",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTotalInvested",
      outputs: [
        {
          internalType: "uint256",
          name: "tenetRaised",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "hardCapEther",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_metadataURI",
          type: "string",
        },
        {
          internalType: "address",
          name: "_tokenAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minPurchase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_maxPurchase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_presaleStartTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_presaleEndTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_claimStartTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_hardCapEther",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_softCapEther",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "maxPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "metadataURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "presaleEndTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "presaleStartTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "purchases",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "softCapEther",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract ERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalTENETRaised",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361130290816100618239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826303ee438c14610ff8575081631cd5baa914610fd9578163249b7c1914610fba5781632c4e722e14610f9b57816333b5b62e14610f7d5781633717d4bb14610d585781633a2ddae114610b7c57816348c54b9d14610d775781635f94573314610d58578163715018a614610cef5781637c4b414d14610bb3578163842a77d314610b7c5781638da5cb5b14610b56578163977b055b14610b37578163a0a6e940146109ec578163a6a11bb1146109cd578163a82524b2146109ae578163d0febe4c1461081e578163d5f1e8d8146107ff578163db2e21bc14610735578163e0edd5c6146104e8578163e661316c14610242578163f2fde38b14610157575063fc0c546a1461012d57600080fd5b346101535781600319360112610153576020906001600160a01b03600254169051908152f35b5080fd5b90503461023e57602060031936011261023e5761017261119a565b9061017b6111b5565b6001600160a01b038092169283156101d557505082548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b90503461023e5761014060031936011261023e5767ffffffffffffffff81358181116104e457366023820112156104e45780830135918083116104d15784519286602093601f199261029b8685601f8401160188611161565b808752366024828401011161023e578060248793018389013786010152602435936001600160a01b03968786168096036104cd5760a435976102db6111b5565b6002541661048b57508051928311610478579082916001946102fd8654611127565b601f8111610406575b508092601f8511600114610388575050889261037d575b505060001982841b9260031b1c19161790555b73ffffffffffffffffffffffffffffffffffffffff19600254161760025560443560035560643590556084356005558060075560e43560095561010435600a5561012435600b5560085580f35b01519050388061031d565b86959392919316858b527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6938b905b8282106103ed57505084116103d4575b505050811b019055610330565b015160001960f88460031b161c191690553880806103c7565b84840151865588979095019493840193908101906103b7565b9091929350858a527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f860160051c81019183871061046e575b869594939291601f89920160051c01915b828110610460575050610306565b8c8155879650889101610452565b9091508190610441565b602488604188634e487b7160e01b835252fd5b8685606492519162461bcd60e51b8352820152601360248201527f416c726561647920696e697469616c697a6564000000000000000000000000006044820152fd5b8880fd5b602486604186634e487b7160e01b835252fd5b8480fd5b90503461023e578260031936011261023e576105026111b5565b60085442106106f357826001600160a01b0380600254169284519363313ce56760e01b855260209485818481855afa9081156106e95785916106bc575b508651907f70a0823100000000000000000000000000000000000000000000000000000000825230848301528682602481865afa9182156106b257869261067d575b506105a99060ff670de0b6b3a76400006105a060065460035490611230565b04911690611230565b816105b2578580f35b6105bb916112bf565b91826105c657808580f35b848694610619965416918851968795869485937fa9059cbb0000000000000000000000000000000000000000000000000000000085528401602090939291936001600160a01b0360408201951681520152565b03925af19182156106705761063793508492610643575b5050611274565b38808281808080808580f35b6106629250803d10610669575b61065a8183611161565b81019061125c565b3880610630565b503d610650565b50505051903d90823e3d90fd5b9091508681813d83116106ab575b6106958183611161565b810103126106a75751906105a9610581565b8580fd5b503d61068b565b88513d88823e3d90fd5b6106dc9150863d88116106e2575b6106d48183611161565b810190611243565b3861053f565b503d6106ca565b87513d87823e3d90fd5b6020606492519162461bcd60e51b8352820152602060248201527f50726573616c65206d75737420656e64206265666f726520636c61696d696e676044820152fd5b9190503461023e578260031936011261023e57338352600c602052808320549182156107bd575082808080853382f1156107b257338352600c6020528281812055610782826006546112bf565b600655519081527f23d6711a1d031134a36921253c75aa59e967d38e369ac625992824315e204f2060203392a280f35b51913d9150823e3d90fd5b6020606492519162461bcd60e51b8352820152601460248201527f4e6f2066756e647320746f2077697468647261770000000000000000000000006044820152fd5b505034610153578160031936011261015357602090600a549051908152f35b90508260031936011261023e57600754421015806109a3575b1561096157805434101580610955575b15610913576108583460065461120d565b600a54106108d157507f8fafebcaf9d154343dad25669bfa277f4fbacd7ac6b0c4fed522580e040a0f33670de0b6b3a764000061089760035434611230565b0491338452600c6020528084206108af34825461120d565b90556108bd3460065461120d565b60065580519234845260208401523392a280f35b6020606492519162461bcd60e51b8352820152601060248201527f48617264206361702072656163686564000000000000000000000000000000006044820152fd5b6020606492519162461bcd60e51b8352820152601760248201527f496e76616c696420707572636861736520616d6f756e740000000000000000006044820152fd5b50600554341115610847565b6020606492519162461bcd60e51b8352820152601360248201527f50726573616c65206973206e6f74206f70656e000000000000000000000000006044820152fd5b506008544210610837565b5050346101535781600319360112610153576020906007549051908152f35b5050346101535781600319360112610153576020906009549051908152f35b90503461023e578260031936011261023e57610a066111b5565b6008544210610acf57600654600b5411610a8d5750478281158015610a54575b507fba77ddc9e26933f19061480be65d8ea3dcf88fb70efd476df9515333cabee8c46020838551908152a180f35b81808481936001600160a01b03835416908390610a84575bf115610a79578238610a26565b5051903d90823e3d90fd5b506108fc610a6c565b6020606492519162461bcd60e51b8352820152601460248201527f536f667420636170206e6f7420726561636865640000000000000000000000006044820152fd5b6020608492519162461bcd60e51b8352820152602260248201527f50726573616c65206d75737420656e64206265666f72652066696e616c697a6960448201527f6e670000000000000000000000000000000000000000000000000000000000006064820152fd5b5050346101535781600319360112610153576020906005549051908152f35b5050346101535781600319360112610153576001600160a01b0360209254169051908152f35b50503461015357602060031936011261015357806020926001600160a01b03610ba361119a565b168152600c845220549051908152f35b90503461023e578260031936011261023e57610bcd6111b5565b6001600160a01b03600254169083835163313ce56760e01b815260209384828581845afa8015610ce557610c2060649187948691610cc8575b5060ff610c18600a5460035490611230565b911690611230565b94875194859384927f23b872dd00000000000000000000000000000000000000000000000000000000845233908401523060248401528760448401525af1908115610cbe577f77acf75e237f9aae98f997395832d522bdb695e4a9bd07704936aa889a3667d19491610c99918791610ca1575b50611274565b51908152a180f35b610cb89150853d87116106695761065a8183611161565b38610c93565b84513d87823e3d90fd5b610cdf9150853d87116106e2576106d48183611161565b38610c06565b86513d85823e3d90fd5b8334610d555780600319360112610d5557610d086111b5565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b5050346101535781600319360112610153576020906006549051908152f35b90503461023e578260031936011261023e576009544210610f3b573383526020600c815282842054918215610ed4576001600160a01b036002541684519163313ce56760e01b835283838281855afa918215610eca57610df58593610e41958a91610ead575b5060ff670de0b6b3a76400006105a06003548b611230565b918888518096819582947fa9059cbb00000000000000000000000000000000000000000000000000000000845233908401602090939291936001600160a01b0360408201951681520152565b03925af1908115610cbe577fe9aa550fd75d0d28e07fa9dd67d3ae705678776f6c4a75abd09534f93e7d7907939491610e80918791610e965750611274565b338552600c82528481812055519283523392a280f35b610cb89150843d86116106695761065a8183611161565b610ec49150853d87116106e2576106d48183611161565b38610ddd565b86513d89823e3d90fd5b60849184519162461bcd60e51b8352820152602360248201527f4e6f20746f6b656e7320746f20636c61696d20666f722074686973206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b6020606492519162461bcd60e51b8352820152601a60248201527f546f6b656e20636c61696d696e67206973206e6f74206f70656e0000000000006044820152fd5b90503461023e578260031936011261023e5760209250549051908152f35b5050346101535781600319360112610153576020906003549051908152f35b5050346101535781600319360112610153576020906008549051908152f35b505034610153578160031936011261015357602090600b549051908152f35b9150503461023e578260031936011261023e57828160019182549261101c84611127565b808452938181169081156110e7575060011461108b575b5061104392509492940384611161565b815192839160208084528251928382860152825b84811061107557505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201611057565b8087528691507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8483106110cc5750611043935050810160200138611033565b819350908160209254838589010152019101909184926110b3565b602093506110439592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b82010138611033565b90600182811c92168015611157575b602083101461114157565b634e487b7160e01b600052602260045260246000fd5b91607f1691611136565b90601f601f19910116810190811067ffffffffffffffff82111761118457604052565b634e487b7160e01b600052604160045260246000fd5b600435906001600160a01b03821682036111b057565b600080fd5b6001600160a01b036000541633036111c957565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b9190820180921161121a57565b634e487b7160e01b600052601160045260246000fd5b8181029291811591840414171561121a57565b908160209103126111b0575160ff811681036111b05790565b908160209103126111b0575180151581036111b05790565b1561127b57565b606460405162461bcd60e51b815260206004820152601560248201527f546f6b656e207472616e73666572206661696c656400000000000000000000006044820152fd5b9190820391821161121a5756fea2646970667358221220f0fc9c293b594731b43bb248efe4bcc2e0cace472bf5184acad9f34240ce86d564736f6c63430008110033",
  deployedBytecode:
    "0x608060408181526004918236101561001657600080fd5b600092833560e01c91826303ee438c14610ff8575081631cd5baa914610fd9578163249b7c1914610fba5781632c4e722e14610f9b57816333b5b62e14610f7d5781633717d4bb14610d585781633a2ddae114610b7c57816348c54b9d14610d775781635f94573314610d58578163715018a614610cef5781637c4b414d14610bb3578163842a77d314610b7c5781638da5cb5b14610b56578163977b055b14610b37578163a0a6e940146109ec578163a6a11bb1146109cd578163a82524b2146109ae578163d0febe4c1461081e578163d5f1e8d8146107ff578163db2e21bc14610735578163e0edd5c6146104e8578163e661316c14610242578163f2fde38b14610157575063fc0c546a1461012d57600080fd5b346101535781600319360112610153576020906001600160a01b03600254169051908152f35b5080fd5b90503461023e57602060031936011261023e5761017261119a565b9061017b6111b5565b6001600160a01b038092169283156101d557505082548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b90503461023e5761014060031936011261023e5767ffffffffffffffff81358181116104e457366023820112156104e45780830135918083116104d15784519286602093601f199261029b8685601f8401160188611161565b808752366024828401011161023e578060248793018389013786010152602435936001600160a01b03968786168096036104cd5760a435976102db6111b5565b6002541661048b57508051928311610478579082916001946102fd8654611127565b601f8111610406575b508092601f8511600114610388575050889261037d575b505060001982841b9260031b1c19161790555b73ffffffffffffffffffffffffffffffffffffffff19600254161760025560443560035560643590556084356005558060075560e43560095561010435600a5561012435600b5560085580f35b01519050388061031d565b86959392919316858b527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6938b905b8282106103ed57505084116103d4575b505050811b019055610330565b015160001960f88460031b161c191690553880806103c7565b84840151865588979095019493840193908101906103b7565b9091929350858a527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f860160051c81019183871061046e575b869594939291601f89920160051c01915b828110610460575050610306565b8c8155879650889101610452565b9091508190610441565b602488604188634e487b7160e01b835252fd5b8685606492519162461bcd60e51b8352820152601360248201527f416c726561647920696e697469616c697a6564000000000000000000000000006044820152fd5b8880fd5b602486604186634e487b7160e01b835252fd5b8480fd5b90503461023e578260031936011261023e576105026111b5565b60085442106106f357826001600160a01b0380600254169284519363313ce56760e01b855260209485818481855afa9081156106e95785916106bc575b508651907f70a0823100000000000000000000000000000000000000000000000000000000825230848301528682602481865afa9182156106b257869261067d575b506105a99060ff670de0b6b3a76400006105a060065460035490611230565b04911690611230565b816105b2578580f35b6105bb916112bf565b91826105c657808580f35b848694610619965416918851968795869485937fa9059cbb0000000000000000000000000000000000000000000000000000000085528401602090939291936001600160a01b0360408201951681520152565b03925af19182156106705761063793508492610643575b5050611274565b38808281808080808580f35b6106629250803d10610669575b61065a8183611161565b81019061125c565b3880610630565b503d610650565b50505051903d90823e3d90fd5b9091508681813d83116106ab575b6106958183611161565b810103126106a75751906105a9610581565b8580fd5b503d61068b565b88513d88823e3d90fd5b6106dc9150863d88116106e2575b6106d48183611161565b810190611243565b3861053f565b503d6106ca565b87513d87823e3d90fd5b6020606492519162461bcd60e51b8352820152602060248201527f50726573616c65206d75737420656e64206265666f726520636c61696d696e676044820152fd5b9190503461023e578260031936011261023e57338352600c602052808320549182156107bd575082808080853382f1156107b257338352600c6020528281812055610782826006546112bf565b600655519081527f23d6711a1d031134a36921253c75aa59e967d38e369ac625992824315e204f2060203392a280f35b51913d9150823e3d90fd5b6020606492519162461bcd60e51b8352820152601460248201527f4e6f2066756e647320746f2077697468647261770000000000000000000000006044820152fd5b505034610153578160031936011261015357602090600a549051908152f35b90508260031936011261023e57600754421015806109a3575b1561096157805434101580610955575b15610913576108583460065461120d565b600a54106108d157507f8fafebcaf9d154343dad25669bfa277f4fbacd7ac6b0c4fed522580e040a0f33670de0b6b3a764000061089760035434611230565b0491338452600c6020528084206108af34825461120d565b90556108bd3460065461120d565b60065580519234845260208401523392a280f35b6020606492519162461bcd60e51b8352820152601060248201527f48617264206361702072656163686564000000000000000000000000000000006044820152fd5b6020606492519162461bcd60e51b8352820152601760248201527f496e76616c696420707572636861736520616d6f756e740000000000000000006044820152fd5b50600554341115610847565b6020606492519162461bcd60e51b8352820152601360248201527f50726573616c65206973206e6f74206f70656e000000000000000000000000006044820152fd5b506008544210610837565b5050346101535781600319360112610153576020906007549051908152f35b5050346101535781600319360112610153576020906009549051908152f35b90503461023e578260031936011261023e57610a066111b5565b6008544210610acf57600654600b5411610a8d5750478281158015610a54575b507fba77ddc9e26933f19061480be65d8ea3dcf88fb70efd476df9515333cabee8c46020838551908152a180f35b81808481936001600160a01b03835416908390610a84575bf115610a79578238610a26565b5051903d90823e3d90fd5b506108fc610a6c565b6020606492519162461bcd60e51b8352820152601460248201527f536f667420636170206e6f7420726561636865640000000000000000000000006044820152fd5b6020608492519162461bcd60e51b8352820152602260248201527f50726573616c65206d75737420656e64206265666f72652066696e616c697a6960448201527f6e670000000000000000000000000000000000000000000000000000000000006064820152fd5b5050346101535781600319360112610153576020906005549051908152f35b5050346101535781600319360112610153576001600160a01b0360209254169051908152f35b50503461015357602060031936011261015357806020926001600160a01b03610ba361119a565b168152600c845220549051908152f35b90503461023e578260031936011261023e57610bcd6111b5565b6001600160a01b03600254169083835163313ce56760e01b815260209384828581845afa8015610ce557610c2060649187948691610cc8575b5060ff610c18600a5460035490611230565b911690611230565b94875194859384927f23b872dd00000000000000000000000000000000000000000000000000000000845233908401523060248401528760448401525af1908115610cbe577f77acf75e237f9aae98f997395832d522bdb695e4a9bd07704936aa889a3667d19491610c99918791610ca1575b50611274565b51908152a180f35b610cb89150853d87116106695761065a8183611161565b38610c93565b84513d87823e3d90fd5b610cdf9150853d87116106e2576106d48183611161565b38610c06565b86513d85823e3d90fd5b8334610d555780600319360112610d5557610d086111b5565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b5050346101535781600319360112610153576020906006549051908152f35b90503461023e578260031936011261023e576009544210610f3b573383526020600c815282842054918215610ed4576001600160a01b036002541684519163313ce56760e01b835283838281855afa918215610eca57610df58593610e41958a91610ead575b5060ff670de0b6b3a76400006105a06003548b611230565b918888518096819582947fa9059cbb00000000000000000000000000000000000000000000000000000000845233908401602090939291936001600160a01b0360408201951681520152565b03925af1908115610cbe577fe9aa550fd75d0d28e07fa9dd67d3ae705678776f6c4a75abd09534f93e7d7907939491610e80918791610e965750611274565b338552600c82528481812055519283523392a280f35b610cb89150843d86116106695761065a8183611161565b610ec49150853d87116106e2576106d48183611161565b38610ddd565b86513d89823e3d90fd5b60849184519162461bcd60e51b8352820152602360248201527f4e6f20746f6b656e7320746f20636c61696d20666f722074686973206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b6020606492519162461bcd60e51b8352820152601a60248201527f546f6b656e20636c61696d696e67206973206e6f74206f70656e0000000000006044820152fd5b90503461023e578260031936011261023e5760209250549051908152f35b5050346101535781600319360112610153576020906003549051908152f35b5050346101535781600319360112610153576020906008549051908152f35b505034610153578160031936011261015357602090600b549051908152f35b9150503461023e578260031936011261023e57828160019182549261101c84611127565b808452938181169081156110e7575060011461108b575b5061104392509492940384611161565b815192839160208084528251928382860152825b84811061107557505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201611057565b8087528691507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8483106110cc5750611043935050810160200138611033565b819350908160209254838589010152019101909184926110b3565b602093506110439592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b82010138611033565b90600182811c92168015611157575b602083101461114157565b634e487b7160e01b600052602260045260246000fd5b91607f1691611136565b90601f601f19910116810190811067ffffffffffffffff82111761118457604052565b634e487b7160e01b600052604160045260246000fd5b600435906001600160a01b03821682036111b057565b600080fd5b6001600160a01b036000541633036111c957565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b9190820180921161121a57565b634e487b7160e01b600052601160045260246000fd5b8181029291811591840414171561121a57565b908160209103126111b0575160ff811681036111b05790565b908160209103126111b0575180151581036111b05790565b1561127b57565b606460405162461bcd60e51b815260206004820152601560248201527f546f6b656e207472616e73666572206661696c656400000000000000000000006044820152fd5b9190820391821161121a5756fea2646970667358221220f0fc9c293b594731b43bb248efe4bcc2e0cace472bf5184acad9f34240ce86d564736f6c63430008110033",
  linkReferences: {},
  deployedLinkReferences: {},
};
