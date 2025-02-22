import { postFetch } from "@/src/shared/util/data/fetcher"

export const REQ_DECK = "/api/deck"
export type DeckCreateWithFileReq = {
  request: DeckCreateReq
  file?: File | null
}
export type DeckCreateReq = {
  folderId: number
  categoryId: number
  name: string
  description?: string
  isShared: boolean
}
export type Deck = {
  id: number
  name: string
  description: string
  isShared: boolean
  isFavorite: boolean
}

export const queryKey = [REQ_DECK]

export function createNewDeck(
  createRequest: DeckCreateWithFileReq,
): Promise<void> {
  const formData = new FormData()
  const jsonBlob = new Blob([JSON.stringify(createRequest.request)], {
    type: "application/json",
  })
  formData.append("request", jsonBlob)

  if (createRequest.file !== null) {
    formData.append("file", createRequest.file!)
  }
  return postFetch(REQ_DECK, formData)
}
