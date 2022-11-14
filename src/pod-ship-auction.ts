import { BigInt } from "@graphprotocol/graph-ts"
import {
  PodShipAuction,
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
import { Podcast, PodSale, User } from "../generated/schema"

export function handleApproval(event: Approval): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity.owner = event.params.owner
//   entity.approved = event.params.approved

//   // Entities can be written to the store with `.save()`
//   entity.save()

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.auctions(...)
//   // - contract.balanceOf(...)
//   // - contract.bidders(...)
//   // - contract.bids(...)
//   // - contract.checkUpkeep(...)
//   // - contract.getApproved(...)
//   // - contract.getCurrentToken(...)
//   // - contract.getInterval(...)
//   // - contract.getLastTimestamp(...)
//   // - contract.getNftCreator(...)
//   // - contract.getNftOwner(...)
//   // - contract.getNftTokenId(...)
//   // - contract.getPlatformFee(...)
//   // - contract.getPlatformFeeRecipient(...)
//   // - contract.isApprovedForAll(...)
//   // - contract.minimumTip(...)
//   // - contract.mintNFT(...)
//   // - contract.name(...)
//   // - contract.owner(...)
//   // - contract.ownerOf(...)
//   // - contract.podcastId(...)
//   // - contract.podshipNft(...)
//   // - contract.royaltyInfo(...)
//   // - contract.startAuction(...)
//   // - contract.supportsInterface(...)
//   // - contract.symbol(...)
//   // - contract.tippers(...)
//   // - contract.tokenURI(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAuctionCancelled(event: AuctionCancelled): void {
  let podSale = PodSale.load(event.address.toHex() + "-" + event.params.auctionId.toString())
  if(podSale){
    podSale.isOnSale = false
    podSale.save()
  }
}

export function handleAuctionCreated(event: AuctionCreated): void {
  let podSale = new PodSale(event.address.toHex() + "-" + event.params.auctionId.toString())
  podSale.podcast = event.params.podcastId.toHex()
  podSale.amount = event.params.reservePrice
  podSale.duration = event.params.duration
  podSale.seller = event.transaction.from.toHex()
  podSale.save()

  let user  = User.load(event.transaction.from.toHex())
  if (!user) {
    user = new User(event.transaction.from.toHex())
    user.save()
  }
}

export function handleAuctionResulted(event: AuctionResulted): void {
  let podSale = PodSale.load(event.address.toHex() + "-" + event.params.auctionId.toString())
  if(podSale){
    podSale.isOnSale = false
    podSale.save()
  }

  let auctionContract = PodShipAuction.bind(event.address)
  let podcastId = auctionContract.auctions(event.params.auctionId).getPodcastId()

  let podcast  = Podcast.load(podcastId.toHex())
  if (podcast) {
    podcast.ownerAddress = event.params.winner.toHex()
    podcast.save()
  }
}

export function handleBidPlaced(event: BidPlaced): void {
  let podSale = PodSale.load(event.address.toHex() + "-" + event.params.auctionId.toString())
  if(podSale){
    podSale.amount = event.params.bid
    podSale.save()
  }
}

export function handleBidRefunded(event: BidRefunded): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePlatformFeeChanged(event: PlatformFeeChanged): void {}

export function handlePlatformFeeRecipientChanged(
  event: PlatformFeeRecipientChanged
): void {}

export function handlePodShipContractDeployed(
  event: PodShipContractDeployed
): void {}

export function handleProdcastCreated(event: ProdcastCreated): void {}

export function handleRecentWinner(event: RecentWinner): void {}

export function handleRequestedWinner(event: RequestedWinner): void {}

export function handleTipping(event: Tipping): void {}

export function handleTransfer(event: Transfer): void {

  let podcast  = Podcast.load(event.params.tokenId.toHex())
  if (!podcast) {
    podcast = new Podcast(event.params.tokenId.toHex())
      
    let auctionContract = PodShipAuction.bind(event.address)
    podcast.metadataURI = auctionContract.tokenURI(event.params.tokenId)
    podcast.baseURI = ""
    podcast.isOnSale = true
    podcast.creator = event.params.to.toHex()
    podcast.ownerAddress = event.params.to.toHex()
    podcast.created = event.block.timestamp
    podcast.save()
  }

  if(podcast){
    podcast.ownerAddress = event.params.to.toHex()
  }

  let user  = User.load(event.transaction.from.toHex())
  if (!user) {
    user = new User(event.transaction.from.toHex())
    user.save()
  }
}
