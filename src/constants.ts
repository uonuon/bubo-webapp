import {
  SmartContractsApi,
  AccountsApi,
  Configuration,
} from '@stacks/blockchain-api-client'

export const CONTRACT_ADDRESS = 's'
export const STACK_API_URL = 'https://stacks-node-api.mainnet.stacks.co'
export const STACKS_API_WS_URL = 'ws://stacks-node-api.mainnet.stacks.co/'

export const STACKS_API_ACCOUNTS_URL = `${STACK_API_URL}/v2/accounts`
const basePath = STACK_API_URL
const config = new Configuration({ basePath })
export const accountsApi = new AccountsApi(config)
export const smartContractsApi = new SmartContractsApi(config)
