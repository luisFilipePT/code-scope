"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AlertTriangle, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

type ReviewCode = (value: string) => void

interface CodeProps {
  reviewCode: ReviewCode
}

const FormSchema = z.object({
  code: z.string().min(4, {
    message: "Message must be at least 10 characters.",
  }),
  // .max(256, {
  //   message: "Message must not be longer than 256 characters.",
  // }),
})

export function Code({ reviewCode }: CodeProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await reviewCode(data.code)
    // form.reset({ code: "" })
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Code</CardTitle>
            <CardDescription>
              The <code>function</code> to perform analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={form.formState.isSubmitting}
                      placeholder="Insert your code here."
                      className="h-[380px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <p>
              <Button
                className="mr-2 min-w-[150px] flex-1"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  <span>Analyse</span>
                )}
              </Button>
            </p>
            <div className="flex items-center text-muted-foreground">
              <AlertTriangle className="mr-1 h-4 w-4 stroke-amber-200" />
              <small>
                Model: gpt-3.5-turbo * Generated content may be inaccurate or
                false.
              </small>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
