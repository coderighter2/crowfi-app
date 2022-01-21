import React, { useCallback, useMemo } from 'react'
import { Token } from '@pancakeswap/sdk'
import { InjectedModalProps, Text } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'
import TransactionConfirmationModal, { ConfirmationModalContent, TransactionErrorContent } from 'components/TransactionConfirmationModal'
import ConfirmModalFooter from './ConfirmModalFooter'
import ConfirmModalHeader from './ConfirmModalHeader'



interface ConfirmAirdropModalProps {
  token?: Token
  receipts?: string[]
  amounts?: BigNumber[]
  attemptingTxn: boolean
  txHash?: string
  onConfirm: () => void
  errorMessage?: string
  customOnDismiss?: () => void
}

const ConfirmAirdropModal: React.FC<InjectedModalProps & ConfirmAirdropModalProps> = ({
    token,
    receipts,
    amounts,
  onConfirm,
  onDismiss,
  customOnDismiss,
  errorMessage,
  attemptingTxn,
  txHash,
}) => {

  const { t } = useTranslation()

  const totalAmount = amounts? getFullDisplayBalance(amounts.reduce((acum, amount) => {
    return acum.plus(amount)
  }), token.decimals) : '0'

  const modalHeader = useCallback(() => {
    return token && receipts && amounts ? (
      <ConfirmModalHeader
        token={token}
        receipts={receipts}
        amounts={amounts}
      />
    ) : null
  }, [token, receipts, amounts])

  const modalBottom = useCallback(() => {
    return token ? (
      <ConfirmModalFooter
        onConfirm={onConfirm}
        errorMessage={errorMessage}
      />
    ) : null
  }, [token, onConfirm, errorMessage])
  
  const confirmationContent = useCallback(
    () =>
      errorMessage ? (
        <TransactionErrorContent onDismiss={onDismiss} message={errorMessage} />
      ) : (
        <ConfirmationModalContent topContent={modalHeader} bottomContent={modalBottom} />
      ),
    [onDismiss, modalBottom, modalHeader, errorMessage],
  )


  return (
    <TransactionConfirmationModal
      title={t('Confirm Airdrop')}
      onDismiss={onDismiss}
      customOnDismiss={customOnDismiss}
      attemptingTxn={attemptingTxn}
      hash={txHash}
      content={confirmationContent}
      pendingText={token ? t('Airdropping %amount% %symbol%', {amount:totalAmount, symbol: token.symbol}) : ''}
      currencyToAdd={token}
    />
  )
}

export default ConfirmAirdropModal
