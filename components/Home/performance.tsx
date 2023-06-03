import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"

const performanceSchema = z.string().nullable()

interface PerformanceProps {
  data: z.TypeOf<typeof performanceSchema> | undefined
}

export function Performance({ data }: PerformanceProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <span className="mr-1">Performance</span>
          <span className="text-sm text-muted-foreground">
            Code runs efficiently and optimally.
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="p-4">
            {!!data ? (
              <small>{data}</small>
            ) : (
              <Skeleton className="h-3 w-[260px]" />
            )}
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}
