export interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    discount?: string;
    isNew?: boolean;
    fewLeft?: boolean;
    outOfStock?: boolean;
    longDesc: string;
  }
  
  export const products: Product[] = [
    { 
      id: 1, 
      name: 'Gaming Keyboard', 
      image: 'keyboard.jpg', 
      price: '$120', 
      discount: '20% off', 
      fewLeft: true, 
      longDesc: 'A high-performance gaming keyboard with customizable backlit keys for better visibility in dark environments.' 
    },
    { 
      id: 2, 
      name: 'Wireless Mouse', 
      image: 'mouse.jpg', 
      price: '$50', 
      isNew: true, 
      longDesc: 'An ergonomic wireless mouse with precision tracking, perfect for work or gaming.' 
    },
    { 
      id: 3, 
      name: 'Laptop Stand', 
      image: 'laptop-stand.jpg', 
      price: '$30', 
      outOfStock: true, 
      longDesc: 'A sturdy and adjustable laptop stand to improve your workspace ergonomics.' 
    },
    { 
      id: 4, 
      name: 'External Hard Drive', 
      image: 'hard-drive.jpg', 
      price: '$80', 
      discount: '10% off', 
      longDesc: '1TB external hard drive with fast transfer speeds and reliable storage.' 
    },
    { 
      id: 5, 
      name: 'Custom Web Development', 
      image: 'web-dev.jpg', 
      price: '$2000', 
      longDesc: 'Build responsive, fast, and secure websites tailored to your business needs.' 
    },
    { 
      id: 6, 
      name: 'Mobile App Development', 
      image: 'app-dev.jpg', 
      price: '$1500', 
      fewLeft: true, 
      longDesc: 'Expert mobile app development services for Android and iOS platforms.' 
    },
    { 
      id: 7, 
      name: 'PC Monitor', 
      image: 'monitor.jpg', 
      price: '$300', 
      isNew: true, 
      longDesc: '27-inch full HD monitor with ultra-slim bezels and vibrant color display.' 
    },
    { 
      id: 8, 
      name: 'Data Backup Service', 
      image: 'data-backup.jpg', 
      price: '$100', 
      outOfStock: true, 
      longDesc: 'Ensure the safety of your critical data with our secure backup service.' 
    },
    { 
      id: 9, 
      name: 'Software Installation', 
      image: 'software-install.jpg', 
      price: '$150', 
      discount: '50% off', 
      longDesc: 'Seamless installation and support for various software applications.' 
    },
    { 
      id: 10, 
      name: 'Security Solutions', 
      image: 'security.jpg', 
      price: '$400', 
      fewLeft: true, 
      longDesc: 'Advanced security solutions to protect your business data from cyber threats.' 
    },
    
    // Laptops
    { 
      id: 11, 
      name: 'Dell Inspiron 15', 
      image: 'dell-inspiron.jpg', 
      price: '$800', 
      longDesc: '15-inch Dell Inspiron with Intel i5 processor, 8GB RAM, and 256GB SSD.' 
    },
    { 
      id: 12, 
      name: 'HP Pavilion', 
      image: 'hp-pavilion.jpg', 
      price: '$900', 
      fewLeft: true, 
      longDesc: 'HP Pavilion with AMD Ryzen 5, 16GB RAM, and 512GB SSD for enhanced performance.' 
    },
    { 
      id: 13, 
      name: 'MacBook Pro', 
      image: 'macbook-pro.jpg', 
      price: '$2000', 
      outOfStock: true, 
      longDesc: 'Apple MacBook Pro with M1 chip, 16GB RAM, and Retina display.' 
    },
    
    // Antivirus Software
    { 
      id: 14, 
      name: 'Norton Antivirus', 
      image: 'norton-antivirus.jpg', 
      price: '$50', 
      isNew: true, 
      longDesc: 'Comprehensive antivirus protection for your devices, ensuring safety from malware and viruses.' 
    },
    { 
      id: 15, 
      name: 'Kaspersky Total Security', 
      image: 'kaspersky.jpg', 
      price: '$70', 
      longDesc: 'Advanced internet security with multi-device protection and parental controls.' 
    },
    
    // Headphones
    { 
      id: 16, 
      name: 'Sony WH-1000XM4', 
      image: 'sony-headphones.jpg', 
      price: '$350', 
      discount: '15% off', 
      longDesc: 'Industry-leading noise-cancelling wireless headphones with exceptional sound quality.' 
    },
    { 
        id: 17, 
        name: 'Wireless Router', 
        image: 'router.jpg', 
        price: '$120', 
        longDesc: 'High-speed wireless router with dual-band support and parental controls.' 
      },
      { 
        id: 18, 
        name: 'Noise-Cancelling Earbuds', 
        image: 'earbuds.jpg', 
        price: '$150', 
        discount: '10% off', 
        isNew: true, 
        longDesc: 'Compact wireless earbuds with active noise cancellation and long battery life.' 
      },
      { 
        id: 19, 
        name: '4K UHD TV', 
        image: '4k-tv.jpg', 
        price: '$800', 
        fewLeft: true, 
        longDesc: '55-inch 4K Ultra HD TV with smart features and vibrant picture quality.' 
      },
      { 
        id: 20, 
        name: 'Bluetooth Speaker', 
        image: 'bluetooth-speaker.jpg', 
        price: '$60', 
        longDesc: 'Portable Bluetooth speaker with deep bass and 10-hour battery life.' 
      },
      { 
        id: 21, 
        name: 'Gaming Chair', 
        image: 'gaming-chair.jpg', 
        price: '$250', 
        discount: '25% off', 
        longDesc: 'Ergonomic gaming chair with adjustable armrests and lumbar support.' 
      }
  ];