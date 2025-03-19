'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  Heart,
  PawPrint,
  Globe,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import NGOCard from '@/components/NGOCard';
import { ngos } from '@/data/ngos';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredNGOs = ngos.filter((ngo) => ngo.featured).slice(0, 3);
  const topRatedNGOs = [...ngos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/ngos?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[80vh] min-h-[600px] bg-green-800 flex items-center justify-center'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=2000&auto=format&fit=crop'
            alt='Animal NGO Hero Background'
            fill
            priority
            style={{ objectFit: 'cover' }}
            className='opacity-30'
          />
        </div>
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Connecting You with Animal Care NGOs
          </h1>
          <p className='text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto'>
            Discover organizations dedicated to animal welfare, conservation,
            and protection around the world.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className='max-w-md mx-auto flex bg-white rounded-full overflow-hidden shadow-lg'
          >
            <div className='relative flex-grow'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5' />
              <Input
                type='text'
                placeholder='Search for NGOs by name, location, or cause...'
                className='border-0 h-14 pl-12 pr-4 rounded-l-full text-base focus-visible:ring-0 focus-visible:ring-offset-0'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              type='submit'
              className='h-14 px-6 rounded-r-full bg-green-600 hover:bg-green-700 text-white text-base'
            >
              Search
            </Button>
          </form>

          <div className='mt-8 flex justify-center space-x-4'>
            <Button
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-green-800'
              asChild
            >
              <Link href='/ngos'>
                Browse All NGOs
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              className='bg-green-600 hover:bg-green-700 text-white'
              asChild
            >
              <Link href='/contact'>
                <Heart className='mr-2 h-4 w-4' />
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Making a Difference for Animals Worldwide
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <PawPrint className='h-8 w-8 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold mb-3'>Animal Welfare</h3>
                <p className='text-slate-600'>
                  Connect with NGOs focused on rescue, rehabilitation, adoption,
                  and care for domestic and wild animals.
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Globe className='h-8 w-8 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold mb-3'>Global Reach</h3>
                <p className='text-slate-600'>
                  Discover organizations working across the world, from local
                  shelters to international conservation programs.
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold mb-3'>Verified Impact</h3>
                <p className='text-slate-600'>
                  Learn about each organization&apos;s impact, projects, and
                  ways you can contribute to their mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured NGOs Section */}
      <section className='py-16 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-10'>
            <div>
              <h2 className='text-3xl font-bold mb-2'>
                Featured Organizations
              </h2>
              <p className='text-slate-600 max-w-2xl'>
                These are some of the highest-rated animal welfare NGOs making a
                significant impact.
              </p>
            </div>
            <Button variant='outline' className='mt-4 md:mt-0' asChild>
              <Link href='/ngos?featured=true'>
                View All Featured
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredNGOs.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated NGOs Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-10'>
            <div>
              <h2 className='text-3xl font-bold mb-2'>Top Rated NGOs</h2>
              <p className='text-slate-600 max-w-2xl'>
                Organizations with exceptional ratings from volunteers and
                supporters.
              </p>
            </div>
            <Button variant='outline' className='mt-4 md:mt-0' asChild>
              <Link href='/ngos?sort=rating'>
                View All Top Rated
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {topRatedNGOs.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-green-800 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Make a Difference?
          </h2>
          <p className='text-xl text-green-100 mb-8 max-w-2xl mx-auto'>
            Join the community of animal lovers and supporters making a positive
            impact on animal welfare worldwide.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button
              className='bg-white text-green-800 hover:bg-green-100'
              size='lg'
              asChild
            >
              <Link href='/ngos'>
                Find an NGO
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-green-800'
              size='lg'
              asChild
            >
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
