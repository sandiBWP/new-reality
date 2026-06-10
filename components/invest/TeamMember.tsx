import type { TeamMember as TeamMemberType } from "@/data/team";

export function TeamMember({ member }: { member: TeamMemberType }) {
  return (
    <div className="border border-line bg-white p-8">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink-mute">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-xl text-ink">{member.name}</h3>
          <p className="text-sm text-ink-mute">{member.title}</p>
        </div>
      </div>
      <p className="text-sm font-light leading-relaxed text-ink-soft">
        {member.bio}
      </p>
    </div>
  );
}

export function TeamGrid({ members }: { members: TeamMemberType[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {members.map((member) => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
  );
}
