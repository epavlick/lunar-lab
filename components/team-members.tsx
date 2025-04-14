import type { TeamMember } from "@/data/team"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { GithubIcon, TwitterIcon, ExternalLinkIcon, MailIcon } from "lucide-react"

interface TeamMembersProps {
  members: TeamMember[]
}

export default function TeamMembers({ members }: TeamMembersProps) {
  // Group members by role
  const faculty = members.filter((member) => member.role.includes("Professor") || member.role.includes("Principal"))
  const postdocs = members.filter((member) => member.role.includes("Postdoc"))
  const phdStudents = members.filter((member) => member.role.includes("PhD"))
  const mastersStudents = members.filter((member) => member.role.includes("Master"))
  const undergrads = members.filter((member) => member.role.includes("Undergraduate"))

  const renderMemberCard = (member: TeamMember) => (
    <Card key={member.id} className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm">{member.bio}</p>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-3">
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700"
            >
              <ExternalLinkIcon size={18} />
              <span className="sr-only">Website</span>
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700"
            >
              <GithubIcon size={18} />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700"
            >
              <TwitterIcon size={18} />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-purple-700">
              <MailIcon size={18} />
              <span className="sr-only">Email</span>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  )

  const renderSection = (title: string, membersList: TeamMember[]) =>
    membersList.length > 0 ? (
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-purple-900">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {membersList.map(renderMemberCard)}
        </div>
      </div>
    ) : null

  return (
    <div>
      {renderSection("Faculty", faculty)}
      {renderSection("Postdoctoral Researchers", postdocs)}
      {renderSection("PhD Students", phdStudents)}
      {renderSection("Master's Students", mastersStudents)}
      {renderSection("Undergraduate Researchers", undergrads)}
    </div>
  )
}
