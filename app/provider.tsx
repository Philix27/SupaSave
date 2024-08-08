"use client"

import { ReactNode } from "react"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"
import { WagmiProvider, http } from "wagmi"
import { celo, celoAlfajores } from "wagmi/chains"

const queryClient = new QueryClient()
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string
const rainbowConfig = getDefaultConfig({
  appName: "Supersave",
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
})

export default function Provider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={rainbowConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {props.children}
          <Toaster />
          <Analytics />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
