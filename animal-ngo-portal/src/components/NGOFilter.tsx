'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { FilterX, Search, SlidersHorizontal } from 'lucide-react';
import { causes } from '@/data/ngos';

interface NGOFilterProps {
  totalNGOs: number;
}

export default function NGOFilter({ totalNGOs }: NGOFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter params from URL
  const searchQuery = searchParams.get('search') || '';
  const selectedCauses = searchParams.get('causes')?.split(',') || [];
  const selectedYears = searchParams.get('years') || '0,50';
  const [minYears, maxYears] = selectedYears.split(',').map(Number);
  const sortBy = searchParams.get('sort') || 'featured';

  // Local state
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [localSelectedCauses, setLocalSelectedCauses] =
    useState<string[]>(selectedCauses);
  const [localYearsRange, setLocalYearsRange] = useState<number[]>([
    minYears,
    maxYears,
  ]);
  const [localSortBy, setLocalSortBy] = useState(sortBy);

  const toggleCause = (cause: string) => {
    setLocalSelectedCauses((prev) => {
      if (prev.includes(cause)) {
        return prev.filter((c) => c !== cause);
      } else {
        return [...prev, cause];
      }
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (localSearchQuery) {
      params.set('search', localSearchQuery);
    }

    if (localSelectedCauses.length > 0) {
      params.set('causes', localSelectedCauses.join(','));
    }

    if (localYearsRange[0] !== 0 || localYearsRange[1] !== 50) {
      params.set('years', `${localYearsRange[0]},${localYearsRange[1]}`);
    }

    if (localSortBy !== 'featured') {
      params.set('sort', localSortBy);
    }

    router.push(`/ngos?${params.toString()}`);
  };

  const resetFilters = () => {
    setLocalSearchQuery('');
    setLocalSelectedCauses([]);
    setLocalYearsRange([0, 50]);
    setLocalSortBy('featured');
    router.push('/ngos');
  };

  useEffect(() => {
    // Update local state when URL params change
    setLocalSearchQuery(searchQuery);
    setLocalSelectedCauses(selectedCauses);
    setLocalYearsRange([minYears, maxYears]);
    setLocalSortBy(sortBy);
  }, [searchParams]);

  return (
    <div className='bg-white rounded-lg shadow-sm border p-4 mb-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold'>
          {totalNGOs} NGO{totalNGOs !== 1 && 's'} Found
        </h2>
        <div className='flex items-center space-x-2 mt-2 sm:mt-0'>
          <Button
            variant='outline'
            size='sm'
            className='text-slate-600'
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className='h-4 w-4 mr-2' />
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
          {(localSearchQuery ||
            localSelectedCauses.length > 0 ||
            localYearsRange[0] !== 0 ||
            localYearsRange[1] !== 50 ||
            localSortBy !== 'featured') && (
            <Button
              variant='outline'
              size='sm'
              className='text-slate-600'
              onClick={resetFilters}
            >
              <FilterX className='h-4 w-4 mr-2' />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className='flex mb-4'>
        <div className='relative flex-grow'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            type='text'
            placeholder='Search for NGOs...'
            className='pl-10 pr-4'
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </div>
        <Button type='submit' className='ml-2 bg-green-600 hover:bg-green-700'>
          Search
        </Button>
      </form>

      {isFilterOpen && (
        <div className='space-y-6 mt-4 pt-4 border-t'>
          {/* Causes Filter */}
          <div>
            <h3 className='font-medium mb-3'>Filter by Cause:</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {causes.map((cause) => (
                <div key={cause} className='flex items-center space-x-2'>
                  <Checkbox
                    id={`cause-${cause}`}
                    checked={localSelectedCauses.includes(cause)}
                    onCheckedChange={() => toggleCause(cause)}
                  />
                  <Label
                    htmlFor={`cause-${cause}`}
                    className='text-sm cursor-pointer'
                  >
                    {cause.charAt(0).toUpperCase() + cause.slice(1)}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Years Active Filter */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='font-medium'>Years Active:</h3>
              <span className='text-sm text-slate-500'>
                {localYearsRange[0]} - {localYearsRange[1]} years
              </span>
            </div>
            <Slider
              defaultValue={localYearsRange}
              min={0}
              max={50}
              step={1}
              onValueChange={setLocalYearsRange}
              className='mb-6'
            />
          </div>

          {/* Sort Options */}
          <div>
            <h3 className='font-medium mb-3'>Sort by:</h3>
            <div className='flex flex-wrap gap-2'>
              <Button
                variant={localSortBy === 'featured' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setLocalSortBy('featured')}
                className={
                  localSortBy === 'featured'
                    ? 'bg-green-600 hover:bg-green-700'
                    : ''
                }
              >
                Featured
              </Button>
              <Button
                variant={localSortBy === 'rating' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setLocalSortBy('rating')}
                className={
                  localSortBy === 'rating'
                    ? 'bg-green-600 hover:bg-green-700'
                    : ''
                }
              >
                Top Rated
              </Button>
              <Button
                variant={localSortBy === 'newest' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setLocalSortBy('newest')}
                className={
                  localSortBy === 'newest'
                    ? 'bg-green-600 hover:bg-green-700'
                    : ''
                }
              >
                Newest
              </Button>
              <Button
                variant={localSortBy === 'oldest' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setLocalSortBy('oldest')}
                className={
                  localSortBy === 'oldest'
                    ? 'bg-green-600 hover:bg-green-700'
                    : ''
                }
              >
                Oldest
              </Button>
            </div>
          </div>

          {/* Apply Filters Button */}
          <Button
            className='w-full bg-green-600 hover:bg-green-700'
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
}
