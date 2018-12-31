import BigNumber from 'bignumber.js';
import {
  INVESTIGATE_FAILURE_KEY,
  type,
  notificationStatuses,
  notificationType,
  swapOnlyStatuses,
  swapIndexes,
  txIndexes
} from './config';

/*
ERROR EXAMPLES:

Returned error: known transaction: 4e6c0d9a75b6c826ad7ed3a657a6c3bf2621620bf8879b9a83597865acef2a5b
Returned error: nonce too low

 */

const identifyErrors = errObj => {
  const errorInfo = {};
  try {
    if (errObj.hasOwnProperty('message')) {
      const errorMessage = errObj.message.toString();
      const regex0 = RegExp('(?<=:).*(?=:)');
      const regex1 = RegExp('(?<=:).*');
      const regEx1Matches = regex1.exec(errorMessage);
      const regEx0Matches = regex0.exec(errorMessage);
      if (regEx1Matches !== null) {
        errorInfo.type = regEx1Matches[0];
        errorInfo.message = regEx0Matches[0];
        const regex2 = RegExp(`(?<=${errorInfo.type}:).*`);
        const regEx2Matches = regex2.exec(errorMessage);
        if (regEx2Matches !== null) {
          errorInfo.details = regEx2Matches[0];
          return errorInfo;
        }
        return errorInfo;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
};

const extractErrorMessage = errObj => {
  try {
    if (errObj.hasOwnProperty('message')) {
      const errorMessage = errObj.message.toString();
      const regex1 = RegExp('(?<=:).*');
      const regEx1Matches = regex1.exec(errorMessage);
      if (regEx1Matches !== null) {
        return regEx1Matches[0];
      }
      return errorMessage;
    }
    return errObj;
  } catch (e) {
    console.error(e);
    return errObj;
  }
};

const updateStatusBasedOnReciept = status => {
  return status ? notificationStatuses.COMPLETE : notificationStatuses.FAILED;
};

const formatTransactionHash = (val, network) => {
  return {
    title: 'Transaction',
    read: false,
    timestamp: Date.now(),
    type: notificationType.TRANSACTION,
    status: val[txIndexes.response]
      ? notificationStatuses.PENDING
      : notificationStatuses.FAILED,
    hash: val[txIndexes.response],
    network: network,
    body: {
      error: false,
      errorMessage: '',
      hash: val[txIndexes.response],
      to: val[txIndexes.txDetails].to,
      amount: new BigNumber(val[txIndexes.txDetails].value).toString(),
      nonce: new BigNumber(val[txIndexes.txDetails].nonce).toString(),
      gasPrice: new BigNumber(val[txIndexes.txDetails].gasPrice).toString(),
      gasLimit: new BigNumber(val[txIndexes.txDetails].gas).toString()
    },
    expanded: false
  };
};

const formatTransactionReciept = (entry, val) => {
  entry.status = updateStatusBasedOnReciept(val[txIndexes.response].status);
  entry.body.error = !val[txIndexes.response].status;
  entry.body.errorMessage = val[txIndexes.response].status
    ? ''
    : INVESTIGATE_FAILURE_KEY;
  entry.body.gasUsed = new BigNumber(
    val[txIndexes.response].gasUsed
  ).toString();
  entry.body.blockNumber = new BigNumber(
    val[txIndexes.response].blockNumber
  ).toString();

  return entry;
};

const formatTransactionError = (val, network) => {
  return {
    title: 'Transaction',
    read: false,
    timestamp: Date.now(),
    type: notificationType.ERROR,
    status: notificationStatuses.FAILED,
    swapStatus: notificationStatuses.FAILED,
    hash: val[txIndexes.txDetails].hasOwnProperty('hash')
      ? val[txIndexes.txDetails].hash
      : undefined,
    network: network,
    body: {
      error: true,
      errorMessage: extractErrorMessage(val[txIndexes.response]),
      hash: val[txIndexes.txDetails].hasOwnProperty('hash')
        ? val[txIndexes.txDetails].hash
        : undefined,
      to: val[txIndexes.txDetails].to,
      amount: new BigNumber(val[txIndexes.txDetails].value).toString(),
      nonce: new BigNumber(val[txIndexes.txDetails].nonce).toString(),
      gasPrice: new BigNumber(val[txIndexes.txDetails].gasPrice).toString(),
      gasLimit: new BigNumber(val[txIndexes.txDetails].gas).toString()
    },
    expanded: false
  };
};

const formatTransactionErrorUpdate = (entry, val) => {
  entry.body.error = true;
  entry.type = notificationType.ERROR;
  entry.status = notificationStatuses.FAILED;
  entry.swapStatus = notificationStatuses.FAILED;
  entry.body.errorMessage = val[txIndexes.response].hasOwnProperty('message')
    ? val[txIndexes.response].message
    : val[txIndexes.response];

  return entry;
};

const formatSwap = (val, network) => {
  const isEthereum = val[swapIndexes.label] !== type.SWAP_ORDER;
  const initialState = isEthereum
    ? swapOnlyStatuses.SENT
    : swapOnlyStatuses.NEW;

  const formatted = {
    title: 'Swap',
    read: false,
    timestamp: Date.now(),
    type: notificationType.SWAP,
    status: isEthereum
      ? val[swapIndexes.response]
        ? notificationStatuses.PENDING
        : notificationStatuses.FAILED
      : notificationStatuses.PENDING,
    swapStatus: isEthereum
      ? val[swapIndexes.response]
        ? initialState
        : notificationStatuses.FAILED
      : initialState,
    hasTransaction: isEthereum && val[swapIndexes.response],
    hash: isEthereum ? val[swapIndexes.response] : undefined,
    network: network,
    body: {
      error: false,
      errorMessage: '',
      providerAddress: val[swapIndexes.details].providerAddress,
      to: val[swapIndexes.details].toAddress,
      from: val[swapIndexes.details].fromAddress,
      fromValue: val[swapIndexes.details].fromValue,
      toValue: val[swapIndexes.details].toValue,
      fromCurrency: val[swapIndexes.details].fromCurrency,
      toCurrency: val[swapIndexes.details].toCurrency,
      orderId: val[swapIndexes.details].parsed.orderId,
      statusId: val[swapIndexes.details].parsed.statusId,
      timeRemaining: val[swapIndexes.details].parsed.validFor,
      validFor: val[swapIndexes.details].parsed.validFor,
      createdAt: val[swapIndexes.details].parsed.timestamp,
      rate: val[swapIndexes.details].rate,
      provider: val[swapIndexes.details].provider,
      isDex: val[swapIndexes.details].isDex
    },
    expanded: false
  };

  if (isEthereum) {
    formatted.body = {
      ...formatted.body,
      amount: new BigNumber(val[swapIndexes.txDetails].value).toString(),
      nonce: new BigNumber(val[swapIndexes.txDetails].nonce).toString(),
      gasPrice: new BigNumber(val[swapIndexes.txDetails].gasPrice).toString(),
      gasLimit: new BigNumber(val[swapIndexes.txDetails].gas).toString()
    };
  }

  return formatted;
};

const formatSwapReciept = (entry, val) => {
  entry.status = updateStatusBasedOnReciept(val[swapIndexes.response].status);
  entry.body.error = !val[swapIndexes.response].status;
  entry.body.errorMessage = val[swapIndexes.response].status
    ? ''
    : INVESTIGATE_FAILURE_KEY;
  if (entry.body.isDex) {
    entry.swapStatus = val[swapIndexes.response].status
      ? notificationStatuses.COMPLETE
      : notificationStatuses.FAILED;
    entry.body.timeRemaining = -1;
  }
  entry.body.gasUsed = new BigNumber(
    val[swapIndexes.response].gasUsed
  ).toString();
  entry.body.blockNumber = new BigNumber(
    val[swapIndexes.response].blockNumber
  ).toString();

  return entry;
};

const formatSwapErrorUpdate = (entry, val) => {
  entry.type = notificationType.SWAP_ERROR;
  entry.body.error = true;
  entry.status = notificationStatuses.FAILED;
  entry.swapStatus = notificationStatuses.FAILED;
  entry.body.errorMessage = val[swapIndexes.response].hasOwnProperty('message')
    ? val[swapIndexes.response].message
    : val[swapIndexes.response];
  entry.body.blockNumber = new BigNumber(
    val[swapIndexes.response].blockNumber
  ).toString();
  return entry;
};

const formatSwapError = (val, network) => {
  return {
    title: 'Swap',
    read: false,
    timestamp: Date.now(),
    type: notificationType.SWAP_ERROR,
    status: notificationStatuses.FAILED,
    swapStatus: notificationStatuses.FAILED,
    hasTransaction: true,
    hash: undefined,
    network: network,
    body: {
      error: true,
      errorMessage: extractErrorMessage(val[swapIndexes.response]),
      hash: undefined,
      amount: new BigNumber(val[swapIndexes.txDetails].value).toString(),
      nonce: new BigNumber(val[swapIndexes.txDetails].nonce).toString(),
      gasPrice: new BigNumber(val[swapIndexes.txDetails].gasPrice).toString(),
      gasLimit: new BigNumber(val[swapIndexes.txDetails].gas).toString(),
      to: val[swapIndexes.details].toAddress,
      from: val[swapIndexes.details].fromAddress,
      fromValue: val[swapIndexes.details].fromValue,
      toValue: val[swapIndexes.details].toValue,
      fromCurrency: val[swapIndexes.details].fromCurrency,
      toCurrency: val[swapIndexes.details].toCurrency,
      orderId: val[swapIndexes.details].parsed.orderId,
      statusId: val[swapIndexes.details].parsed.statusId,
      timeRemaining: val[swapIndexes.details].parsed.validFor,
      validFor: val[swapIndexes.details].parsed.validFor,
      createdAt: val[swapIndexes.details].parsed.timestamp,
      rate: val[swapIndexes.details].rate,
      provider: val[swapIndexes.details].provider,
      isDex: val[swapIndexes.details].isDex
    },
    expanded: false
  };
};

export {
  formatTransactionHash,
  formatTransactionReciept,
  formatTransactionError,
  formatTransactionErrorUpdate,
  formatSwap,
  formatSwapReciept,
  formatSwapError,
  formatSwapErrorUpdate,
  identifyErrors
};