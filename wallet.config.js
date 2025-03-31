import { http, createConfig } from 'wagmi'
import { linea, lineaSepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [linea, lineaSepolia],
  transports: {
    [linea.id]: http(),
    [lineaSepolia.id]: http()
  },
})