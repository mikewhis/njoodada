import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { successStoriesQuery, impactStatsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { StatType } from '../types';
// Define the SuccessStory interface
interface SuccessStory {
  _id: string;
  name: string;
  quote: string;
  achievement: string;
  image: ImageType;
}

interface ImageType {
  asset: {
    _id: string;
    url: string;
  };
}

async function getPageData(): Promise<{ stories: SuccessStory[]; stats: StatType[] }> {
  const [stories, stats] = await Promise.all([
    client.fetch(successStoriesQuery),
    client.fetch(impactStatsQuery)
  ]);
  return { stories, stats };
}

export default async function SuccessStoriesPage() {
  const { stories, stats } = await getPageData();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/mothers.png"
            alt="Success Stories"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Success Stories</h1>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {stories.map((story: SuccessStory) => (
              <div key={story._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src={urlFor(story.image).url()}
                    alt={`${story.name}'s Story`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">{story.name}&apos;s Story</h2>
                  <blockquote className="text-gray-600 italic mb-4">
                    &quot;{story.quote}&quot;
                  </blockquote>
                  <p className="text-sm text-gray-500">Achievement: {story.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat: StatType) => (
              <div key={stat._id}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 