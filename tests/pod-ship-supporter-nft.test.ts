import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PodShipSupporterNFTApprovalForAll } from "../generated/schema"
import { PodShipSupporterNFTApprovalForAll as PodShipSupporterNFTApprovalForAllEvent } from "../generated/PodShipSupporterNFT/PodShipSupporterNFT"
import { handlePodShipSupporterNFTApprovalForAll } from "../src/pod-ship-supporter-nft"
import { createPodShipSupporterNFTApprovalForAllEvent } from "./pod-ship-supporter-nft-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let approved = "boolean Not implemented"
    let newPodShipSupporterNFTApprovalForAllEvent = createPodShipSupporterNFTApprovalForAllEvent(
      account,
      operator,
      approved
    )
    handlePodShipSupporterNFTApprovalForAll(
      newPodShipSupporterNFTApprovalForAllEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PodShipSupporterNFTApprovalForAll created and stored", () => {
    assert.entityCount("PodShipSupporterNFTApprovalForAll", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PodShipSupporterNFTApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PodShipSupporterNFTApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "operator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PodShipSupporterNFTApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approved",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
