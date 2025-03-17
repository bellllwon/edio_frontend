import { Meta, StoryObj } from "@storybook/react"
import FolderDetailSection from "@/src/folder/FolderDetailSection"

const meta = {
  title: "FolderDetailSection",
  component: FolderDetailSection,
} satisfies Meta<typeof FolderDetailSection>

export default meta

type Story = StoryObj<typeof FolderDetailSection>

export const OnlyOneDeck: Story = {
  args: {
    folderDetail: {
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
  },
}

export const HasThreeDeck: Story = {
  args: {
    folderDetail: {
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
  },
}

export const HasMultiDeck: Story = {
  args: {
    folderDetail: {
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
  },
}
