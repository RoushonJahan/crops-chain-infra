const axios = require('axios');

const products = [
  {
    id: 'P001',
    name: 'Rice',
    price: 45,
    quantity: 500,
    shopName: 'Farm House',
    location: 'Rajshahi',
    status: 'available',
    description: 'Premium quality basmati rice directly from organic farms',
    farmDetails: 'Grown using traditional methods without harmful pesticides',
    harvestDate: '2024-01-15'
  },
  {
    id: 'P002',
    name: 'Wheat',
    price: 55,
    quantity: 300,
    shopName: 'AgroAgency Ltd. Co.',
    location: 'Dhaka',
    status: 'available',
    description: 'High-quality wheat grains perfect for flour production',
    farmDetails: 'Harvested from certified organic farms',
    harvestDate: '2024-01-20'
  },
  {
    id: 'P003',
    name: 'Corn',
    price: 35,
    quantity: 87,
    shopName: 'Northern Agro',
    location: 'Gazipur',
    status: 'stock-out',
    description: 'Sweet corn variety suitable for both consumption and processing',
    farmDetails: 'Non-GMO corn grown in fertile soil',
    harvestDate: '2024-01-10'
  },
  {
    id: 'P004',
    name: 'Tomato',
    price: 25,
    quantity: 200,
    shopName: 'Green Valley',
    location: 'Cumilla',
    status: 'available',
    description: 'Fresh tomatoes picked at peak ripeness',
    farmDetails: 'Greenhouse grown with controlled environment',
    harvestDate: '2024-02-01'
  },
  {
    id: 'P005',
    name: 'Potato',
    price: 18,
    quantity: 450,
    shopName: 'Rural Farmers',
    location: 'Bogura',
    status: 'available',
    description: 'Premium potatoes suitable for cooking and processing',
    farmDetails: 'Grown in clay-rich soil for better texture',
    harvestDate: '2024-01-25'
  },
  {
    id: 'P006',
    name: 'Onion',
    price: 30,
    quantity: 320,
    shopName: 'Valley Fresh',
    location: 'Pabna',
    status: 'available',
    description: 'Fresh red onions with strong flavor',
    farmDetails: 'Organically grown without chemical fertilizers',
    harvestDate: '2024-02-05'
  },
  {
    id: 'P007',
    name: 'Garlic',
    price: 120,
    quantity: 150,
    shopName: 'Spice Garden',
    location: 'Jessore',
    status: 'available',
    description: 'Premium quality garlic bulbs',
    farmDetails: 'Naturally dried and cured',
    harvestDate: '2024-01-28'
  },
  {
    id: 'P008',
    name: 'Carrot',
    price: 40,
    quantity: 280,
    shopName: 'Vegetable Hub',
    location: 'Rangpur',
    status: 'available',
    description: 'Fresh carrots rich in vitamins',
    farmDetails: 'Grown in organic soil',
    harvestDate: '2024-02-10'
  },
  {
    id: 'P009',
    name: 'Spinach',
    price: 15,
    quantity: 95,
    shopName: 'Green Leaf',
    location: 'Mymensingh',
    status: 'stock-out',
    description: 'Fresh green spinach leaves',
    farmDetails: 'Pesticide-free cultivation',
    harvestDate: '2024-02-12'
  },
  {
    id: 'P010',
    name: 'Cabbage',
    price: 22,
    quantity: 400,
    shopName: 'Farm Fresh',
    location: 'Comilla',
    status: 'available',
    description: 'Crisp and fresh cabbage heads',
    farmDetails: 'Grown in controlled environment',
    harvestDate: '2024-02-08'
  },
  {
    id: 'P011',
    name: 'Cauliflower',
    price: 35,
    quantity: 180,
    shopName: 'White Pearl',
    location: 'Tangail',
    status: 'available',
    description: 'Fresh white cauliflower',
    farmDetails: 'Organically cultivated',
    harvestDate: '2024-02-06'
  },
  {
    id: 'P012',
    name: 'Brinjal',
    price: 28,
    quantity: 220,
    shopName: 'Purple Garden',
    location: 'Narayanganj',
    status: 'available',
    description: 'Fresh purple brinjal',
    farmDetails: 'Natural farming methods',
    harvestDate: '2024-02-09'
  },
  {
    id: 'P013',
    name: 'Cucumber',
    price: 20,
    quantity: 75,
    shopName: 'Cool Veg',
    location: 'Faridpur',
    status: 'stock-out',
    description: 'Fresh green cucumbers',
    farmDetails: 'Hydroponic cultivation',
    harvestDate: '2024-02-11'
  },
  {
    id: 'P014',
    name: 'Pumpkin',
    price: 25,
    quantity: 350,
    shopName: 'Orange Farm',
    location: 'Barisal',
    status: 'available',
    description: 'Large orange pumpkins',
    farmDetails: 'Traditional farming',
    harvestDate: '2024-01-30'
  },
  {
    id: 'P015',
    name: 'Green Beans',
    price: 45,
    quantity: 160,
    shopName: 'Bean Field',
    location: 'Kishoreganj',
    status: 'available',
    description: 'Fresh green beans',
    farmDetails: 'Organic farming practices',
    harvestDate: '2024-02-07'
  },
  {
    id: 'P016',
    name: 'Bell Pepper',
    price: 65,
    quantity: 85,
    shopName: 'Color Garden',
    location: 'Manikganj',
    status: 'stock-out',
    description: 'Mixed color bell peppers',
    farmDetails: 'Greenhouse cultivation',
    harvestDate: '2024-02-04'
  },
  {
    id: 'P017',
    name: 'Okra',
    price: 35,
    quantity: 190,
    shopName: 'Green Finger',
    location: 'Gopalganj',
    status: 'available',
    description: 'Fresh okra vegetables',
    farmDetails: 'Natural cultivation',
    harvestDate: '2024-02-13'
  },
  {
    id: 'P018',
    name: 'Green Chili',
    price: 80,
    quantity: 120,
    shopName: 'Spicy Farm',
    location: 'Patuakhali',
    status: 'available',
    description: 'Hot green chilies',
    farmDetails: 'Organic spice farming',
    harvestDate: '2024-02-02'
  },
  {
    id: 'P019',
    name: 'Lemon',
    price: 90,
    quantity: 250,
    shopName: 'Citrus Grove',
    location: 'Sylhet',
    status: 'available',
    description: 'Fresh juicy lemons',
    farmDetails: 'Citrus orchard cultivation',
    harvestDate: '2024-01-18'
  },
  {
    id: 'P020',
    name: 'Ginger',
    price: 150,
    quantity: 90,
    shopName: 'Root Spice',
    location: 'Bandarban',
    status: 'stock-out',
    description: 'Fresh ginger roots',
    farmDetails: 'Hill tract cultivation',
    harvestDate: '2024-01-22'
  }
];

