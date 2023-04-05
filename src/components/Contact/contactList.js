import { v4 as uuidv4 } from 'uuid';

import location from "./images/slider-location-Icon.png";
import phone from "./images/slider-phone-call.png";
import mail from "./images/slider-mail.png";



const contacts = [

  {
    img: location,
    alt: 'location',
    title: 'Pay Us a Visit',
    description: 'Union St, Seattle, WA 98101, United States',
    id: uuidv4(), 
  },
  {
    img: phone,
    alt: 'phone',
    title: 'Give Us a Call',
    description: '(110) 1111-1010',
    id: uuidv4(),
  },
  {
    img: mail,
    alt: 'mail',
    title: 'Send Us a Message',
    description: 'Contact@HydraVTech.com',
    id: uuidv4(),
  }
]

export {contacts}