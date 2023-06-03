import { z } from "zod"

import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"

const securitySchema = z.nullable(z.string().nullable())

interface BigOProps {
  data: z.TypeOf<typeof securitySchema> | undefined
}

export function Security({ data }: BigOProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>
        <div className="flex items-center">
          <span className="mr-1">Security</span>
          <span className="text-sm text-muted-foreground">
            Code is protected against attacks.
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="p-4">
            {!!data ? (
              <small>{data}</small>
            ) : (
              <Skeleton className="h-3 w-[220px]" />
            )}
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}