const sellers = [
  {
    id: 'SHP00001',
    shopName: 'Farm House',
    ownerName: 'Md. Rahman',
    phone: '+8801712345001',
    email: 'farmhouse@gmail.com',
    location: 'Rajshahi',
    transactionType: 'Nagad',
    transactionId: 'TXN12345',
    totalOrders: 156,
    joinDate: 'Jan 2023',
    products: ['Rice', 'Wheat', 'Corn']
  },
  {
    id: 'SHP00002',
    shopName: 'AgroAgency Ltd. Co.',
    ownerName: 'Fatima Khatun',
    phone: '+8801712345002',
    email: 'agroagency@gmail.com',
    location: 'Dhaka',
    transactionType: 'bKash',
    transactionId: 'TXN12346',
    totalOrders: 234,
    joinDate: 'Mar 2022',
    products: ['Wheat', 'Barley', 'Oats']
  },
  {
    id: 'SHP00003',
    shopName: 'Northern Agro',
    ownerName: 'Abdul Karim',
    phone: '+8801712345003',
    email: 'northernagro@gmail.com',
    location: 'Gazipur',
    transactionType: 'Nagad',
    transactionId: 'TXN12347',
    totalOrders: 189,
    joinDate: 'Jul 2023',
    products: ['Corn', 'Soybean', 'Sunflower']
  },
  {
    id: 'SHP00004',
    shopName: 'Green Valley',
    ownerName: 'Nasir Ahmed',
    phone: '+8801712345004',
    email: 'greenvalley@gmail.com',
    location: 'Cumilla',
    transactionType: 'bKash',
    transactionId: 'TXN12348',
    totalOrders: 298,
    joinDate: 'Nov 2021',
    products: ['Tomato', 'Pepper', 'Cucumber']
  },
  {
    id: 'SHP00005',
    shopName: 'Rural Farmers',
    ownerName: 'Rashida Begum',
    phone: '+8801712345005',
    email: 'ruralfarmers@gmail.com',
    location: 'Bogura',
    transactionType: 'Nagad',
    transactionId: 'TXN12349',
    totalOrders: 167,
    joinDate: 'Sep 2022',
    products: ['Potato', 'Onion', 'Garlic']
  }
];

