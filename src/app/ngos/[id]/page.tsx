'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Map,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Users,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ngos } from '@/data/ngos';

interface NGODetailsPageProps {
  params: {
    id: string;
  };
}

export default function NGODetailsPage({ params }: NGODetailsPageProps) {
  const ngo = ngos.find((n) => n.id === params.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // If NGO not found, return 404
  if (!ngo) {
    notFound();
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === ngo.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? ngo.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative bg-green-800 text-white py-20'>
        <div className='absolute inset-0 overflow-hidden'>
          {ngo.gallery.length > 0 && (
            <Image
              src={ngo.gallery[0].imageUrl}
              alt={ngo.name}
              fill
              style={{ objectFit: 'cover' }}
              className='opacity-30'
            />
          )}
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
            <div className='w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden'>
              <Image
                src={ngo.logo}
                alt={`${ngo.name} logo`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-bold mb-4'>
                {ngo.name}
              </h1>
              <p className='text-lg md:text-xl text-green-100 mb-6 max-w-3xl'>
                {ngo.mission}
              </p>
              <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                {ngo.causes.map((cause, index) => (
                  <Badge
                    key={index}
                    className='bg-green-700 hover:bg-green-600 text-white'
                  >
                    {cause}
                  </Badge>
                ))}
              </div>
              <div className='flex flex-wrap gap-4 mt-6 justify-center md:justify-start'>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 mr-2 text-green-300' />
                  <span>{ngo.yearsActive} years active</span>
                </div>
                <div className='flex items-center'>
                  <Map className='h-5 w-5 mr-2 text-green-300' />
                  <span>
                    {ngo.location.city}, {ngo.location.country}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Star className='h-5 w-5 mr-2 text-green-300' />
                  <span>{ngo.rating} rating</span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 mr-2 text-green-300' />
                  <span>{ngo.size} organization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content Column */}
            <div className='lg:col-span-2'>
              <Tabs defaultValue='about' className='w-full'>
                <TabsList className='w-full justify-start mb-8'>
                  <TabsTrigger value='about'>About</TabsTrigger>
                  <TabsTrigger value='services'>Services</TabsTrigger>
                  <TabsTrigger value='gallery'>Gallery</TabsTrigger>
                  <TabsTrigger value='impact'>Impact Stories</TabsTrigger>
                </TabsList>

                {/* About Tab */}
                <TabsContent value='about' className='space-y-8'>
                  <div className='bg-white p-6 rounded-lg shadow-sm'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      About {ngo.name}
                    </h2>
                    <p className='text-slate-600 mb-6'>{ngo.description}</p>
                    <div className='my-8'>
                      <iframe
                        title='NGO Location'
                        width='100%'
                        height='300'
                        frameBorder='0'
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                          ngo.location.address
                        )}&center=${ngo.location.coordinates.lat},${
                          ngo.location.coordinates.lng
                        }`}
                        allowFullScreen
                        className='rounded-lg'
                      ></iframe>
                    </div>
                    <div className='mt-6'>
                      <h3 className='text-xl font-medium mb-3'>Location</h3>
                      <p className='text-slate-600'>{ngo.location.address}</p>
                      <p className='text-slate-600'>
                        {ngo.location.city}, {ngo.location.country}
                      </p>
                    </div>
                  </div>

                  {/* Videos Section */}
                  {ngo.videos.length > 0 && (
                    <div className='bg-white p-6 rounded-lg shadow-sm'>
                      <h2 className='text-2xl font-semibold mb-4'>Videos</h2>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {ngo.videos.map((video) => (
                          <div key={video.id} className='space-y-3'>
                            <div className='relative pt-[56.25%] bg-slate-100 rounded-lg overflow-hidden'>
                              <iframe
                                src={video.url}
                                title={video.title}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='absolute top-0 left-0 w-full h-full'
                              ></iframe>
                            </div>
                            <h3 className='font-medium'>{video.title}</h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Services Tab */}
                <TabsContent value='services' className='space-y-8'>
                  <div className='bg-white p-6 rounded-lg shadow-sm'>
                    <h2 className='text-2xl font-semibold mb-6'>
                      Our Services
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {ngo.services.map((service) => (
                        <Card key={service.id} className='overflow-hidden'>
                          <CardContent className='p-6'>
                            <h3 className='text-xl font-semibold mb-3'>
                              {service.name}
                            </h3>
                            <p className='text-slate-600'>
                              {service.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Volunteer Opportunities Section */}
                  {ngo.volunteerOpportunities.length > 0 && (
                    <div className='bg-white p-6 rounded-lg shadow-sm'>
                      <h2 className='text-2xl font-semibold mb-6'>
                        Volunteer Opportunities
                      </h2>
                      <div className='space-y-6'>
                        {ngo.volunteerOpportunities.map((opportunity) => (
                          <div
                            key={opportunity.id}
                            className='border-b border-slate-200 pb-6 last:border-0 last:pb-0'
                          >
                            <h3 className='text-xl font-semibold mb-2'>
                              {opportunity.title}
                            </h3>
                            <p className='text-slate-600 mb-4'>
                              {opportunity.description}
                            </p>
                            <div>
                              <h4 className='font-medium mb-2'>
                                Requirements:
                              </h4>
                              <ul className='list-disc list-inside text-slate-600 space-y-1'>
                                {opportunity.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <Button className='mt-4 bg-green-600 hover:bg-green-700'>
                              Apply Now
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value='gallery' className='space-y-8'>
                  <div className='bg-white p-6 rounded-lg shadow-sm'>
                    <h2 className='text-2xl font-semibold mb-6'>
                      Photo Gallery
                    </h2>
                    {ngo.gallery.length > 0 ? (
                      <div className='space-y-6'>
                        <div className='relative h-[400px] bg-slate-100 rounded-lg overflow-hidden'>
                          <Image
                            src={ngo.gallery[activeImageIndex].imageUrl}
                            alt={ngo.gallery[activeImageIndex].title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          <div className='absolute inset-0 flex items-center justify-between p-4'>
                            <Button
                              variant='outline'
                              size='icon'
                              className='rounded-full bg-white/70 hover:bg-white'
                              onClick={handlePrevImage}
                            >
                              <ChevronLeft className='h-5 w-5' />
                            </Button>
                            <Button
                              variant='outline'
                              size='icon'
                              className='rounded-full bg-white/70 hover:bg-white'
                              onClick={handleNextImage}
                            >
                              <ChevronRight className='h-5 w-5' />
                            </Button>
                          </div>
                          <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4'>
                            <h3 className='font-medium'>
                              {ngo.gallery[activeImageIndex].title}
                            </h3>
                            {ngo.gallery[activeImageIndex].description && (
                              <p className='text-sm text-slate-200'>
                                {ngo.gallery[activeImageIndex].description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2'>
                          {ngo.gallery.map((image, index) => (
                            <div
                              key={image.id}
                              className={`relative cursor-pointer h-20 rounded-md overflow-hidden ${
                                index === activeImageIndex
                                  ? 'ring-2 ring-green-600'
                                  : ''
                              }`}
                              onClick={() => setActiveImageIndex(index)}
                            >
                              <Image
                                src={image.imageUrl}
                                alt={image.title}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className='text-slate-500'>
                        No gallery images available
                      </p>
                    )}
                  </div>
                </TabsContent>

                {/* Impact Stories Tab */}
                <TabsContent value='impact' className='space-y-8'>
                  <div className='bg-white p-6 rounded-lg shadow-sm'>
                    <h2 className='text-2xl font-semibold mb-6'>
                      Impact Stories
                    </h2>
                    {ngo.impactStories.length > 0 ? (
                      <div className='space-y-8'>
                        {ngo.impactStories.map((story) => (
                          <div
                            key={story.id}
                            className='flex flex-col md:flex-row gap-6 border-b border-slate-200 pb-8 last:border-0 last:pb-0'
                          >
                            {story.imageUrl && (
                              <div className='relative h-60 md:w-1/3 rounded-lg overflow-hidden'>
                                <Image
                                  src={story.imageUrl}
                                  alt={story.title}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            )}
                            <div
                              className={story.imageUrl ? 'md:w-2/3' : 'w-full'}
                            >
                              <div className='flex items-center gap-2 mb-3'>
                                <Calendar className='h-4 w-4 text-green-600' />
                                <span className='text-sm text-slate-500'>
                                  {new Date(story.date).toLocaleDateString(
                                    'en-US',
                                    {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                    }
                                  )}
                                </span>
                              </div>
                              <h3 className='text-xl font-semibold mb-3'>
                                {story.title}
                              </h3>
                              <p className='text-slate-600 mb-4'>
                                {story.story}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className='text-slate-500'>
                        No impact stories available
                      </p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className='space-y-6'>
              {/* Contact Information */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h2 className='text-xl font-semibold mb-4'>
                  Contact Information
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <Phone className='h-5 w-5 mr-3 text-green-600 mt-0.5' />
                    <div>
                      <p className='text-sm text-slate-500'>Phone</p>
                      <a
                        href={`tel:${ngo.contactInfo.phone}`}
                        className='text-slate-800 hover:text-green-600 transition-colors'
                      >
                        {ngo.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <Mail className='h-5 w-5 mr-3 text-green-600 mt-0.5' />
                    <div>
                      <p className='text-sm text-slate-500'>Email</p>
                      <a
                        href={`mailto:${ngo.contactInfo.email}`}
                        className='text-slate-800 hover:text-green-600 transition-colors'
                      >
                        {ngo.contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <Globe className='h-5 w-5 mr-3 text-green-600 mt-0.5' />
                    <div>
                      <p className='text-sm text-slate-500'>Website</p>
                      <a
                        href={ngo.contactInfo.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-slate-800 hover:text-green-600 transition-colors flex items-center'
                      >
                        Visit Website
                        <ExternalLink className='h-3 w-3 ml-1' />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className='flex gap-3 mt-6'>
                  {ngo.contactInfo.social.facebook && (
                    <a
                      href={ngo.contactInfo.social.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors'
                      aria-label='Facebook'
                    >
                      <Facebook className='h-5 w-5 text-slate-700' />
                    </a>
                  )}
                  {ngo.contactInfo.social.twitter && (
                    <a
                      href={ngo.contactInfo.social.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors'
                      aria-label='Twitter'
                    >
                      <Twitter className='h-5 w-5 text-slate-700' />
                    </a>
                  )}
                  {ngo.contactInfo.social.instagram && (
                    <a
                      href={ngo.contactInfo.social.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors'
                      aria-label='Instagram'
                    >
                      <Instagram className='h-5 w-5 text-slate-700' />
                    </a>
                  )}
                </div>
              </div>

              {/* Donation Links */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h2 className='text-xl font-semibold mb-4'>
                  Support {ngo.name}
                </h2>
                <p className='text-slate-600 mb-4'>
                  Your contribution makes a significant impact in our mission.
                </p>
                <div className='space-y-3'>
                  {ngo.donationLinks.map((link) => (
                    <div key={link.id}>
                      <Button
                        className='w-full bg-green-600 hover:bg-green-700'
                        asChild
                      >
                        <a
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Heart className='h-4 w-4 mr-2' />
                          {link.platform}
                        </a>
                      </Button>
                      {link.description && (
                        <p className='text-xs text-slate-500 mt-1'>
                          {link.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
