import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { programsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

async function getPrograms() {
  return await client.fetch(programsQuery);
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/mothers2.png"
            alt="Our Programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl max-w-2xl">Comprehensive support systems designed to empower and transform lives</p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program: any, index: any) => (
              <div key={program._id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={urlFor(program.image).url()}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">{program.title}</h2>
                    <p className="text-xl text-gray-600">{program.subtitle}</p>
                  </div>
                  <p className="text-gray-600 text-lg">{program.description}</p>
                  <ul className="space-y-3 text-gray-600">
                    {program.features.map((feature: any, idx: any) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 