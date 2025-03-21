'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LeadFormProps {
  buttonText?: string;
  buttonVariant?:
    | 'default'
    | 'outline'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | 'link';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function LeadForm({
  buttonText = 'Register Your NGO',
  buttonVariant = 'default',
  buttonSize = 'default',
  className = '',
  children,
  isOpen = false,
  setIsOpen,
}: LeadFormProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [formData, setFormData] = useState({
    ngoName: '',
    location: '',
    establishedYear: '',
    services: '',
    mission: '',
    email: '',
    phone: '',
    website: '',
    userLocation: '',
  });

  const handleOpenChange = (newOpenState: boolean) => {
    setOpen(newOpenState);
    if (setIsOpen) {
      setIsOpen(newOpenState);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);

    // Show success toast
    toast({
      title: 'NGO Registration Submitted',
      description:
        'Thank you for registering your NGO. Our team will review your information and contact you soon.',
      duration: 5000,
      variant: 'success',
    });

    // Reset form
    setFormData({
      ngoName: '',
      location: '',
      establishedYear: '',
      services: '',
      mission: '',
      email: '',
      phone: '',
      website: '',
      userLocation: '',
    });

    // Close dialog after submission
    handleOpenChange(false);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className={className}
          >
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center text-green-700'>
            Register Your NGO
          </DialogTitle>
          <DialogDescription className='text-center'>
            Provide information about your animal welfare organization to join
            our directory.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-4 py-4'>
          <div className='space-y-2'>
            <Label htmlFor='ngoName' className='font-medium'>
              NGO Name <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='ngoName'
              name='ngoName'
              value={formData.ngoName}
              onChange={handleInputChange}
              placeholder="Enter your organization's name"
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='location' className='font-medium'>
              Location (City & Country) <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='location'
              name='location'
              value={formData.location}
              onChange={handleInputChange}
              placeholder='e.g., Mumbai, India'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='establishedYear' className='font-medium'>
              Year Established <span className='text-red-500'>*</span>
            </Label>
            <Select
              name='establishedYear'
              value={formData.establishedYear}
              onValueChange={(value) =>
                handleSelectChange('establishedYear', value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder='Select year' />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='services' className='font-medium'>
              Services Offered <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='services'
              name='services'
              value={formData.services}
              onChange={handleInputChange}
              placeholder='e.g., Rescue, Adoption, Medical Aid, Awareness'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='mission' className='font-medium'>
              Mission Statement <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              id='mission'
              name='mission'
              value={formData.mission}
              onChange={handleInputChange}
              placeholder="Brief description of your NGO's purpose"
              rows={3}
              required
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='email' className='font-medium'>
                Email <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='contact@yourorganization.org'
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='phone' className='font-medium'>
                Phone <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='+91 9876543210'
                required
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='website' className='font-medium'>
              Website/Social Media
            </Label>
            <Input
              id='website'
              name='website'
              value={formData.website}
              onChange={handleInputChange}
              placeholder='https://www.yourorganization.org'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='userLocation' className='font-medium'>
              Your Location
            </Label>
            <Input
              id='userLocation'
              name='userLocation'
              value={formData.userLocation}
              onChange={handleInputChange}
              placeholder='Your city/state'
            />
          </div>

          <div className='pt-2 space-y-2 text-sm text-gray-500'>
            <p>
              All fields marked with <span className='text-red-500'>*</span> are
              required.
            </p>
            <p>
              Your information will be reviewed by our team before being added
              to our directory.
            </p>
          </div>

          <DialogFooter className='pt-4'>
            <DialogClose asChild>
              <Button type='button' variant='outline'>
                Cancel
              </Button>
            </DialogClose>
            <Button type='submit' className='bg-green-600 hover:bg-green-700'>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
