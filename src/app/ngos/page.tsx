'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import NGOCard from '@/components/NGOCard';
import NGOFilter from '@/components/NGOFilter';
import { ngos as allNGOs } from '@/data/ngos';
import { NGO } from '@/types';

// Loading component for suspense fallback
function NGOsLoading() {
  return (
    <div className='py-10 bg-slate-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-6'>Animal NGOs Directory</h1>
        <div className='bg-white rounded-lg shadow-sm p-6 mb-6'>
          <p>Loading NGOs...</p>
        </div>
      </div>
    </div>
  );
}

// Main component wrapped in Suspense
function NGOsContent() {
  const searchParams = useSearchParams();
  const [filteredNGOs, setFilteredNGOs] = useState<NGO[]>([]);

  useEffect(() => {
    // Get filter params from URL
    const searchQuery = searchParams.get('search') || '';
    const selectedCauses = searchParams.get('causes')?.split(',') || [];
    const selectedYears = searchParams.get('years') || '0,50';
    const [minYears, maxYears] = selectedYears.split(',').map(Number);
    const sortBy = searchParams.get('sort') || 'featured';
    const featured = searchParams.get('featured') === 'true';

    // Filter NGOs based on search parameters
    let filtered = [...allNGOs];

    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (ngo) =>
          ngo.name.toLowerCase().includes(query) ||
          ngo.description.toLowerCase().includes(query) ||
          ngo.location.city.toLowerCase().includes(query) ||
          ngo.location.country.toLowerCase().includes(query) ||
          ngo.causes.some((cause) => cause.toLowerCase().includes(query))
      );
    }

    // Causes filter
    if (selectedCauses.length > 0) {
      filtered = filtered.filter((ngo) =>
        ngo.causes.some((cause) => selectedCauses.includes(cause))
      );
    }

    // Years active filter
    filtered = filtered.filter(
      (ngo) => ngo.yearsActive >= minYears && ngo.yearsActive <= maxYears
    );

    // Featured filter
    if (featured) {
      filtered = filtered.filter((ngo) => ngo.featured);
    }

    // Sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'oldest':
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured === b.featured) {
            return b.rating - a.rating;
          }
          return a.featured ? -1 : 1;
        });
        break;
    }

    setFilteredNGOs(filtered);
  }, [searchParams]);

  return (
    <div className='py-10 bg-slate-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-6'>Animal NGOs Directory</h1>

        <NGOFilter totalNGOs={filteredNGOs.length} />

        {filteredNGOs.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredNGOs.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        ) : (
          <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
            <h3 className='text-xl font-semibold mb-3'>No NGOs Found</h3>
            <p className='text-slate-600 mb-4'>
              We couldn&apos;t find any NGOs matching your search criteria. Try
              adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Export the page component with Suspense
export default function NGOsPage() {
  return (
    <Suspense fallback={<NGOsLoading />}>
      <NGOsContent />
    </Suspense>
  );
}
