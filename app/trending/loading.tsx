import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingLoading() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-10 w-[180px]" />
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-4">
          <TabsTrigger value="projects" disabled>
            Projects
          </TabsTrigger>
          <TabsTrigger value="topics" disabled>
            Topics
          </TabsTrigger>
          <TabsTrigger value="collaborators" disabled>
            Collaborators
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
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
                      <Skeleton className="h-6 w-16" />
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
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <div className="flex justify-center">
            <Skeleton className="h-10 w-32" />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
