import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import {FC, memo, useCallback, useMemo, useRef, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [data, setData] = useState<FormData>(defaultData);
  const form = useRef<HTMLFormElement | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      emailjs
      .sendForm('service_1oucbtf', 'template_7po57ba', form.current, {
        publicKey: 'PNOmbQ7EfsGIgFd6U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
        },
        error => {
          console.log('FAILED...', error.text);
        },
      );
    }
  }, []);

  const handleSentMoreMessage = () => {
    form.current?.reset();
    setMessageSent(false);
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return messageSent ? (
    <>
      <p className="prose leading-6 text-neutral-300 pb-3">Thank you for your time! I will get in touch with you soon.</p>
      <p className="prose leading-6 text-neutral-300 pb-3">Do you want to send another message?</p>
      <button
        className={classNames(
          'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
          'border-white ring-white',
        )}
        onClick={handleSentMoreMessage}>
        Yes
      </button>
    </>
  ) : (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={form}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
