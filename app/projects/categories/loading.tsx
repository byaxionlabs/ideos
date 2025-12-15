import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CategoriesLoading() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-6 w-32 mt-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b pb-4">
        <Skeleton className="h-10 w-full md:w-96" />
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-[180px]" />
        </div>
      </div>

      <div className="space-y-6">
        <Skeleton className="h-10 w-full max-w-md" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-40" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-5 w-20" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-3" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-14" />
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <Skeleton key={i} className="h-6 w-6 rounded-full" />
                        ))}
                      </div>
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>

        <div className="flex justify-center">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </main>
  )
}
