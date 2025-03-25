import {Deck} from "@/src/deck/api"
import {Card, CardContent, CardFooter} from "@/src/shadcn/components/ui/card"
import {Button} from "@/src/shadcn/components/ui/button"
import {MoreHorizontal} from "lucide-react"

/**
 * 덱 정보 출력 카드 컴포넌트
 */
export default function DeckInfoCard({
  deck,
  buttonAction,
}: DeckInfoCardProps) {
  return (
    <Card className="w-full max-w-[220px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <div
          className="h-24 bg-sky-100 relative overflow-hidden"
          style={
            deck.imagePath
              ? {
                  backgroundImage: `url(${deck.imagePath})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          {deck.imagePath && (
            <div className="absolute inset-0 bg-sky-200/60 backdrop-blur-sm" />
          )}
          <div className="absolute top-2 right-2 flex items-center space-x-2">
            <button
              className="p-1 rounded-full hover:bg-white.20"
              aria-label="메뉴 열기"
            >
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2">
          {deck.imagePath ? (
            <div
              className="w-16 h-16 rounded-full border-4 border-white shadow-sm overflow-hidden"
              style={{
                backgroundImage: `url(${deck.imagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-sky-200 border-4 border-white shadow-sm flex items-center justify-center">
              <span className="text-sky-500 text-xl font-bold">
                {deck.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="pt-10 pb-4 px-4">
        <h3 className="text-lg font-bold text-center mb-2">{deck.name}</h3>
        <p className="text-sm text-gray-600 text-center line-clamp-3">
          {deck.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={buttonAction}
        >
          입장하기
        </Button>
      </CardFooter>
    </Card>
  )
}

type DeckInfoCardProps = {
  deck: Deck
  buttonAction: () => {}
}
