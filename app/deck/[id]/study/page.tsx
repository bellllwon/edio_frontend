import { getQueryClient } from "@/src/shared/get-query-client"
import { getDeckDetail } from "@/src/deck/api"
import StudyPage from "@/src/deck/study/StudyPage"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

export default async function page({ params }: { params: { id: number } }) {
  const queryClient = getQueryClient()
  try {
    const result = await queryClient.fetchQuery({
      ...getDeckDetail(params.id),
      staleTime: 0,
    })
    console.log(result)
  } catch (err) {
    console.log(err)
    /// TODO: handle error
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StudyPage />
    </HydrationBoundary>
  )
}
