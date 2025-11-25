import Link from 'next/link';

interface ComponentCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
  icon: string;
  color: string;
}

export default function Home() {
  const categories: ComponentCategory[] = [
    {
      name: 'Buttons',
      slug: 'buttons',
      description: 'Various button styles and states',
      count: 8,
      icon: '🔘',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Cards',
      slug: 'cards',
      description: 'Different card layouts and designs',
      count: 6,
      icon: '🃏',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Badges',
      slug: 'badges',
      description: 'Status and label badges',
      count: 7,
      icon: '🏷️',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Inputs',
      slug: 'inputs',
      description: 'Form input variations',
      count: 5,
      icon: '✏️',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Alerts',
      slug: 'alerts',
      description: 'Notification and alert messages',
      count: 5,
      icon: '⚠️',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Avatars',
      slug: 'avatars',
      description: 'User avatar components',
      count: 6,
      icon: '👤',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const templates: ComponentCategory[] = [
    {
      name: 'Landing Pages',
      slug: 'landing-pages',
      description: 'Full landing page templates',
      count: 4,
      icon: '🏠',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Dashboards',
      slug: 'dashboards',
      description: 'Admin and analytics dashboards',
      count: 5,
      icon: '📊',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Authentication',
      slug: 'authentication',
      description: 'Login and signup pages',
      count: 3,
      icon: '🔐',
      color: 'from-violet-500 to-violet-600'
    },
    {
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Product and checkout pages',
      count: 6,
      icon: '🛒',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Pricing',
      slug: 'pricing',
      description: 'Pricing table templates',
      count: 4,
      icon: '💰',
      color: 'from-amber-500 to-amber-600'
    },
    {
      name: 'Blog',
      slug: 'blog',
      description: 'Blog and article layouts',
      count: 5,
      icon: '📝',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            CoolUI Component Library
          </h1>
          <p className="text-xl text-gray-600">
            Beautiful React & Tailwind CSS Components
          </p>
        </header>

        {/* Basic Components Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Basic Components
            </h2>
            <p className="text-gray-600">
              Essential UI components for building your application
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/components/${category.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-linear-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                    {category.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {category.count} variations
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Templates
            </h2>
            <p className="text-gray-600">
              Complete page templates ready to use
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Link
                key={template.slug}
                href={`/templates/${template.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-linear-to-br ${template.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                    {template.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {template.count} templates
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