const orders = [
  {
    id: 'ORD001',
    type: 'Rice',
    date: 'Feb 20, 2024',
    status: 'delivered',
    quantity: 100,
    totalPrice: 1800,
    location: 'Dhaka',
    estimatedDelivery: 'Feb 22, 2024',
    trackingId: 'TRK001'
  },
  {
    id: 'ORD002',
    type: 'Egg',
    date: 'Mar 1, 2024',
    status: 'on-the-way',
    quantity: 200,
    totalPrice: 1200,
    location: 'Rajshahi',
    estimatedDelivery: 'Mar 4, 2024',
    trackingId: 'TRK002'
  },
  {
    id: 'ORD003',
    type: 'Rice',
    date: 'Mar 2, 2024',
    status: 'shipped',
    quantity: 7200,
    totalPrice: 32400,
    location: 'Gazipur',
    estimatedDelivery: 'Mar 5, 2024',
    trackingId: 'TRK003'
  },
  {
    id: 'ORD004',
    type: 'Potato',
    date: 'Mar 2, 2024',
    status: 'delivered',
    quantity: 4200,
    totalPrice: 7560,
    location: 'Barishal',
    estimatedDelivery: 'Mar 4, 2024',
    trackingId: 'TRK004'
  },
  {
    id: 'ORD005',
    type: 'Potato',
    date: 'Mar 6, 2024',
    status: 'waiting-for-transport',
    quantity: 3200,
    totalPrice: 5760,
    location: 'Dhaka',
    estimatedDelivery: 'Mar 9, 2024',
    trackingId: 'TRK005'
  },
  {
    id: 'ORD006',
    type: 'Wheat',
    date: 'Mar 8, 2024',
    status: 'confirmation-pending',
    quantity: 1500,
    totalPrice: 8250,
    location: 'Chittagong',
    estimatedDelivery: 'Mar 12, 2024',
    trackingId: 'TRK006'
  },
  {
    id: 'ORD007',
    type: 'Corn',
    date: 'Mar 10, 2024',
    status: 'shipped',
    quantity: 800,
    totalPrice: 2800,
    location: 'Sylhet',
    estimatedDelivery: 'Mar 13, 2024',
    trackingId: 'TRK007'
  },
  {
    id: 'ORD008',
    type: 'Tomato',
    date: 'Mar 12, 2024',
    status: 'confirmation-pending',
    quantity: 500,
    totalPrice: 1250,
    location: 'Cumilla',
    estimatedDelivery: 'Mar 15, 2024',
    trackingId: 'TRK008'
  },
  {
    id: 'ORD009',
    type: 'Onion',
    date: 'Mar 14, 2024',
    status: 'waiting-for-transport',
    quantity: 1200,
    totalPrice: 3600,
    location: 'Rangpur',
    estimatedDelivery: 'Mar 17, 2024',
    trackingId: 'TRK009'
  },
  {
    id: 'ORD010',
    type: 'Garlic',
    date: 'Mar 15, 2024',
    status: 'confirmation-pending',
    quantity: 300,
    totalPrice: 4500,
    location: 'Khulna',
    estimatedDelivery: 'Mar 18, 2024',
    trackingId: 'TRK010'
  },
  {
    id: 'ORD011',
    type: 'Spinach',
    date: 'Mar 16, 2024',
    status: 'on-the-way',
    quantity: 150,
    totalPrice: 750,
    location: 'Mymensingh',
    estimatedDelivery: 'Mar 19, 2024',
    trackingId: 'TRK011'
  },
  {
    id: 'ORD012',
    type: 'Cabbage',
    date: 'Mar 17, 2024',
    status: 'shipped',
    quantity: 400,
    totalPrice: 1200,
    location: 'Jessore',
    estimatedDelivery: 'Mar 20, 2024',
    trackingId: 'TRK012'
  },
  {
    id: 'ORD013',
    type: 'Carrot',
    date: 'Mar 18, 2024',
    status: 'waiting-for-transport',
    quantity: 250,
    totalPrice: 875,
    location: 'Faridpur',
    estimatedDelivery: 'Mar 21, 2024',
    trackingId: 'TRK013'
  },
  {
    id: 'ORD014',
    type: 'Cucumber',
    date: 'Mar 19, 2024',
    status: 'delivered',
    quantity: 180,
    totalPrice: 540,
    location: 'Pabna',
    estimatedDelivery: 'Mar 22, 2024',
    trackingId: 'TRK014'
  },
  {
    id: 'ORD015',
    type: 'Brinjal',
    date: 'Mar 20, 2024',
    status: 'confirmation-pending',
    quantity: 320,
    totalPrice: 960,
    location: 'Narayanganj',
    estimatedDelivery: 'Mar 23, 2024',
    trackingId: 'TRK015'
  },
  {
    id: 'ORD016',
    type: 'Mango',
    date: 'Mar 21, 2024',
    status: 'on-the-way',
    quantity: 500,
    totalPrice: 2500,
    location: 'Rajshahi',
    estimatedDelivery: 'Mar 24, 2024',
    trackingId: 'TRK016'
  },
  {
    id: 'ORD017',
    type: 'Banana',
    date: 'Mar 22, 2024',
    status: 'shipped',
    quantity: 300,
    totalPrice: 900,
    location: 'Barisal',
    estimatedDelivery: 'Mar 25, 2024',
    trackingId: 'TRK017'
  },
  {
    id: 'ORD018',
    type: 'Jackfruit',
    date: 'Mar 23, 2024',
    status: 'waiting-for-transport',
    quantity: 150,
    totalPrice: 1500,
    location: 'Chittagong',
    estimatedDelivery: 'Mar 26, 2024',
    trackingId: 'TRK018'
  },
  {
    id: 'ORD019',
    type: 'Lemon',
    date: 'Mar 24, 2024',
    status: 'confirmation-pending',
    quantity: 100,
    totalPrice: 800,
    location: 'Sylhet',
    estimatedDelivery: 'Mar 27, 2024',
    trackingId: 'TRK019'
  },
  {
    id: 'ORD020',
    type: 'Papaya',
    date: 'Mar 25, 2024',
    status: 'delivered',
    quantity: 200,
    totalPrice: 1600,
    location: 'Khulna',
    estimatedDelivery: 'Mar 28, 2024',
    trackingId: 'TRK020'
  }
];

