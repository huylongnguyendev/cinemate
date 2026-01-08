import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Film, Heart } from 'lucide-react'

export default function ItemActions() {
  return (
    <>
      <div className="my-4 space-x-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="icon">
              <Heart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Thêm vào yêu thích
          </TooltipContent>
        </Tooltip>
        <Button>
          <Film />
          <p>Xem trailer</p>
        </Button>
      </div>
    </>
  )
}
