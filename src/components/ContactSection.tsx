import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section } from './Section';
import { contact } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form Submitted:', data);
    // Here you would typically send the data to a server or email service
    alert('Message sent! (Check console for data)');
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neon-pink">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass p-8 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input {...register('name')} placeholder="Name" className="w-full bg-black/30 p-3 rounded border border-gray-600 focus:outline-none focus:border-neon-cyan" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input {...register('email')} placeholder="Email" className="w-full bg-black/30 p-3 rounded border border-gray-600 focus:outline-none focus:border-neon-cyan" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <textarea {...register('message')} placeholder="Message" rows={5} className="w-full bg-black/30 p-3 rounded border border-gray-600 focus:outline-none focus:border-neon-cyan"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full p-3 font-bold bg-neon-cyan text-black rounded hover:neon-glow-cyan transition-all">Send Message</button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p className="text-lg">Or reach out via my socials:</p>
          <div className="flex space-x-6 mt-4">
            {contact.socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors">
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}