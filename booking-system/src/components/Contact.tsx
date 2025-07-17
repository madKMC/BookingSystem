import React from 'react';
import { Mail, Phone, Twitter } from 'lucide-react';

interface ContactCardProps {
  title: string;
  detail: string;
  href: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, detail, href, icon }) => (
  <li>
    <a
      href={href}
      className='flex items-start gap-3 rounded-lg border border-gray-300 p-4 hover:border-pink-600 hover:shadow-md transition-all duration-200'
    >
      <span className='text-pink-600'>{icon}</span>
      <div>
        <strong className='font-medium text-black'>{title}</strong>
        <p className='mt-1 text-xs font-medium text-gray-700'>{detail}</p>
      </div>
    </a>
  </li>
);

const Contact: React.FC = () => {
  return (
    <div className='flex justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <article className='w-full max-w-md sm:max-w-lg md:min-w-[500px] md:max-w-xl lg:max-w-2xl rounded-xl border border-gray-300 bg-gray-50 p-6 shadow-sm'>
        <div className='flex items-center gap-4'>
          <img
            src='/PsychologyProfilePic.jpg'
            alt='Lees Mom Profile'
            className='size-16 rounded-full object-cover'
          />
          <div>
            <h3 className='text-lg font-semibold text-black'>Lees Mom</h3>
            <ul className='flex gap-3 mt-1'>
              <li>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs font-medium text-gray-700 hover:text-pink-600 transition'
                >
                  <div className='flex items-center gap-1'>
                    <Twitter size={14} />
                    Twitter
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className='mt-6 space-y-3'>
          <ContactCard
            title='Whatsapp'
            detail='+27 82 123 4567'
            href='tel:+27821234567'
            icon={<Phone size={18} />}
          />
          <ContactCard
            title='Email'
            detail='leesmom@gmail.com'
            href='mailto:leesmom@gmail.com'
            icon={<Mail size={18} />}
          />
        </ul>
      </article>
    </div>
  );
};
export default Contact;
