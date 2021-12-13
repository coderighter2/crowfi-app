import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET, CRONOS, CRONOSTESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  
  wbnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB', 'https://www.binance.com/'),
  
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(MAINNET, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18, 'CAKE', 'PancakeSwap Token', ''),
  nft: new Token(MAINNET, '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D', 6, 'NFT', 'APENFT', 'https://apenft.org'),
  dai: new Token(
    MAINNET,
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  ust: new Token(
    MAINNET,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped UST Token',
    'https://mirror.finance/',
  ),
  busd: new Token(MAINNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD', 'https://www.paxos.com/busd/'),
  usdt: new Token(MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD', 'https://tether.to/'),
  btcb: new Token(MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC', 'https://bitcoin.org/'),
  eth: new Token(MAINNET, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'Binance-Peg Ethereum Token', 'https://ethereum.org/en/'),
  usdc: new Token(MAINNET, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'Binance-Peg USD Coin', 'https://www.centre.io/usdc'),
  syrup: new Token(MAINNET, '0x009cF7bC57584b7998236eff51b98A168DceA9B0', 18, 'SYRUP', 'SyrupBar Token', 'https://pancakeswap.finance/'),
  babycake: new Token(MAINNET, '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c', 18, 'BABYCAKE', 'Baby Cake Token', 'https://babycake.app/'),
  spy: new Token(TESTNET, '0x6F25144001Ce324E745c3FF25a646A292883feD5', 0, 'SPY', 'Smarty Pay', ''),
  pcrow: new Token(MAINNET, '0x6ac901eDA879Df9317BB18dF83c4440043D6bBbF', 18, 'PCROW', 'Crow Presale Token', 'https://crowfi.com/'),
  crow: new Token(MAINNET, '0x85529Febc78834e84a2055204BB802a6a4E2b0bf', 18, 'CROW', 'Crow Token', 'https://crowfi.com/'),
}
export const testnetTokens = {
  wbnb: new Token(TESTNET, '0xf9a7A2b01Bf758776703677719F8aCf018600070', 18, 'WBNB', 'Wrapped BNB', 'https://www.binance.com/'),
  cake: new Token(TESTNET, '0x12C6f5dEcaAda351D39E911E8f71e8e99F6D71D9', 0, 'CAKE', 'PancakeSwap Token', 'https://pancakeswap.finance/'),
  spy: new Token(TESTNET, '0x6F25144001Ce324E745c3FF25a646A292883feD5', 0, 'SPY', 'SmartyPay Token', 'https://smartypay.io'),
  busd: new Token(TESTNET, '0x2aFD1d7DADEfb7fE31364A4f57f704c1558C8Edc', 18, 'BUSD', 'Binance USD', 'https://www.paxos.com/busd/'),
  usdc: new Token(TESTNET, '0x9e91D184a3ff79b9A7F666809769BF2E06a4fd7a', 6, 'USDC', 'Binance-Peg USD Coin', 'https://www.centre.io/usdc'),
  pcrow: new Token(TESTNET, '0x6ac901eDA879Df9317BB18dF83c4440043D6bBbF', 18, 'PCROW', 'Crow Presale Token', 'https://crowfi.com/'),
  crow: new Token(TESTNET, '0x85529Febc78834e84a2055204BB802a6a4E2b0bf', 18, 'CROW', 'Crow Token', 'https://crowfi.com/'),
}

export const cronosTestTokens = {
  wbnb: new Token(
    CRONOSTESTNET,
    '0xf9a7A2b01Bf758776703677719F8aCf018600070',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  cake: new Token(
    CRONOSTESTNET,
    '0xf9872a4Ea77278F06613A817D563012bfc7761B3',
    0,
    'SPY',
    'SmartyPay Token (fake Cake)',
    'https://pancakeswap.finance/',
  ),
  wcro: new Token(
    CRONOSTESTNET,
    '0xdd7fbd7e655de4b8eccb2b3254f6b69b569f0a9a',
    18,
    'WCRO',
    'Wrapped CRO',
    'https://cronos.crypto.org',
  ),
  crow: new Token(
    CRONOSTESTNET,
    '0xf9872a4Ea77278F06613A817D563012bfc7761B3',
    18,
    'Crow',
    'Crow Token',
    'https://crowfi.app',
  ),
  pcrow: new Token(CRONOSTESTNET, '0xf7F778D7dbbEff45128B467070620C5e018ea58d', 18, 'PCROW', 'Crow Presale Token', 'https://crowfi.app/'),
  busd: new Token(
    CRONOSTESTNET,
    '0x6A21673bB781C00ae176c640fb8AC8cab1019b60',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  usdc: new Token(
    CRONOSTESTNET,
    '0xdba521ad7b3d84c417a224f2830b9399d7180076',
    6,
    'USDC',
    'USD Coin',
    'https://www.centre.io/usdc',
  ),
  crow1: new Token(CRONOSTESTNET, '0xe4e4750Ec8ff4C2E489F40906f7412dEf221cc82', 0, 'CROW!', 'CROW Token1', 'https://crowfi.com'),
  crow2: new Token(CRONOSTESTNET, '0xe4e4750Ec8ff4C2E489F40906f7412dEf221cc82', 0, 'CROW2', 'CROW Token2', 'https://crowfi.com'),
  msc: new Token(CRONOSTESTNET, '0xb3ae8E5bccebD6F7002C3bF1D5713477B16f8791', 18, 'MSC', 'MyShitCoin', ''),
  spy: new Token(CRONOSTESTNET, '0x6F25144001Ce324E745c3FF25a646A292883feD5', 0, 'SPY', 'SmartyPay Token', 'https://smartypay.io'),
}

export const cronosTokens = {
  wbnb: new Token(
    CRONOS,
    '0xf9a7A2b01Bf758776703677719F8aCf018600070',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  cake: new Token(
    CRONOS,
    '0xf9872a4Ea77278F06613A817D563012bfc7761B3',
    0,
    'Crow',
    'Crow Token',
    'https://crowfi.app',
  ),
  wcro: new Token(
    CRONOS,
    '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    18,
    'WCRO',
    'Wrapped CRO',
    'https://cronos.crypto.org',
  ),
  crow: new Token(
    CRONOS,
    '0xf9872a4Ea77278F06613A817D563012bfc7761B3',
    18,
    'Crow',
    'Crow Token',
    'https://crowfi.app',
  ),
  pcrow: new Token(CRONOS, '0xf7F778D7dbbEff45128B467070620C5e018ea58d', 18, 'PCROW', 'Crow Presale Token', 'https://crowfi.app/'),
  busd: new Token(
    CRONOS,
    '0x6A21673bB781C00ae176c640fb8AC8cab1019b60',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  usdc: new Token(
    CRONOS,
    '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    6,
    'USDC',
    'USD Coin',
    'https://www.centre.io/usdc',
  ),
  crow1: new Token(CRONOS, '0xe4e4750Ec8ff4C2E489F40906f7412dEf221cc82', 0, 'CROW!', 'CROW Token1', 'https://crowfi.com'),
  crow2: new Token(CRONOS, '0xe4e4750Ec8ff4C2E489F40906f7412dEf221cc82', 0, 'CROW2', 'CROW Token2', 'https://crowfi.com'),
  msc: new Token(CRONOS, '0xb3ae8E5bccebD6F7002C3bF1D5713477B16f8791', 18, 'MSC', 'MyShitCoin', ''),
  spy: new Token(CRONOS, '0x6F25144001Ce324E745c3FF25a646A292883feD5', 0, 'SPY', 'SmartyPay Token', 'https://smartypay.io'),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {});
  }

  if (parseInt(chainId, 10) === ChainId.CRONOSTESTNET) {
    return cronosTestTokens
  }

  if (parseInt(chainId, 10) === ChainId.CRONOS) {
    return cronosTokens
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()