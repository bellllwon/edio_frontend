import { User } from "@/src/account/api"
import Image from "next/image"
import { Settings } from "lucide-react"

export default function AccountProfile({ account }: AccountProfileProps) {
  return (
    <div className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
          <Image
            src={account.memberResponse.profileUrl}
            alt="Profile picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">
            {account.memberResponse.name}
          </span>
          <span className="text-xs text-gray-500">{account.loginId}</span>
        </div>
      </div>
      <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
        <Settings size={20} />
      </button>
    </div>
  )
}

interface AccountProfileProps {
  account: User
}
