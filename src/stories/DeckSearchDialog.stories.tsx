import { Meta, StoryObj } from "@storybook/react"
import DeckSearchDialog from "@/src/deck/DeckSearchDialog"
import { Folder } from "@/src/folder/api"
import { Deck } from "@/src/deck/api"

const meta = {
  title: "deck/DeckSearchDialog",
  component: DeckSearchDialog,
} satisfies Meta<typeof DeckSearchDialog>

export default meta

type Story = StoryObj<typeof meta>

let id = 0
const createFolder = (depth = 0): Folder | null => {
  depth++
  if (depth > 5) return null
  const sub = new Array(5)
    .fill(0)
    .map(() => createFolder(depth + 1))
    .filter((v) => v != null)
  return {
    id: id++,
    name: `folder name ${id}`,
    subFolders: sub,
    decks: new Array(5).fill(0).map(createDeck),
  }
}
const createDeck = (): Deck => {
  return {
    id: id++,
    folderId: id,
    categoryId: 1,
    name: `deck name ${id}`,
    description: "sample",
    isShared: false,
    isFavorite: false,
  }
}

const mockData: Folder = createFolder(1)!

export const Default: Story = {
  args: {
    rootFolder: mockData,
    children: <div>덱 검색</div>,
  },
}
