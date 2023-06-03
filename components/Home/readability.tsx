import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"

const readabilitySchema = z.nullable(z.string().nullable())

interface ReadabilityProps {
  data: z.TypeOf<typeof readabilitySchema> | undefined
}

export function Readability({ data }: ReadabilityProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <span className="mr-1">Readability</span>
          <span className="text-sm text-muted-foreground">
            Code is easy to understand.
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="p-4">
            {!!data ? (
              <small>{data}</small>
            ) : (
              <Skeleton className="h-3 w-[240px]" />
            )}
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}
