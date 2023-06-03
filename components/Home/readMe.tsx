import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ReadMe() {
  return (
    <Alert className="border-amber-200">
      <AlertTriangle className="h-4 w-4 stroke-amber-200" />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        <p>
          All data is sent to <code>OpenAI</code>
        </p>
        <p>
          Before you start please read the
          <Link className="text-cyan-700" href="/about">
            &nbsp;about&nbsp;
          </Link>
          page.
        </p>
      </AlertDescription>
    </Alert>
  )
}
