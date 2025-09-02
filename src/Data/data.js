
const productsData = [

// Cabels
  { id: 1, name: "Data Cable", price: 300, category: "Chargers", image: "../Products/Chargers/Cabel_1.png" },
  { id: 2, name: "Data Cable", price: 400, category: "Chargers", image: "../Products/Chargers/Cabel_2.png" },
  { id: 3, name: "Data Cable", price: 450, category: "Chargers", image: "../Products/Chargers/Cabel_3.png" },
  { id: 4, name: "Data Cable", price: 480, category: "Chargers", image: "../Products/Chargers/Cabel_4.png" },
  { id: 5, name: "Data Cable", price: 720, category: "Chargers", image: "../Products/Chargers/Cabel_5.png" },
  { id: 6, name: "Data Cable", price: 560, category: "Chargers", image: "../Products/Chargers/Cabel_6.png" },
  { id: 7, name: "Data Cable", price: 600, category: "Chargers", image: "../Products/Chargers/Cabel_7.png" },
  { id: 8, name: "Data Cable", price: 250, category: "Chargers", image: "../Products/Chargers/Cabel_8.png" },
  { id: 9, name: "Data Cable", price: 420, category: "Chargers", image: "../Products/Chargers/Cabel_9.png" },
  { id: 10, name: "Data Cable", price: 290, category: "Chargers", image: "../Products/Chargers/Cabel_10.png" },

  //   Chargers
  { id: 11, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_1.png" },
  { id: 12, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_3.png" },
  { id: 13, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_3.png" },
  { id: 14, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_4.png" },
  { id: 15, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_5.png" },
  { id: 16, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_6.png" },
  { id: 17, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_7.png" },
  { id: 18, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Charger_8.png" },
  { id: 19, name: "Charger", price: 490, category: "Chargers", image: "../Products/Chargers/Charger_9.png" },
  { id: 20, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Charger_10.png" },
  { id: 21, name: "Charger", price: 750, category: "Chargers", image: "../Products/Chargers/Charger_11.png" },
  { id: 22, name: "Charger", price: 800, category: "Chargers", image: "../Products/Chargers/Charger_12.png" },
  { id: 23, name: "Car Charger", price: 800, category: "Chargers", image: "../Products/Chargers/Car__charger_1.png" },
  { id: 24, name: "Car Charger", price: 800, category: "Chargers", image: "../Products/Chargers/Car_charger_2.png" },

  
  // Watches

  { id: 25, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_1.png" },
  { id: 26, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_2.png" },
  { id: 27, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_3.png" },
  { id: 28, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_4.png" },
  { id: 29, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_5.png" },
  { id: 30, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_6.png" },
  { id: 31, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_7.png" },
  { id: 32, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_8.png" },
  { id: 33, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_9.png" },

  // EarBuds

  { id: 34, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_1.png" },
  { id: 35, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_2.png" },
  { id: 37, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_4.png" },
  { id: 38, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_5.png" },
  { id: 39, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_6.png" },
  { id: 40, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_7.png" },
  { id: 41, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_8.png" },
  { id: 42, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_9.png" },
  { id: 43, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_10.png" },
  { id: 44, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_11.png" },


  // Speakers
  { id: 45, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_1.png" },
  { id: 46, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_2.png" },
  { id: 47, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_3.png" },
  { id: 48, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_4.png" },
  { id: 49, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_5.png" },
  { id: 50, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_6.png" },
  { id: 51, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_7.png" },
  { id: 52, name: "Speaker", price: 1500, category: "Speakers", image: "../Products/Speakers/Speaker_8.png" },

  // Mobile Covers
  { id: 53, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_1.png" },
  { id: 54, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_2.png" },
  { id: 55, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_3.png" },
  { id: 56, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_4.png" },
  { id: 57, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_5.png" },
  { id: 58, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_6.png" },
  { id: 59, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_7.png" },
  { id: 60, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_8.png" },
  { id: 61, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_9.png" },
  { id: 62, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_10.png" },
  { id: 63, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_11.png" },
  { id: 64, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_12.png" },
  { id: 65, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_13.png" },

  // Accessories
  { id: 66, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Boya.png" },
  { id: 67, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/HandFree_1.png" },
  { id: 68, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/HeadPhone_1.png" },
  { id: 69, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/HeadPhone_2.png" },
  { id: 70, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Mic_1.png" },
  { id: 71, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Mobile_Stand_1.png" },
  { id: 72, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Pen_1.png" },
  { id: 73, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Pen_2.png" },
  { id: 74, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Pen_3.png" },
  { id: 75, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/PowerBank_1.png" },
  { id: 76, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Stand_1.png" },
  { id: 77, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Tripod_1.png" },
  { id: 78, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/WireBuds.png" },
  { id: 79, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Wireless_Charger_1.png" },
];


export default productsData;