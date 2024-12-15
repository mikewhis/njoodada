import Image from 'next/image';

export default function DonatePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/mothers.png"
            alt="Donate to Njoo Dada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Support Our Cause</h1>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* One-Time Donation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">One-Time Donation</h2>
              <div className="space-y-4">
                <button className="w-full btn-primary">Donate $10</button>
                <button className="w-full btn-primary">Donate $25</button>
                <button className="w-full btn-primary">Donate $50</button>
                <button className="w-full btn-primary">Donate $100</button>
                <button className="w-full btn-outline">Custom Amount</button>
              </div>
            </div>

            {/* Monthly Donation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Monthly Donation</h2>
              <div className="space-y-4">
                <button className="w-full btn-primary">$10 Monthly</button>
                <button className="w-full btn-primary">$25 Monthly</button>
                <button className="w-full btn-primary">$50 Monthly</button>
                <button className="w-full btn-primary">$100 Monthly</button>
                <button className="w-full btn-outline">Custom Monthly Amount</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Housing</h3>
              <p className="text-gray-600">Provides shelter and basic needs for one teenage mother</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Supports school fees and educational materials</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">Provides medical care for mother and child</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 