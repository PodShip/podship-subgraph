import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  AuctionCancelled,
  AuctionCreated,
  AuctionResulted,
  BidPlaced,
  BidRefunded,
  OwnershipTransferred,
  PlatformFeeChanged,
  PlatformFeeRecipientChanged,
  PodShipContractDeployed,
  ProdcastCreated,
  RecentWinner,
  RequestedWinner,
  Tipping,
  Transfer
} from "../generated/PodShipAuction/PodShipAuction"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createAuctionCancelledEvent(
  auctionId: BigInt
): AuctionCancelled {
  let auctionCancelledEvent = changetype<AuctionCancelled>(newMockEvent())

  auctionCancelledEvent.parameters = new Array()

  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )

  return auctionCancelledEvent
}

export function createAuctionCreatedEvent(
  auctionId: BigInt,
  reservePrice: BigInt,
  royaltyPercent: BigInt,
  podcastId: BigInt,
  duration: BigInt
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reservePrice",
      ethereum.Value.fromUnsignedBigInt(reservePrice)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyPercent",
      ethereum.Value.fromUnsignedBigInt(royaltyPercent)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "podcastId",
      ethereum.Value.fromUnsignedBigInt(podcastId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return auctionCreatedEvent
}

export function createAuctionResultedEvent(
  auctionId: BigInt,
  winner: Address,
  winningBid: BigInt
): AuctionResulted {
  let auctionResultedEvent = changetype<AuctionResulted>(newMockEvent())

  auctionResultedEvent.parameters = new Array()

  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "winningBid",
      ethereum.Value.fromUnsignedBigInt(winningBid)
    )
  )

  return auctionResultedEvent
}

export function createBidPlacedEvent(
  auctionId: BigInt,
  bidder: Address,
  bid: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("bid", ethereum.Value.fromUnsignedBigInt(bid))
  )

  return bidPlacedEvent
}

export function createBidRefundedEvent(
  auctionId: BigInt,
  bidder: Address,
  bid: BigInt
): BidRefunded {
  let bidRefundedEvent = changetype<BidRefunded>(newMockEvent())

  bidRefundedEvent.parameters = new Array()

  bidRefundedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  bidRefundedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidRefundedEvent.parameters.push(
    new ethereum.EventParam("bid", ethereum.Value.fromUnsignedBigInt(bid))
  )

  return bidRefundedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPlatformFeeChangedEvent(
  platformFee: BigInt
): PlatformFeeChanged {
  let platformFeeChangedEvent = changetype<PlatformFeeChanged>(newMockEvent())

  platformFeeChangedEvent.parameters = new Array()

  platformFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFee",
      ethereum.Value.fromUnsignedBigInt(platformFee)
    )
  )

  return platformFeeChangedEvent
}

export function createPlatformFeeRecipientChangedEvent(
  platformFeeRecipient: Address
): PlatformFeeRecipientChanged {
  let platformFeeRecipientChangedEvent = changetype<
    PlatformFeeRecipientChanged
  >(newMockEvent())

  platformFeeRecipientChangedEvent.parameters = new Array()

  platformFeeRecipientChangedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFeeRecipient",
      ethereum.Value.fromAddress(platformFeeRecipient)
    )
  )

  return platformFeeRecipientChangedEvent
}

export function createPodShipContractDeployedEvent(): PodShipContractDeployed {
  let podShipContractDeployedEvent = changetype<PodShipContractDeployed>(
    newMockEvent()
  )

  podShipContractDeployedEvent.parameters = new Array()

  return podShipContractDeployedEvent
}

export function createProdcastCreatedEvent(
  IPFSUri: string,
  nftCreator: Address,
  tokenId: BigInt
): ProdcastCreated {
  let prodcastCreatedEvent = changetype<ProdcastCreated>(newMockEvent())

  prodcastCreatedEvent.parameters = new Array()

  prodcastCreatedEvent.parameters.push(
    new ethereum.EventParam("IPFSUri", ethereum.Value.fromString(IPFSUri))
  )
  prodcastCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftCreator",
      ethereum.Value.fromAddress(nftCreator)
    )
  )
  prodcastCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return prodcastCreatedEvent
}

export function createRecentWinnerEvent(recentWinner: Address): RecentWinner {
  let recentWinnerEvent = changetype<RecentWinner>(newMockEvent())

  recentWinnerEvent.parameters = new Array()

  recentWinnerEvent.parameters.push(
    new ethereum.EventParam(
      "recentWinner",
      ethereum.Value.fromAddress(recentWinner)
    )
  )

  return recentWinnerEvent
}

export function createRequestedWinnerEvent(requestId: BigInt): RequestedWinner {
  let requestedWinnerEvent = changetype<RequestedWinner>(newMockEvent())

  requestedWinnerEvent.parameters = new Array()

  requestedWinnerEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return requestedWinnerEvent
}

export function createTippingEvent(
  podcastId: BigInt,
  tip: BigInt,
  supporter: Address
): Tipping {
  let tippingEvent = changetype<Tipping>(newMockEvent())

  tippingEvent.parameters = new Array()

  tippingEvent.parameters.push(
    new ethereum.EventParam(
      "podcastId",
      ethereum.Value.fromUnsignedBigInt(podcastId)
    )
  )
  tippingEvent.parameters.push(
    new ethereum.EventParam("tip", ethereum.Value.fromUnsignedBigInt(tip))
  )
  tippingEvent.parameters.push(
    new ethereum.EventParam("supporter", ethereum.Value.fromAddress(supporter))
  )

  return tippingEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
