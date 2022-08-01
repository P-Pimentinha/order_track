import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'all orders',
    path: 'all-orders',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'add order',
    path: 'add-order',
    icon: <FaWpforms />,
  },
  {
    id: 3,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
