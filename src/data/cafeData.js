// ─── MENU DATA ────────────────────────────────────────────────────────────────
export const menuCategories = ['Coffee', 'Snacks & Quick Bites', 'Special Items', 'Desserts'];

export const menuData = {
  Coffee: [
    { id: 'c1', name: 'Espresso', price: 100, description: 'Pure, bold, and unapologetically intense. A double shot of rich dark espresso.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80' },
    { id: 'c2', name: 'Cappuccino', price: 120, description: 'Equal parts espresso, steamed milk, and velvety microfoam — a timeless classic.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
    { id: 'c3', name: 'Latte', price: 140, description: 'Silky smooth espresso melted into creamy steamed milk with beautiful latte art.', image: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9a4?w=400&q=80' },
    { id: 'c4', name: 'Americano', price: 110, description: 'Espresso diluted with hot water for a bold, full-bodied cup without bitterness.', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&q=80' },
    { id: 'c5', name: 'Mocha', price: 160, description: 'Espresso meets Belgian chocolate syrup and creamy milk, topped with whipped cream.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80' },
    { id: 'c6', name: 'Cold Coffee', price: 150, description: 'Chilled espresso blended with milk and ice — our house favourite.', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', badge: '🔥 Most Loved' },
    { id: 'c7', name: 'Caramel Macchiato', price: 180, description: 'Layers of vanilla, rich espresso, and silky milk finished with a caramel drizzle.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
  ],
  'Snacks & Quick Bites': [
    { id: 's1', name: 'Grilled Sandwich', price: 180, description: 'Golden-grilled sandwich with fresh veggies, herbs, and melted cheese inside.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
    { id: 's2', name: 'Veg Sandwich', price: 120, description: 'Classic fresh vegetable sandwich on soft bread with mint chutney.', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&q=80' },
    { id: 's3', name: 'Cheese Sandwich', price: 140, description: 'Double-loaded cheese sandwich, grilled to golden perfection.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
    { id: 's4', name: 'Paneer Sandwich', price: 160, description: 'Spiced cottage cheese filling in a crispy toasted sandwich. Irresistible.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
    { id: 's5', name: 'Veg Burger', price: 150, description: 'Hearty patty with lettuce, onion rings, and house sauce in a brioche bun.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
    { id: 's6', name: 'French Fries', price: 120, description: 'Crispy golden fries seasoned with sea salt and house spice blend.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
    { id: 's7', name: 'Cheese Garlic Bread', price: 140, description: 'Soft baguette loaded with garlic butter and melted mozzarella.', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80' },
    { id: 's8', name: 'Paneer Wrap', price: 170, description: 'Grilled paneer tikka in a whole-wheat wrap with tangy mint chutney.', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80' },
  ],
  'Special Items': [
    { id: 'sp1', name: 'Steamed Momos', price: 120, description: 'Soft steamed dumplings stuffed with spiced veggies, served with red chutney.', image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?w=400&q=80', badge: '🔥 Most Loved' },
    { id: 'sp2', name: 'Fried Momos', price: 140, description: 'Crispy golden-fried dumplings with a crunchy exterior and juicy filling inside.', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80', badge: '🔥 Most Loved' },
    { id: 'sp3', name: 'Tandoori Momos', price: 160, description: 'Chargrilled momos marinated in smoky tandoor spices — bold and addictive.', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&q=80', badge: '🔥 Most Loved' },
    { id: 'sp4', name: 'White Sauce Pasta', price: 180, description: 'Al dente penne in a rich creamy béchamel sauce with herbs and parmesan.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
    { id: 'sp5', name: 'Red Sauce Pasta', price: 170, description: 'Penne in a slow-cooked san marzano tomato sauce with basil and olive oil.', image: 'https://images.unsplash.com/photo-1598866594240-4a8da6e8f16b?w=400&q=80' },
    { id: 'sp6', name: 'Spaghetti', price: 200, description: 'Classic spaghetti tossed in house marinara with fresh herbs and a parmesan crust.', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80' },
  ],
  Desserts: [
    { id: 'd1', name: 'Chocolate Brownie', price: 100, description: 'Dense, fudgy chocolate brownie with a crinkle top — warm or cold, equally divine.', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80', badge: '🔥 Most Loved' },
    { id: 'd2', name: 'Cheesecake', price: 180, description: 'New York-style baked cheesecake on a buttery graham crust with berry coulis.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80' },
    { id: 'd3', name: 'Choco Lava Cake', price: 150, description: 'Warm, gooey molten chocolate cake that oozes pure joy. Served with vanilla ice cream.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
    { id: 'd4', name: 'Ice Cream Sundae', price: 130, description: 'Two scoops of premium ice cream with hot fudge, nuts, and a cherry on top.', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
    { id: 'd5', name: 'Tiramisu', price: 200, description: 'Authentic Italian tiramisu — espresso-soaked ladyfingers with mascarpone cream.', image: 'https://images.unsplash.com/photo-1568327249824-f7d7e5e41a70?w=400&q=80' },
  ],
};

// ─── TODAY'S SPECIAL ──────────────────────────────────────────────────────────
export const todaySpecial = {
  name: 'Tandoori Momos + Cold Coffee Combo',
  tagline: "Today's Special",
  price: 249,
  originalPrice: 310,
  description:
    "Our most-loved combo — smoky tandoori momos paired with our signature cold coffee. The perfect flavour-packed experience that keeps our regulars coming back every single day.",
  image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&q=90',
  badge: "🌟 Chef's Pick",
};

// ─── GALLERY ──────────────────────────────────────────────────────────────────
export const galleryImages = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Cozy café interior', caption: 'Our Cozy Space' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', alt: 'Artisan coffee latte art', caption: 'Artisan Latte Art' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', alt: 'Café seating area', caption: 'Premium Ambiance' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1568464536-26cbdc4eb38a?w=600&q=80', alt: 'Pastries and desserts', caption: 'Fresh Pastries Daily' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80', alt: 'Morning coffee ritual', caption: 'Morning Ritual' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&q=80', alt: 'Café food plating', caption: 'Beautiful Plating' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80', alt: 'Coffee cups arrangement', caption: 'Coffee Craftsmanship' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80', alt: 'Barista at work', caption: 'Passionate Baristas' },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
export const reviews = [
  {
    id: 'r1', name: 'Priya Sharma', role: 'Food Blogger, Dhanbad', avatar: 'PS', rating: 5,
    text: 'Best café in Dhanbad! Amazing vibe, the momos are absolutely to die for and the cold coffee is just 🔥. My go-to spot for every client meeting and hangout.',
    color: 'from-amber-400 to-orange-400',
  },
  {
    id: 'r2', name: 'Rahul Verma', role: 'Software Engineer', avatar: 'RV', rating: 5,
    text: 'Perfect place to hang out with friends. The tandoori momos + cold coffee combo is a must-try! The ambiance is so cozy and the staff is incredibly warm.',
    color: 'from-coffee-500 to-amber-500',
  },
  {
    id: 'r3', name: 'Ananya Mishra', role: 'Student, IIT (ISM) Dhanbad', avatar: 'AM', rating: 5,
    text: 'Finally Dhanbad has a café that actually feels premium. The choco lava cake is heavenly and the interiors are gorgeous. Love this place!',
    color: 'from-rose-400 to-orange-400',
  },
  {
    id: 'r4', name: 'Dr. Vikram Singh', role: 'Physician & Coffee Enthusiast', avatar: 'VS', rating: 5,
    text: 'As a coffee lover I can confidently say Brew Haven serves the best cappuccino in the city. The atmosphere is calming and the service is always top-notch.',
    color: 'from-emerald-400 to-teal-400',
  },
];
