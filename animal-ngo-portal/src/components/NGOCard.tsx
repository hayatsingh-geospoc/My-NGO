import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Award, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { NGO } from '@/types';

interface NGOCardProps {
  ngo: NGO;
}

export default function NGOCard({ ngo }: NGOCardProps) {
  return (
    <Card className='overflow-hidden transition-all duration-300 hover:shadow-lg'>
      <div className='relative h-48 w-full'>
        {ngo.logo ? (
          <Image
            src={ngo.logo}
            alt={`${ngo.name} logo`}
            fill
            style={{ objectFit: 'cover' }}
            className='bg-slate-100'
          />
        ) : (
          <div className='bg-slate-100 h-full w-full flex items-center justify-center'>
            <span className='text-lg font-medium text-slate-400'>
              {ngo.name}
            </span>
          </div>
        )}
        {ngo.featured && (
          <Badge className='absolute top-3 right-3 bg-amber-500 hover:bg-amber-600'>
            Featured
          </Badge>
        )}
      </div>
      <CardContent className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{ngo.name}</h3>
        <p className='text-slate-600 text-sm mb-4 line-clamp-2'>
          {ngo.description}
        </p>

        <div className='space-y-2'>
          <div className='flex items-center text-sm text-slate-500'>
            <MapPin className='h-4 w-4 mr-2 text-green-500' />
            <span>
              {ngo.location.city}, {ngo.location.country}
            </span>
          </div>
          <div className='flex items-center text-sm text-slate-500'>
            <Calendar className='h-4 w-4 mr-2 text-green-500' />
            <span>{ngo.yearsActive} years active</span>
          </div>
          <div className='flex items-center text-sm text-slate-500'>
            <Award className='h-4 w-4 mr-2 text-green-500' />
            <span>{ngo.rating} / 5 rating</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-1 mt-4'>
          {ngo.causes.slice(0, 3).map((cause, index) => (
            <Badge key={index} variant='outline' className='bg-green-50'>
              {cause}
            </Badge>
          ))}
          {ngo.causes.length > 3 && (
            <Badge variant='outline' className='bg-green-50'>
              +{ngo.causes.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className='bg-slate-50 px-6 py-4'>
        <Link href={`/ngos/${ngo.id}`} className='w-full'>
          <Button className='w-full bg-green-600 hover:bg-green-700'>
            View Details
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
