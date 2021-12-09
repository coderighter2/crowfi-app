import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 3) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'BUSD-SPY',
    lpAddresses: {
      97: '0xe9412a9809FadBbaCd8D1bd024E6280f05Bd2437',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      338: '0xe9412a9809FadBbaCd8D1bd024E6280f05Bd2437',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.spy,
  },
  {
    pid: 1,
    lpSymbol: 'SPY-BNB LP',
    lpAddresses: {
      97: '0xe890519b297700BB69a62F18AaA50cAc201A300C',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      338: '0xe890519b297700BB69a62F18AaA50cAc201A300C'
    },
    token: serializedTokens.spy,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms