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
  {
    id: 4,
    name: "Dir 4",
    subFolders: [
      {
        id: 5,
        name: "Dir 5",
        subFolders: [],
        decks: [
          {
            id: 12,
            name: "Deck 12",
            description: "ttt",
            isShared: false,
            isFavorite: false,
          },
        ],
      },
    ],
    decks: [
      {
        id: 11,
        name: "Deck 11",
        description: "ttt",
        isShared: false,
        isFavorite: false,
      },
    ],
  },
]

function flatFolders(folders: Folder[], flattedFolders: Folder[]): void {
  folders.forEach((folder) => {
    flattedFolders.push(folder)
    if (folder.subFolders.length > 0) {
      let subFolders: Folder[] = folder.subFolders.map((sub) => {
        sub.name = `${folder.name} / ${sub.name}`
        return sub
      })
      flatFolders(subFolders, flattedFolders)
    }
  })
}

export default function FolderDetailContainer() {
  const flattedFolder: Folder[] = []
  flatFolders(folderDetails, flattedFolder)

  return (
    <div className="relative overflow-x-hidden p-12">
      {flattedFolder.map((folderDetail) => (
        <FolderDetailSection
          key={folderDetail.id}
          folderDetail={folderDetail}
        />
      ))}
    </div>
  )
}
