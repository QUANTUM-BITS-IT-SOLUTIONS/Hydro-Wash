import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getAllServices } from '@/data/servicesData';
import emailjs from '@emailjs/browser';
import type { EmailJSResponseStatus } from '@emailjs/browser';
import { Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CONTACT_POPUP_ENABLED = false;

const getEmailJsConfig = () => ({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
});

const getEmailErrorMessage = (error: unknown) => {
  if (error && typeof error === 'object' && 'text' in error) {
    return String((error as EmailJSResponseStatus).text);
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong. Please try again later.';
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  service: z.string().min(1, {
    message: 'Please select a service.',
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ContactFormContext.Provider value={{ open, setOpen }}>
      {children}
      {CONTACT_POPUP_ENABLED && <ContactFormDialog />}
    </ContactFormContext.Provider>
  );
};

interface ContactFormTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ContactFormTrigger: React.FC<ContactFormTriggerProps> = ({
  children,
  className,
  onClick,
}) => {
  const { setOpen } = useContactForm();

  const handleWhatsAppRedirect = () => {
    onClick?.();
    window.open("https://wa.me/918888899936", "_blank", "noopener,noreferrer");
  };

  if (!CONTACT_POPUP_ENABLED) {
    if (React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        onClick?: (event: React.MouseEvent) => void;
      }>;

      return React.cloneElement(child, {
        onClick: (event: React.MouseEvent) => {
          child.props.onClick?.(event);
          handleWhatsAppRedirect();
        },
      });
    }

    return (
      <div className={className} onClick={handleWhatsAppRedirect}>
        {children}
      </div>
    );
  }

  const handleOpen = () => {
    onClick?.();
    setOpen(true);
  };

  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      onClick?: (event: React.MouseEvent) => void;
    }>;

    return React.cloneElement(child, {
      onClick: (event: React.MouseEvent) => {
        child.props.onClick?.(event);
        handleOpen();
      },
    });
  }

  return (
    <div
      className={className}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

const ContactFormDialog: React.FC = () => {
  const { open, setOpen } = useContactForm();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const services = getAllServices();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
    },
  });

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setShowForm(false);
      form.reset();
    }
  };

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    try {
      const { publicKey, serviceId, templateId } = getEmailJsConfig();

      if (!publicKey || !serviceId || !templateId) {
        toast({
          title: 'EmailJS not configured',
          description: 'Add VITE_EMAILJS_* values to your .env file and restart the dev server.',
          variant: 'destructive',
        });
        return;
      }

      emailjs.init({ publicKey });

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          from_name: values.name,
          user_name: values.name,
          email: values.email,
          user_email: values.email,
          reply_to: values.email,
          phone: values.phone,
          user_phone: values.phone,
          service: values.service,
          message: `Booking request for ${values.service}`,
        },
        { publicKey }
      );

      toast({
        title: 'Success!',
        description: 'Your form has been submitted. We will contact you shortly!',
      });
      setOpen(false);
      setShowForm(false);
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error!',
        description: getEmailErrorMessage(error),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          'w-[calc(100%-2rem)] p-0 gap-0 rounded-none border-4 border-yellow-500 bg-transparent shadow-2xl overflow-hidden transition-all duration-500 ease-in-out [&>button]:hidden',
          showForm ? 'max-w-xl' : 'max-w-md'
        )}
      >
        <div className="relative w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Hero.png')" }}
          />
          <div className="absolute inset-0 bg-black/75" />

          <button
            type="button"
            aria-label="Close booking form"
            className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center bg-yellow-500 text-black transition-colors hover:bg-yellow-400"
            onClick={() => handleOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className={cn(
              'relative z-10 flex flex-col justify-center px-6 transition-all duration-500 ease-in-out sm:px-10',
              showForm ? 'py-10 sm:py-12' : 'py-12 sm:py-16'
            )}
          >
            <DialogTitle className="mb-3 text-center text-2xl font-bold leading-tight text-white sm:text-3xl">
              Book your <span className="text-yellow-400">Car Detailing</span> now!
            </DialogTitle>

            <DialogDescription className="mb-3 text-center text-sm text-white/90 sm:text-base">
              Do a premium detailing service and give your car the shine it deserves.
            </DialogDescription>

            <p className="mb-6 text-center text-sm text-white/80">
              Fill in your details — we&apos;ll contact you instantly.
            </p>

            {!showForm && (
              <>
                <p className="mb-6 text-center text-lg font-semibold text-white sm:text-xl">
                  Schedule Your Premium Detailing
                </p>

                <div className="flex justify-center">
                  <Button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="h-12 min-w-[220px] rounded-full bg-lime-400 px-8 text-sm font-bold uppercase tracking-wider text-black hover:bg-lime-300"
                  >
                    Book Now
                  </Button>
                </div>
              </>
            )}

            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-in-out',
                showForm ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-auto w-full max-w-md space-y-4 pt-2"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              className="h-11 rounded-none border-white/20 bg-white/95 text-black placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Email"
                              type="email"
                              {...field}
                              className="h-11 rounded-none border-white/20 bg-white/95 text-black placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Your Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Phone"
                              {...field}
                              className="h-11 rounded-none border-white/20 bg-white/95 text-black placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Select Service</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11 rounded-none border-white/20 bg-white/95 text-black">
                                <SelectValue placeholder="Select Service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="z-[200] rounded-none">
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.title}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-red-300" />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center pt-2">
                      <Button
                        type="submit"
                        className="h-12 min-w-[220px] rounded-full bg-lime-400 px-8 text-sm font-bold uppercase tracking-wider text-black hover:bg-lime-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Book Now'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-white/70">
              Visit HydroWash Studio for expert car detailing support.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
