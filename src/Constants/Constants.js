export const TEST_MODE = false

export const TESTNET_ADDRESSES = {
    Main: "0xf87a75D1C767D96ec4cddE57C1859e0563D19E18",
    // Main: '0x1679da81bC3654370F806452CF7BD79aC2a38891', // I deployed
    USDT: '0x55d398326f99059fF775485246999027B3197955',
    USDC: '0x64544969ed7EBf5f083679233325356EbE738930',
    BUSD: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    DAI: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
    IBAT: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
}
export const MAINNET_ADDRESSES = {
    Main: "0xf87a75D1C767D96ec4cddE57C1859e0563D19E18",
    USDT: '0x55d398326f99059fF775485246999027B3197955',
    USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    DAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    IBAT: '0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43',
}

export const BSCTestRPCUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545'
export const BSCMainRPCUrl = 'https://bsc-dataseed.binance.org'

export const ContractAddr = TEST_MODE ? TESTNET_ADDRESSES : MAINNET_ADDRESSES
export const RPCUrl = TEST_MODE ? BSCTestRPCUrl : BSCMainRPCUrl

// import WalletConnect from "@walletconnect/web3-provider"
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk"

export const providerOptions = {
    binancechainwallet: {
        package: true,
    },
    // walletconnect: {
    //     package: WalletConnect, // required
    //     options: {
    //         infuraId: process.env.INFURA_ID // required
    //     }
    // },
    // coinbasewallet: {
    //     package: CoinbaseWalletSDK, // Required
    //     options: {
    //         appName: "Coinbase", // Required
    //         infuraId: process.env.INFURA_ID, // Required
    //     }
    // }
}

export const TestnetChainID = 97
export const MainnetChainID = 56


export const TokenList = ["USDT"]