const buyers = [
  {
    id: 'B001',
    name: 'Alice Smith',
    phone: '+8801700000001',
    email: 'alice.smith@example.com',
    location: 'Dhaka'
  },
  {
    id: 'B002',
    name: 'Bob Johnson',
    phone: '+8801700000002',
    email: 'bob.johnson@example.com',
    location: 'Chittagong'
  },
  {
    id: 'B003',
    name: 'Charlie Brown',
    phone: '+8801700000003',
    email: 'charlie.brown@example.com',
    location: 'Sylhet'
  }
];

const farmers = [
  {
    id: 'F001',
    name: 'Rahim Mia',
    phone: '+8801800000001',
    email: 'rahim.mia@example.com',
    location: 'Rajshahi',
    farmName: 'Green Acres Farm'
  },
  {
    id: 'F002',
    name: 'Sakina Begum',
    phone: '+8801800000002',
    email: 'sakina.begum@example.com',
    location: 'Jessore',
    farmName: 'Fertile Lands'
  },
  {
    id: 'F003',
    name: 'Korim Uddin',
    phone: '+8801800000003',
    email: 'korim.uddin@example.com',
    location: 'Bogura',
    farmName: 'Golden Harvest'
  }
];

const purchaseHistory = [
  {
    id: 'PH001',
    buyerId: 'B001',
    productId: 'P001',
    quantity: 10,
    totalPrice: 450,
    purchaseDate: new Date('2024-03-01T10:00:00Z')
  },
  {
    id: 'PH002',
    buyerId: 'B002',
    productId: 'P004',
    quantity: 5,
    totalPrice: 125,
    purchaseDate: new Date('2024-03-05T14:30:00Z')
  },
  {
    id: 'PH003',
    buyerId: 'B001',
    productId: 'P002',
    quantity: 20,
    totalPrice: 1100,
    purchaseDate: new Date('2024-03-10T09:15:00Z')
  }
];

const trackOrders = [
  {
    id: 'TRK001',
    orderId: 'ORD001',
    status: 'Processing',
    location: 'Warehouse A',
    timestamp: new Date('2024-02-20T08:00:00Z')
  },
  {
    id: 'TRK002',
    orderId: 'ORD001',
    status: 'Shipped',
    location: 'Transit Hub B',
    timestamp: new Date('2024-02-20T15:00:00Z')
  },
  {
    id: 'TRK003',
    orderId: 'ORD001',
    status: 'Delivered',
    location: 'Dhaka',
    timestamp: new Date('2024-02-22T10:00:00Z')
  }
];

