import { Folder } from "@/src/folder/api"
import FolderDetailSection from "@/src/folder/FolderDetailSection"

const folderDetails: Folder[] = [
  {
    id: 1,
    name: "Default",
    subFolders: [],
    decks: [
      {
        id: 1,
        name: "Deck 1",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
    ],
  },
  {
    id: 2,
    name: "Dir 1",
    subFolders: [],
    decks: [
      {
        id: 2,
        name: "Deck 2",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 3,
        name: "Deck 3",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 4,
        name: "Deck 4",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
    ],
  },
  {
    id: 3,
    name: "Dir 2",
    subFolders: [],
    decks: [
      {
        id: 5,
        name: "Deck 5",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 6,
        name: "Deck 6",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 7,
        name: "Deck 7",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 8,
        name: "Deck 8",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 9,
        name: "Deck 9",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
      {
        id: 10,
        name: "Deck 10",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
    ],
  },
]
export default function FolderDetailContainer() {
  return (
    <div className="relative overflow-x-hidden p-12">
      {folderDetails.map((folderDetail) => (
        <FolderDetailSection
          key={folderDetail.id}
          folderDetail={folderDetail}
        />
      ))}
    </div>
  )
}
