"use client"

import { useState } from "react"
import type { Publication } from "@/data/publications"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PublicationsListProps {
  publications: Publication[]
}

export default function PublicationsList({ publications }: PublicationsListProps) {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({})
  const [selectedTag, setSelectedTag] = useState<string>("all")

  // Extract all unique tags from publications
  const allTags = Array.from(new Set(publications.flatMap((pub) => pub.tags))).sort()

  // Add "All" as the first option
  const tabOptions = ["all", ...allTags]

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filter publications based on selected tag
  const filteredPublications =
    selectedTag === "all" ? publications : publications.filter((pub) => pub.tags.includes(selectedTag))

  return (
    <div>
      <Tabs defaultValue="all" onValueChange={(value) => setSelectedTag(value)} className="mb-8">
        <TabsList className="flex flex-wrap justify-center">
          {tabOptions.map((tag) => (
            <TabsTrigger key={tag} value={tag} className="px-4 py-2 capitalize">
              {tag === "all" ? "All" : tag}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-6">
        {filteredPublications.map((publication) => (
          <Card key={publication.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-purple-900">{publication.title}</CardTitle>
              <CardDescription>
                {publication.authors.join(", ")} | {publication.conference} {publication.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {expandedAbstracts[publication.id] && <p className="mb-4">{publication.abstract}</p>}
              <div className="flex flex-wrap gap-2 mt-2">
                {publication.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tag === selectedTag ? "secondary" : "outline"}
                    className={tag === selectedTag ? "bg-purple-100" : "bg-purple-50"}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={() => toggleAbstract(publication.id)}>
                {expandedAbstracts[publication.id] ? "Hide Abstract" : "Show Abstract"}
              </Button>
              <Button variant="outline" onClick={() => window.open(publication.link, "_blank")}>
                View Paper
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
