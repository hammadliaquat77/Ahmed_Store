
const productsData = [

// Cabels and Chargers
  { id: 1, name: "LITO Type C", price: 1200, category: "Chargers", image: "../Products/Chargers/Cabel_1.webp" },
  { id: 2, name: "IPHONE Data Cable", price: 2000, category: "Chargers", image: "../Products/Chargers/Cabel_2.webp" },
  { id: 3, name: "IPHONE Data Cable", price: 2200, category: "Chargers", image: "../Products/Chargers/Cabel_4.webp" },
  { id: 4, name: "Data Cable", price: 720, category: "Chargers", image: "../Products/Chargers/Cabel_5.webp" },
  { id: 5, name: "Data Cable", price: 560, category: "Chargers", image: "../Products/Chargers/Cabel_6.webp" },
  { id: 6, name: "Royal Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_7.webp" },
  { id: 7, name: "Metal Data Cable", price: 1200, category: "Chargers", image: "../Products/Chargers/Cabel_8.webp" },
  { id: 8, name: "Data Cable", price: 420, category: "Chargers", image: "../Products/Chargers/Cabel_9.webp" },
  { id: 9, name: "Ronin Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_10.webp" },
  { id: 10, name: "LITO Cabel (All Types)", price: 700, category: "Chargers", image: "../Products/Chargers/Cabel_11.webp" },
  { id: 11, name: "Royal Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_12.webp" },
  { id: 12, name: "RC Cabel", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_13.webp" },
  { id: 13, name: "RC Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_14.webp" },
  { id: 14, name: "Type C (Fast Data Cable)", price: 1000, category: "Chargers", image: "../Products/Chargers/Cable_15.webp" },
  { id: 15, name: "Type C", price: 800, category: "Chargers", image: "../Products/Chargers/Cable_16.webp" },
  { id: 16, name: "Cabel", price: 500, category: "Chargers", image: "../Products/Chargers/Cable_17.webp" },
  { id: 17, name: "Ronin Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cable_18.webp" },
  { id: 18, name: "IPHONE 15 Magnet Cabel", price: 2000, category: "Chargers", image: "../Products/Chargers/Cabel_19.webp" },
  { id: 19, name: "Samsung (Fast Charger 25w)", price: 1200, category: "Chargers", image: "../Products/Chargers/Charger_1.webp" },
  { id: 20, name: "Ronin Adopter", price: 1200, category: "Chargers", image: "../Products/Chargers/Charger_2.webp" },
  { id: 21, name: "Fast Adopter [6 month warrenty]", price: 2000, category: "Chargers", image: "../Products/Chargers/Charger_3.webp" },
  { id: 22, name: "Apple Adopter USB-C (20w)  [1 year warrenty]", price: 3500, category: "Chargers", image: "../Products/Chargers/Charger_4.webp" },
  { id: 23, name: "Type C to Type C", price: 1000, category: "Chargers", image: "../Products/Chargers/Cabel_20.webp" },


  
  // Watches

  { id: 1, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_1.webp" },
  { id: 2, name: "S8 ultra Smart Watch", price: 1800, category: "Watches", image: "../Products/Watches/Watch_2.webp" },
  { id: 3, name: "Ultra 4 Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_3.webp" },
  { id: 4, name: "10 Series Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_4.webp" },
  { id: 5, name: "T800 Ultra Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_5.webp" },
  { id: 6, name: "S1000 Pro Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_6.webp" },
  { id: 7, name: "GT1 Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_7.webp" },
  

  // EarBuds
  { id: 1, name: "ANC EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_1.webp" },
  { id: 2, name: "M10 EarBuds", price: 1000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_2.webp" },
  { id: 3, name: "EarBud Pro (white)", price: 2000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_3.webp" },
  { id: 4, name: "ANC Pro EarBuds", price: 5000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_5.webp" },
  { id: 5, name: "Universal EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_6.webp" },
  { id: 6, name: "EarBud Pro (black)", price: 2200, category: "Earbuds", image: "../Products/Earbuds/EarBuds_7.webp" },
  { id: 7, name: "Pro 2 EarBuds", price: 2000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_9.webp" },
  { id: 8, name: "STEREO EarBuds", price: 1500, category: "Earbuds", image: "../Products/Earbuds/EarBuds_10.webp" },
  { id: 9, name: "Super Bass EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_4.webp" },
  { id: 10, name: "ENC EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_11.webp" },
  { id: 11, name: "TWS EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_12.webp" },


  // Speakers
  { id: 1, name: "Speaker", price: 2000, category: "Speakers", image: "../Products/Speakers/Speaker_1.webp" },
  { id: 2, name: "Speaker", price: 2000, category: "Speakers", image: "../Products/Speakers/Speaker_2.webp" },


  // Mobile Covers
  { id: 1, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_1.webp" },
 

  // Accessories
  { id: 1, name: "Wireless HeadPhone", price: 3800, category: "Accessories", image: "../Products/Accessories/HeadPhone_1.webp" },
  { id: 2, name: "UHP9 Wireless HeadPhone", price: 4000, category: "Accessories", image: "../Products/Accessories/HeadPhone_2.webp" },
  { id: 3, name: "UHP4 Wireless HeadPhone", price: 4000, category: "Accessories", image: "../Products/Accessories/HeadPhone_3.webp" },
  { id: 4, name: "UHP9 Wireless HeadPhone", price: 5000, category: "Accessories", image: "../Products/Accessories/HeadPhone_4.webp" },
  { id: 5, name: "Samsung HandFree", price: 1500, category: "Accessories", image: "../Products/Accessories/HandFree_1.webp" },
  { id: 6, name: "Ronin HandFree", price: 1500, category: "Accessories", image: "../Products/Accessories/HandFree_2.webp" },
  { id: 7, name: "HandFree Type C", price: 1000, category: "Accessories", image: "../Products/Accessories/HandFree_3.webp" },
  { id: 8, name: "Xiaomi Power Bank_1 (10000mh)", price: 6500, category: "Accessories", image: "../Products/Accessories/PowerBank_1.webp" },
  { id: 9, name: "Power Bank", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_2.webp" },
  { id: 10, name: "Power Bank 66w", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_3.webp" },
  { id: 11, name: "Xiaomi Power Bank_2 (10000mh)", price: 7000, category: "Accessories", image: "../Products/Accessories/PowerBank_4.webp" },
  { id: 12, name: "Xiaomi Power Bank_3 (10000mh)", price: 5500, category: "Accessories", image: "../Products/Accessories/PowerBank_5.webp" },
  { id: 13, name: "Ska Power Bank", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_6.webp" },
  { id: 14, name: "Wireless Charger", price: 3000, category: "Accessories", image: "../Products/Accessories/PowerBank_7.webp" },
  { id: 15, name: "Mobile Stand", price: 800, category: "Accessories", image: "../Products/Accessories/Stand_1.webp" },
  { id: 16, name: "14 Pro Max Glass", price: 1200, category: "Accessories", image: "../Products/Accessories/Glass_1.webp" },
  { id: 17, name: "Glass", price: 1000, category: "Accessories", image: "../Products/Accessories/Glass_2.webp" },
  { id: 18, name: "3D Glass", price: 1000, category: "Accessories", image: "../Products/Accessories/Glass_3.webp" },
  { id: 19, name: "Privacy Glass", price: 1500, category: "Accessories", image: "../Products/Accessories/Glass_4.webp" },
  { id: 20, name: "Tripod Set", price: 3200, category: "Accessories", image: "../Products/Accessories/Tripod.webp" },

  // Mobiles
  { id: 1, name: "Samsung Galaxy A16 (128+6)", price: 44500, category: "mobile", image: "../Products/Mobile/Samsung_A16.webp" },
  { id: 2, name: "Samsung Galaxy A06 (64+4)", price: 22200, category: "mobile", image: "../Products/Mobile/Samsung_A06.webp" },
  { id: 3, name: "Samsung Galaxy A26 5G (256+8)", price: 75000, category: "mobile", image: "../Products/Mobile/Samsumg_A26.webp" },
  { id: 4, name: "Itel A90 (128+4)", price: 21000, category: "mobile", image: "../Products/Mobile/Itel_A90.webp" },
  { id: 5, name: "Itel S25 (256+8)", price: 41500, category: "mobile", image: "../Products/Mobile/Itel_S25.webp" },
  { id: 6, name: "Nokia 105", price: 3500, category: "mobile", image: "../Products/Mobile/Nokia_105.webp" },
  { id: 7, name: "Nokia 110", price: 5500, category: "mobile", image: "../Products/Mobile/Nokia_110.webp" },
  { id: 8, name: "Nokia 130", price: 6500, category: "mobile", image: "../Products/Mobile/Nokia_130_Music.webp" },
  { id: 9, name: "Oppo A3x (64+4)", price: 26700, category: "mobile", image: "../Products/Mobile/Oppo_A3x.webp" },
  { id: 10, name: "Oppo A5 (128+6)", price: 38000, category: "mobile", image: "../Products/Mobile/Oppo_A5.webp" },
  { id: 11, name: "Realme C61 (128+6)", price: 29800, category: "mobile", image: "../Products/Mobile/Realme_C61.webp" },
  { id: 12, name: "Realme C71 (128+6)", price: 34000, category: "mobile", image: "../Products/Mobile/Realme_C71.webp" },
  { id: 13, name: "Realme C75 (128+8)", price: 42000, category: "mobile", image: "../Products/Mobile/Realme_C75.webp" },
  { id: 14, name: "Vivo Y04 (64+4)", price: 26800, category: "mobile", image: "../Products/Mobile/Vivo_Y04.webp" },
  { id: 15, name: "Vivo Y29 (128+8)", price: 45000, category: "mobile", image: "../Products/Mobile/Vivo_Y29.webp" },
  { id: 16, name: "Xiaomi Readme 13 (128+8)", price: 33600, category: "mobile", image: "../Products/Mobile/Xiaomi_Readme_13.webp" },
  { id: 17, name: "Xiaomi Readme 14C (128+6)", price: 28000, category: "mobile", image: "../Products/Mobile/Xiaomi_Readme_14c.webp" },

];

export default productsData;