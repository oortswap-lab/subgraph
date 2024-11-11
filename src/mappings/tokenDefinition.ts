import { Address, BigInt } from '@graphprotocol/graph-ts'

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    const staticDefinitions: Array<TokenDefinition> = [
      {
        address: Address.fromString('0xB32C5B2b73d7B3Cd2eF1fFB07Aa0fDBa312558F3'),
        symbol: 'WOORT',
        name: 'Wrapped OORT',
        decimals: BigInt.fromI32(18)
      },
      {
        address: Address.fromString('0xB80f7Bf6Dfff705729ADDEe32d1eb9CA8d2649C7'),
        symbol: 'USDT',
        name: 'USDT Token',
        decimals: BigInt.fromI32(18),
      },
      {
        address: Address.fromString('0x23225b36510E80E6600700e6d1345718dccfB954'),
        symbol: 'CCN',
        name: 'Computecoin',
        decimals: BigInt.fromI32(18),
      },
    ]
    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): TokenDefinition | null {
    const staticDefinitions = this.getStaticDefinitions()
    const tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      const staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }
}
