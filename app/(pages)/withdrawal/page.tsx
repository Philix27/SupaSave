"use client"

import { Suspense, useEffect, useState } from "react"
import { Loader } from "@/comps"
import { useMinipay } from "@/contract"
import { useAccount, useConnect } from "wagmi"

export default function WithdrawalPage() {
  const { address } = useAccount()
  const connect = useConnect()
  const { walletAddress, isConnected } = useMinipay()
  const [userExists, setUserExists] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { formattedBalance, userAddress } = useMain()

  useEffect(() => {
    const checkIfUserExistsAndSet = async () => {
      if (address) {
        // const doesUserExist = await checkIfUserExists(address)
        // setUserExists(doesUserExist)
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    }

    // const fetchUserByWalletAddress = async () => {
    //   const fetchedStekcitUser = await getUserByWalletAddress(address, {
    //     _walletAddress: address as `0x${string}`,
    //   })

    //   setSteckitUser(fetchedStekcitUser)
    // }

    checkIfUserExistsAndSet()
    // fetchUserByWalletAddress()
  }, [address, userExists])

  if (isLoading) {
    return (
      <div className="mt-[70px]">
        <Loader />
      </div>
    )
  }

  return (
    <div className={`mt-[70px] px-6 md:max-w-[60%]`}>
      <h1 className={`my-4 text-xl font-bold text-primary`}>Withdrawal</h1>

      <div className={`mt-2`}>
        <div className={`flex items-start justify-between`}>
          <p>Wallet Address:</p>
          {userAddress && (
            <p>
              {userAddress!
                .substring(0, 3)
                .concat("***")
                .concat(
                  userAddress!.substring(
                    userAddress!.length - 3,
                    userAddress!.length
                  )
                )}
            </p>
          )}
        </div>
        <div className={`mt-2 flex items-start justify-between`}>
          <p>Total Savings:</p>
          <p>$100</p>
        </div>
        <div className={`mt-2 items-start justify-between`}>
          {walletAddress && <p>{walletAddress}</p>} -
          {address && <p>{address}</p>}
        </div>
      </div>
    </div>
  )
}
