import { getQueryClient } from "@/src/shared/get-query-client"
import { DeckDetail, getDeckDetail } from "@/src/deck/api"
import { Button } from "@/src/shadcn/components/ui/button"
import { DeckEditFormDialog } from "@/src/deck/DeckEditFormDialog"

export default async function page({ params }: { params: { id: number } }) {
  const queryClient = getQueryClient()
  let deckDetail: DeckDetail | undefined = undefined
  try {
    deckDetail = await queryClient.fetchQuery(getDeckDetail(params.id))
  } catch (err) {
    /// TODO: handle error
  }
  return (
    <>
      {deckDetail !== undefined && (
        <DeckEditFormDialog deck={deckDetail}>
          <Button>덱 수정</Button>
        </DeckEditFormDialog>
      )}
      <div>TODO: 덱 학습하기 화면 {params.id} </div>
    </>
  )
}
