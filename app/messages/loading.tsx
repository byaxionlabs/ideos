import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function MessagesLoading() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Conversations Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card className="h-[calc(100vh-8rem)]">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-8 w-8 rounded-md" />
              </div>
              <Skeleton className="h-10 w-full" />
            </CardHeader>
            <div className="px-4">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="p-4 space-y-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-4 w-10" />
                      </div>
                      <Skeleton className="h-4 w-full mt-1" />
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <Card className="h-[calc(100vh-8rem)]">
            <CardHeader className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-20 mt-1" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="h-8 w-8 rounded-md" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
              </div>
            </CardHeader>

            <div className="p-4 space-y-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    {i % 2 === 0 && <Skeleton className="h-8 w-8 rounded-full mr-2" />}
                    <div className={`max-w-[70%]`}>
                      <Skeleton className={`h-20 w-full rounded-lg ${i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}`} />
                    </div>
                    {i % 2 !== 0 && <Skeleton className="h-8 w-8 rounded-full ml-2" />}
                  </div>
                ))}
            </div>

            <CardFooter className="p-4 border-t">
              <div className="flex items-center gap-2 w-full">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
