import { Meta, StoryObj } from "@storybook/react"
import AccountProfile from "@/src/account/AccountProfile"

const meta = {
  title: "account/AccountProfile",
  component: AccountProfile,
} satisfies Meta

export default meta

type Story = StoryObj<typeof AccountProfile>

export const Default: Story = {
  args: {
    account: {
      id: 130,
      loginId: "test@gmail.com",
      rootFolderId: 9,
      roles: "ROLE_USER",
      memberResponse: {
        id: 56,
        email: "test@gmail.com",
        name: "testTest",
        givenName: "Test",
        familyName: "test",
        profileUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocJpnmqja_MemvreWihoSC9XfgIwPu55uwwUJeppdYJAMYq9cRPt=s96-c",
        createdAt: "2024-12-09T06:41:58",
        updateAt: "2024-12-09T06:41:58",
      },
    },
  },
}