const transportation = [
  {
    id: 'TR001',
    name: 'Azhar Publication',
    vehicle: 'Truck - 104',
    type: 'Truck',
    capacity: '5 tons',
    pricePerKm: 12,
    specialization: 'Heavy Cargo',
    coverage: 'Nationwide',
    contact: '+8801712345001',
    email: 'azhar.transport@gmail.com',
    features: ['GPS Tracking', 'Insurance Covered', '24/7 Support']
  },
  {
    id: 'TR002',
    name: 'Bashiron Enterprise',
    vehicle: 'Pickup - 150',
    type: 'Pickup',
    capacity: '1.5 tons',
    pricePerKm: 8,
    specialization: 'Quick Delivery',
    coverage: 'Regional',
    contact: '+8801712345002',
    email: 'bashiron.logistics@gmail.com',
    features: ['Fast Delivery', 'Cold Storage', 'Live Tracking']
  },
  {
    id: 'TR003',
    name: 'Beautiful Publication',
    vehicle: 'Truck - 302',
    type: 'Truck',
    capacity: '8 tons',
    pricePerKm: 15,
    specialization: 'Bulk Transport',
    coverage: 'International',
    contact: '+8801712345003',
    email: 'beautiful.cargo@gmail.com',
    features: ['Multi-temperature', 'Documentation', 'Express Service']
  },
  {
    id: 'TR004',
    name: 'Swift Logistics',
    vehicle: 'Van - 205',
    type: 'Van',
    capacity: '2 tons',
    pricePerKm: 10,
    specialization: 'Urban Delivery',
    coverage: 'City Wide',
    contact: '+8801712345004',
    email: 'swift.delivery@gmail.com',
    features: ['Same Day Delivery', 'Fragile Handling', 'Real-time Updates']
  },
  {
    id: 'TR005',
    name: 'Green Transport Co.',
    vehicle: 'Eco Truck',
    type: 'Eco Truck',
    capacity: '6 tons',
    pricePerKm: 13,
    specialization: 'Eco-Friendly',
    coverage: 'Regional',
    contact: '+8801712345005',
    email: 'green.transport@gmail.com',
    features: ['Zero Emission', 'Organic Certified', 'Solar Powered']
  },
  {
    id: 'TR006',
    name: 'Rapid Cargo Services',
    vehicle: 'Mini Truck - 89',
    type: 'Mini Truck',
    capacity: '3 tons',
    pricePerKm: 9,
    specialization: 'Small Batches',
    coverage: 'Local',
    contact: '+8801712345006',
    email: 'rapid.cargo@gmail.com',
    features: ['Flexible Timing', 'Door to Door', 'Affordable Rates']
  }
];

async function insertData() {
  console.log('Inserting demo products...');
  for (const product of products) {
    try {
      await axios.post('http://localhost:3000/products', product);
      console.log(`Product ${product.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert product ${product.id}:`, error.message);
    }
  }

  console.log('Inserting demo sellers...');
  for (const seller of sellers) {
    try {
      await axios.post('http://localhost:3000/sellers', seller);
      console.log(`Seller ${seller.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert seller ${seller.id}:`, error.message);
    }
  }

  console.log('Inserting demo orders...');
  for (const order of orders) {
    try {
      await axios.post('http://localhost:3000/orders', order);
      console.log(`Order ${order.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert order ${order.id}:`, error.message);
    }
  }

  console.log('Inserting demo buyers...');
  for (const buyer of buyers) {
    try {
      await axios.post('http://localhost:3000/buyers', buyer);
      console.log(`Buyer ${buyer.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert buyer ${buyer.id}:`, error.message);
    }
  }

  console.log('Inserting demo farmers...');
  for (const farmer of farmers) {
    try {
      await axios.post('http://localhost:3000/farmers', farmer);
      console.log(`Farmer ${farmer.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert farmer ${farmer.id}:`, error.message);
    }
  }

  console.log('Inserting demo purchase history...');
  for (const purchase of purchaseHistory) {
    try {
      await axios.post('http://localhost:3000/purchase-history', purchase);
      console.log(`Purchase History ${purchase.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert purchase history ${purchase.id}:`, error.message);
    }
  }

  console.log('Inserting demo track orders...');
  for (const track of trackOrders) {
    try {
      await axios.post('http://localhost:3000/track-orders', track);
      console.log(`Track Order ${track.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert track order ${track.id}:`, error.message);
    }
  }

  console.log('Inserting demo transportation...');
  for (const transport of transportation) {
    try {
      await axios.post('http://localhost:3000/transportation', transport);
      console.log(`Transportation ${transport.id} inserted.`);
    } catch (error) {
      console.error(`Failed to insert transportation ${transport.id}:`, error.message);
    }
  }

  console.log('Demo data insertion complete.');
}

insertData();
