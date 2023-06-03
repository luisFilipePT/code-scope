import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"

const bigOSchema = z.object({
  time: z.string().nullable(),
  space: z.string().nullable(),
})

interface BigOProps {
  data: z.TypeOf<typeof bigOSchema> | undefined
}

export function BigO({ data }: BigOProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <span className="mr-1">BigO Time & Space</span>
          <span className="text-sm text-muted-foreground">
            Time and space complexity measurement
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="p-4">
            {!data?.time && !data?.space && (
              <Skeleton className="h-3 w-[200px]" />
            )}
            {data?.time && (
              <small>
                Time - {data.time}
                <br />
              </small>
            )}
            {data?.space && <small>Space - {data.space}</small>}
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}
