import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Yash',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jeetendra',
      email: 'jeetendra_nayak@persistent.com',
      password: bcrypt.hashSync('112233'),
      isAdmin: true,
    },
    {
      name: 'Siddhant',
      email: 'siddhant_sawant@persistent.com',
      password: bcrypt.hashSync('445566'),
      isAdmin: true,
    },
    {
      name: 'Trupti',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Pranav',
      email: 'Pranav@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        // _id: '1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpg', // 679px × 829px
        price: 899,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
      {
        // _id: '2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 1000,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
      {
        // _id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 1000,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
      {
        // _id: '4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 1000,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
      {
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 1000,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
      {
        name: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)',
        slug: 'Kitchen',
        category: 'Home & Kitchen',
        image: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        price: 1195,
        countInStock: 5,
        brand: 'Pigeon',
        rating: 4.5,
        numReviews: 10,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day'
      },
    ],
  };
  export default data;