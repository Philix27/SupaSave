"use client"
import React from "react"

export default function DepositPage() {
  return (
    <div className={`mt-[70px]`}>
      <div className={`px-4`}>
        <div
          className={`w-ful my-4 flex justify-between rounded-lg border-2 border-primary bg-accent p-5`}
        >
          <div>
            <p className="text-sm">Wallet Balance:</p>
            <h1 className="text-xl font-extrabold">0 cUSD</h1>
          </div>
          <img src={"./wallet2.png"} className="h-full w-[70px]" />
        </div>
        <div className="mx-3">
          <p>Lock your savings with few clicks</p>
        </div>
        <div className={`mx-2 my-4 flex flex-col items-center justify-center`}>
          <form onSubmit={() => {}}>
            <div className={` w-full space-y-5 pb-4`}>
              <input
                type="number"
                placeholder="Amount"
                className={`w-full border-2 border-primary p-2  text-black`}
              />

              <input
                type="text"
                placeholder="Purpose"
                maxLength={10}
                className={`w-full border-2 border-primary p-2`}
              />

              <select
                id="duration"
                className={`w-full border-2 border-primary p-2`}
              >
                <option value="duration">Select Duration</option>
                <option value="1week">1week</option>
                <option value="2weeks">2weeks</option>
                <option value="3weeks">1months</option>
                <option value="4weeks">2months</option>
                <option value="5weeks">3months</option>
              </select>

              <div className={`w-full space-x-2 border-2 border-primary p-2`}>
                <label>
                  <input
                    type="checkbox"
                    placeholder="lock"
                    className={`mr-2`}
                  />
                  Locked
                </label>
              </div>
            </div>

            <div className={`mt-6  flex items-center justify-center`}>
              <button
                // onClick={() => connect({ connector: injected() })}
                type="submit"
                className={`rounded-lg bg-primary px-8  py-2 text-center font-bold text-white`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
