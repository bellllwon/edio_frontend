import { getFetch } from "@/src/shared/util/data/fetcher"
import { queryOptions } from "@tanstack/react-query"

export const GET_ACCOUNT = "/api/account"
export type Member = {
  id: number
  email: string
  name: string
  givenName: string
  familyName: string
  profileUrl: string
  createdAt: string
  updateAt: string
}
export type User = {
  id: number
  loginId: string
  rootFolderId: number
  roles: string
  memberResponse: Member
}
export const queryKey = [GET_ACCOUNT]

export function getAccount() {
  return queryOptions({
    queryKey,
    queryFn: (): Promise<User> => getFetch(GET_ACCOUNT),
  })
}
