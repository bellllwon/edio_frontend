import { Metadata } from "next"
import FolderDetailContainer from "@/src/folder/FolderDetailContainer"

export const metadata: Metadata = {
  title: "워크스페이스",
  description: "워크스페이스",
}
export default function WorkspacePage() {
  return <FolderDetailContainer />
}
