import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"

const bugsSchema = z.string().nullable()

interface BigOProps {
  data: z.TypeOf<typeof bugsSchema> | undefined
}

export function Bugs({ data }: BigOProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <span className="mr-1">Bugs</span>
          <span className="text-sm text-muted-foreground">
            Issues and solutions for errors.
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="p-4">
            {!!data ? (
              <small>{data}</small>
            ) : (
              <Skeleton className="h-3 w-[280px]" />
            )}
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}
