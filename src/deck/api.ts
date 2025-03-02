import { getFetch, postFetch } from "@/src/shared/util/data/fetcher"
import { queryOptions } from "@tanstack/react-query"

export const REQ_DECK = "/api/deck"
export type DeckCreateWithFileReq = {
  request: DeckCreateReq
  file?: File | null
}
export const GET_DECK = "/api/deck"
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
export type DeckDetail = Deck & {
  cards: Card[]
}

export const queryKey = [REQ_DECK]

export function createNewDeck(
  createRequest: DeckCreateWithFileReq,
): Promise<Deck> {
  const formData = new FormData()

  formData.append("request", JSON.stringify(createRequest.request))
  formData.append("file", createRequest.file!)

  return postFetch(REQ_DECK, formData)
}

export function getDeckDetail(deckId: number) {
  return queryOptions({
    queryKey: [GET_DECK, deckId],
    queryFn: (): Promise<DeckDetail> => getFetch(GET_DECK, { id: deckId }),
    staleTime: Infinity,
  })
}
