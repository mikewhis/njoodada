import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { boardMembersQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

async function getBoardMembers() {
  return await client.fetch(boardMembersQuery);
}

export default async function AboutPage() {
  const boardMembers = await getBoardMembers();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/mothers.png"
            alt="About Njoo Dada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">About Njoo Dada</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To provide comprehensive support, education, and opportunities for teenage mothers,
                enabling them to build better futures for themselves and their children through
                holistic care and community engagement.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-600">
                A world where every teenage mother has access to the support, resources,
                and opportunities needed to thrive and create a positive future for
                themselves and their children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Board</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member: any) => (
              <div key={member._id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={urlFor(member.image).url()}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}