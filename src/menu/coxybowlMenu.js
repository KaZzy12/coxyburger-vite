export const coxybowlMenu = {
  bowls: [
    {
      id: 1,
      name: 'Petit',
      price: 8.5,
      fries: 'Une petite frite',
      meatCount: 1,
      meats: ['3 tenders', '1 fricadelle', '1 viande hamburger', '1 mexicano'],
    },
    {
      id: 2,
      name: 'Grand',
      price: 12,
      fries: 'Une grande frite',
      meatCount: 2,
      meats: ['4 tenders', '1 fricadelle', '1 viande hamburger', '1 mexicano', '1 chili cheese'],
    },
  ],
  included: ['Sauce au choix', 'Sauce fromagère et lardons'],
  supplements: {
    price: 0.5,
    items: ['Oignons frits', 'Cornichons', 'Oignons frais'],
  },
};

export default coxybowlMenu;
