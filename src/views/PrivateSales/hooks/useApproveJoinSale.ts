import { useCallback } from 'react'
import { ethers, Contract } from 'ethers'
import { useMasterchef } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveJoinSale = (token: Contract, manager: string) => {
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    const tx = await callWithGasPrice(token, 'approve', [manager, ethers.constants.MaxUint256])
    const receipt = await tx.wait()
    return receipt.status
  }, [token, manager, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveJoinSale