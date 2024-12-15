import { client } from '@/sanity/lib/client';
import { impactStatsQuery, partnersQuery } from '@/sanity/lib/queries';
import HomeHero from '../components/HomeHero';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

async function getPageData() {
  const [stats, partners] = await Promise.all([
    client.fetch(impactStatsQuery), 
    client.fetch(partnersQuery)
  ]);
  return { stats, partners };
}

export default async function Home() {
  const { stats, partners } = await getPageData();

  return (
    <main className="overflow-hidden">
      <HomeHero />

      {/* Mission Statement */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Mission Text - Moved to left */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Transforming Lives,<br />One Mother at a Time
                </h2>
                <p className="text-xl leading-8 text-gray-600">
                  We believe in the power of support and education to create lasting change. Our mission is to empower teenage mothers with the tools, knowledge, and confidence they need to build successful futures for themselves and their children.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Discover Our Impact
                </a>
                <a href="/volunteer" className="inline-flex justify-center items-center px-6 py-3 rounded-md border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
                  Join Our Mission
                </a>
              </div>
            </div>

            {/* Stats Grid - Moved to bottom/right */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 4).map((stat: any) => (
                  <div key={stat._id} className="relative group overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                    <div className="relative p-6">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <p className="mt-2 font-medium text-gray-900">{stat.label}</p>
                      <p className="text-sm text-gray-500">Since 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Comprehensive Programs</h2>
            <p className="mt-4 text-lg text-gray-600">Transforming lives through targeted support and empowerment initiatives</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safe House Initiative",
                description: "A secure and nurturing environment providing 24/7 support, meals, childcare, and essential resources for young mothers and their children. Includes counseling and life skills training.",
                icon: "🏠",
                features: ["24/7 Support", "Meals & Accommodation", "Childcare Services"]
              },
              {
                title: "Education & Skills Development",
                description: "Comprehensive educational support including high school completion, vocational training, digital literacy, and career counseling. Partnered with local colleges for advanced opportunities.",
                icon: "📚",
                features: ["Academic Support", "Vocational Training", "Digital Skills"]
              },
              {
                title: "Community Integration",
                description: "Building strong support networks through mentorship programs, parent support groups, and community engagement activities. Includes advocacy and awareness programs.",
                icon: "🤝",
                features: ["Mentorship", "Support Groups", "Advocacy"]
              }
            ].map((program) => (
              <div key={program.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative p-8 bg-white border rounded-lg">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <p className="mt-4 text-gray-600">{program.description}</p>
                  <ul className="mt-4 space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">•</span>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="/programs" 
              className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Explore All Programs
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Merchandise */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support Our Cause</h2>
            <p className="mt-4 text-lg text-gray-600">Every purchase directly supports our programs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hope T-Shirt",
                price: "$25.00",
                image: "/mothers2.png",
                description: "100% organic cotton, featuring our empowerment message"
              },
              {
                name: "Mother's Journal",
                price: "$15.00",
                image: "/mothers.png",
                description: "Beautifully designed journal for recording precious moments"
              },
              {
                name: "Support Coffee Mug",
                price: "$20.00",
                image: "/mothers.png",
                description: "Ceramic mug with inspirational messages"
              }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-primary font-bold">{item.price}</span>
                    <a 
                      href="/merchandise"
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/merchandise" 
              className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Explore All Merchandise
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Trusted Partners</h2>
            <p className="mt-4 text-lg text-gray-600">Collaborating with leading organizations to create sustainable impact</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner: any) => (
              <div key={partner._id} className="flex justify-center items-center">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <Image
                    src={urlFor(partner.logo).url()}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <p className="mt-2 text-sm text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
