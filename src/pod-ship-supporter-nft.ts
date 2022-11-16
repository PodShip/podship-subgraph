import {
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PodShipSupporterNFT,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/PodShipSupporterNFT/PodShipSupporterNFT"
import { User, SupporterNFT } from "../generated/schema"
// import {
//   ApprovalForAll,
//   OwnershipTransferred,
//   TransferBatch,
//   TransferSingle,
//   URI
// } from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
 
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
 
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  // let supporterNft  = SupporterNFT.load(event.params.ids.toHex())
  // if (!supporterNft) {
  //   supporterNft = new SupporterNFT(event.params.id.toHex())
      
  //   let podshipNftContract = PodShipSupporterNFT.bind(event.address)
  //   supporterNft.metadataURI = podshipNftContract.uri(event.params.id)
  //   supporterNft.creator = event.params.from.toHexString()
  //   supporterNft.ownerAddress = event.params.to.toHexString()
  //   supporterNft.created = event.block.timestamp
  //   supporterNft.save()
  // }

  // if(supporterNft){
  //   supporterNft.ownerAddress = event.params.to.toHexString()
  // }

  // let user  = User.load(event.transaction.from.toHexString())
  // if (!user) {
  //   user = new User(event.transaction.from.toHexString())
  //   user.save()
  // }
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let supporterNft  = SupporterNFT.load(event.params.id.toHex())
  if (!supporterNft) {
    supporterNft = new SupporterNFT(event.params.id.toHex())
      
    let podshipNftContract = PodShipSupporterNFT.bind(event.address)
    supporterNft.metadataURI = podshipNftContract.uri(event.params.id)
    supporterNft.creator = event.params.from.toHexString()
    supporterNft.ownerAddress = event.params.to.toHexString()
    supporterNft.created = event.block.timestamp
    supporterNft.save()
  }

  if(supporterNft){
    supporterNft.ownerAddress = event.params.to.toHexString()
  }

  let user  = User.load(event.transaction.from.toHexString())
  if (!user) {
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}

export function handleURI(event: URIEvent): void {
  let supporterNft  = SupporterNFT.load(event.params.id.toHex())
  if (supporterNft) {
    supporterNft.metadataURI = event.params.value
    supporterNft.save()
  }
}
