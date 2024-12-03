import React from 'react';

const ProfileGuide = () => {
  const sections = [
    {
      title: 'Specialized Expertise',
      content: [
        'Customer Platform Strategy Development & Implementation',
        'Digital Transformation Leadership & Team Alignment',
        'HubSpot Knowledge Transfer & Educational Program Design',
        'RevOps Framework Creation & Process Optimization',
        'Community Building & Value Multiplication'
      ],
      callout: 'Lead with clear specialties that help prospects quickly determine fit for their specific needs. This section should appear first to enable efficient decision-making.'
    },
    {
      title: 'Client Impact',
      content: [{
        quote: 'Chris helped us transform our post-sales process in HubSpot, reducing order management complexity while improving customer experience.',
        author: '- Cody Lopez, RevOps Director at Secured Tech Solutions'
      }],
      callout: 'Include brief, specific testimonials that validate expertise and build trust. Focus on measurable outcomes and relevant role titles.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="bg-orange-500 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold text-center">Professional Profile Guide</h1>
      </header>
      
      <div className="space-y-8 mt-8">
        {sections.map((section, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
              
              <div className="space-y-4">
                {Array.isArray(section.content) ? (
                  section.content.map((item, i) => (
                    typeof item === 'string' ? (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 mr-3"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ) : item.quote ? (
                      <blockquote key={i} className="bg-white p-4 rounded-lg">
                        <p className="italic text-gray-700">{item.quote}</p>
                        <p className="mt-2 text-gray-600">{item.author}</p>
                      </blockquote>
                    ) : null
                  ))
                ) : (
                  <p className="text-gray-700">{section.content}</p>
                )}
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 w-4 h-px bg-orange-500"></div>
                <div className="bg-orange-500 text-white p-4 rounded-lg max-w-xs">
                  <p className="text-sm">{section.callout}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-orange-500 text-white p-6 mt-8 rounded-b-lg text-center">
        <p className="text-sm">Profile Guide Example</p>
      </footer>
    </div>
  );
};

export default ProfileGuide;