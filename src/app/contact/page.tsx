import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { client } from '@/sanity/lib/client';
import { contactInfoQuery } from '@/sanity/lib/queries';

async function getContactInfo() {
  return await client.fetch(contactInfoQuery);
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/mothers.png"
            alt="Contact Njoo Dada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    {contactInfo.phones.map((phone: any, index: any) => (
                      <p key={index} className="mt-1 text-gray-600">{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    {contactInfo.emails.map((email: any, index: any) => (
                      <p key={index} className="mt-1 text-gray-600">{email}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-8">
                  <h3 className="font-semibold text-gray-900 mb-6">Follow Us</h3>
                  <div className="flex space-x-6">
                    {Object.entries(contactInfo.socialMedia).map(([platform, url]) => {
                      if (!url) return null;
                      return (
                        <a 
                          key={platform}
                          href={url.toString()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors"
                        >
                          {/* Add appropriate social media icons */}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 