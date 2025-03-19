'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className='min-h-screen bg-slate-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12 relative'>
            <div className='absolute inset-0 -z-10 opacity-5 overflow-hidden rounded-xl'>
              <Image
                src='https://images.unsplash.com/photo-1557660559-14eb8c3d25ad?q=80&w=1000&auto=format&fit=crop'
                alt='Animal background'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Contact Us</h1>
            <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
              Get in touch with us to learn more about our Animal NGO Portal,
              share your feedback, or inquire about getting involved.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <Card className='transition-shadow hover:shadow-md'>
              <CardContent className='p-6 text-center flex flex-col items-center'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                  <Mail className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-lg mb-2'>Email</h3>
                <p className='text-slate-500 mb-3'>
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href='mailto:info@animalngo.org'
                  className='text-green-600 hover:text-green-700 font-medium'
                >
                  info@animalngo.org
                </a>
              </CardContent>
            </Card>

            <Card className='transition-shadow hover:shadow-md'>
              <CardContent className='p-6 text-center flex flex-col items-center'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                  <Phone className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-lg mb-2'>Phone</h3>
                <p className='text-slate-500 mb-3'>
                  Available Mon-Fri, 9am-5pm EST
                </p>
                <a
                  href='tel:+1234567890'
                  className='text-green-600 hover:text-green-700 font-medium'
                >
                  +1 (234) 567-890
                </a>
              </CardContent>
            </Card>

            <Card className='transition-shadow hover:shadow-md'>
              <CardContent className='p-6 text-center flex flex-col items-center'>
                <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                  <MapPin className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='font-semibold text-lg mb-2'>Headquarters</h3>
                <p className='text-slate-500 mb-3'>Visit our main office</p>
                <address className='text-green-600 not-italic'>
                  123 Wildlife Way
                  <br />
                  San Francisco, CA 94107
                </address>
              </CardContent>
            </Card>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 md:p-10'>
            <h2 className='text-2xl font-semibold mb-6'>Send Us a Message</h2>

            {isSubmitted ? (
              <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Send className='h-6 w-6 text-green-600' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Message Sent!</h3>
                <p className='text-slate-600 mb-6'>
                  Thank you for reaching out to us. We will get back to you as
                  soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className='bg-green-600 hover:bg-green-700'
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Your Name</Label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='John Doe'
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='john@example.com'
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    name='subject'
                    placeholder='How can we help you?'
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us more about your inquiry...'
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type='submit'
                  className='bg-green-600 hover:bg-green-700 w-full md:w-auto'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          <div className='bg-green-50 border border-green-200 rounded-lg p-6 mt-12 text-center relative overflow-hidden'>
            <div className='absolute inset-0 -z-10 opacity-5'>
              <Image
                src='https://images.unsplash.com/photo-1506755594592-349d12a9c159?q=80&w=1000&auto=format&fit=crop'
                alt='Wildlife background'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className='text-2xl font-semibold mb-4'>
              Want to Make a Difference?
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto mb-6'>
              Interested in volunteering, donating, or partnering with one of
              our listed NGOs? Find the perfect organization for your passion.
            </p>
            <Button className='bg-green-600 hover:bg-green-700' asChild>
              <Link href='/ngos'>Browse NGOs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
