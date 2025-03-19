import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-green-800 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='md:col-span-1'>
            <Link href='/' className='flex items-center'>
              <span className='text-2xl font-bold text-white'>AnimalNGO</span>
              <span className='ml-1 text-green-300 font-medium'>Portal</span>
            </Link>
            <p className='mt-4 text-green-200'>
              Connecting animal lovers with NGOs making a difference in animal
              welfare and conservation around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/ngos'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  NGOs
                </Link>
              </li>
              <li>
                <Link
                  href='/ngos?featured=true'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Featured Organizations
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold mb-4'>Categories</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/ngos?cause=rescue'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Animal Rescue
                </Link>
              </li>
              <li>
                <Link
                  href='/ngos?cause=adoption'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Adoption Services
                </Link>
              </li>
              <li>
                <Link
                  href='/ngos?cause=wildlife'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Wildlife Conservation
                </Link>
              </li>
              <li>
                <Link
                  href='/ngos?cause=marine'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  Marine Life Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 mr-3 text-green-300' />
                <a
                  href='mailto:info@animalngo.org'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  hayat.singhwebdev.com
                </a>
              </div>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 mr-3 text-green-300' />
                <a
                  href='tel:+1234567890'
                  className='text-green-200 hover:text-white transition-colors'
                >
                  7409150572
                </a>
              </div>
              {/* Social Media Icons */}
              <div className='flex space-x-4 mt-6'>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors'
                >
                  <Facebook className='h-5 w-5' />
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors'
                >
                  <Twitter className='h-5 w-5' />
                </a>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors'
                >
                  <Instagram className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-6 border-t border-green-700 text-center text-green-300'>
          <p>
            &copy; {new Date().getFullYear()} Animal NGO Portal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
