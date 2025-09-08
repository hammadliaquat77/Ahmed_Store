
const productsData = [

// Cabels and Chargers
  { id: 1, name: "Data Cable", price: 300, category: "Chargers", image: "../Products/Chargers/Cabel_1.webp" },
  { id: 2, name: "Data Cable", price: 400, category: "Chargers", image: "../Products/Chargers/Cabel_2.webp" },
  { id: 3, name: "Data Cable", price: 450, category: "Chargers", image: "../Products/Chargers/Cabel_3.webp" },
  { id: 4, name: "Data Cable", price: 480, category: "Chargers", image: "../Products/Chargers/Cabel_4.webp" },
  { id: 5, name: "Data Cable", price: 720, category: "Chargers", image: "../Products/Chargers/Cabel_5.webp" },
  { id: 6, name: "Data Cable", price: 560, category: "Chargers", image: "../Products/Chargers/Cabel_6.webp" },
  { id: 7, name: "Royal Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_7.webp" },
  { id: 8, name: "Data Cable", price: 250, category: "Chargers", image: "../Products/Chargers/Cabel_8.webp" },
  { id: 9, name: "Data Cable", price: 420, category: "Chargers", image: "../Products/Chargers/Cabel_9.webp" },
  { id: 10, name: "Ronin Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_10.webp" },
  { id: 11, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Cabel_11.webp" },
  { id: 12, name: "Royal Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_12.webp" },
  { id: 13, name: "RC Cabel", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_13.webp" },
  { id: 14, name: "RC Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cabel_14.webp" },
  { id: 15, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Cable_15.webp" },
  { id: 16, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Cable_16.webp" },
  { id: 17, name: "Charger", price: 290, category: "Chargers", image: "../Products/Chargers/Cable_17.webp" },
  { id: 18, name: "Ronin Data Cable", price: 800, category: "Chargers", image: "../Products/Chargers/Cable_18.webp" },
  { id: 19, name: "IPHONE 15 Magnet Cabel", price: 2000, category: "Chargers", image: "../Products/Chargers/Cabel_19.webp" },
  { id: 20, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Charger_1.webp" },
  { id: 21, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Charger_2.webp" },
  { id: 22, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Charger_3.webp" },
  { id: 23, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Charger_4.webp" },
  { id: 24, name: "Charger", price: 500, category: "Chargers", image: "../Products/Chargers/Cabel_20.webp" },


  
  // Watches

  { id: 1, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_1.webp" },
  { id: 2, name: "S8 ultra Smart Watch", price: 1800, category: "Watches", image: "../Products/Watches/Watch_2.webp" },
  { id: 3, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_3.webp" },
  { id: 4, name: "10 Series Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_4.webp" },
  { id: 5, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_5.webp" },
  { id: 6, name: "Smart Watch", price: 2000, category: "Watches", image: "../Products/Watches/Watch_6.webp" },
  { id: 7, name: "Smart Watch", price: 3000, category: "Watches", image: "../Products/Watches/Watch_7.webp" },
  

  // EarBuds
  { id: 1, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_1.webp" },
  { id: 2, name: "M10 EarBuds", price: 1000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_2.webp" },
  { id: 3, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_3.webp" },
  { id: 4, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_5.webp" },
  { id: 5, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_6.webp" },
  { id: 6, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_7.webp" },
  { id: 7, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_9.webp" },
  { id: 8, name: "STEREO EarBuds", price: 1200, category: "Earbuds", image: "../Products/Earbuds/EarBuds_10.webp" },
  { id: 9, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_4.webp" },
  { id: 10, name: "EarBuds", price: 3000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_11.webp" },
  { id: 11, name: "EarBuds", price: 2000, category: "Earbuds", image: "../Products/Earbuds/EarBuds_12.webp" },


  // Speakers
  { id: 1, name: "Speaker", price: 2000, category: "Speakers", image: "../Products/Speakers/Speaker_1.webp" },
  { id: 2, name: "Speaker", price: 2000, category: "Speakers", image: "../Products/Speakers/Speaker_2.webp" },


  // Mobile Covers
  { id: 1, name: "Cover", price: 500, category: "Cover", image: "../Products/Covers/Cover_1.webp" },
 

  // Accessories
  { id: 1, name: "Wireless HeadPhone", price: 3800, category: "Accessories", image: "../Products/Accessories/HeadPhone_1.webp" },
  { id: 2, name: "UHP9 Wireless HeadPhone", price: 3000, category: "Accessories", image: "../Products/Accessories/HeadPhone_2.webp" },
  { id: 3, name: "UHP4 Wireless HeadPhone", price: 3000, category: "Accessories", image: "../Products/Accessories/HeadPhone_3.webp" },
  { id: 4, name: "UHP9 Wireless HeadPhone", price: 3000, category: "Accessories", image: "../Products/Accessories/HeadPhone_4.webp" },
  { id: 5, name: "Samsung HandFree", price: 1500, category: "Accessories", image: "../Products/Accessories/HandFree_1.webp" },
  { id: 6, name: "Ronin HandFree", price: 1500, category: "Accessories", image: "../Products/Accessories/HandFree_2.webp" },
  { id: 7, name: "HandFree Type C", price: 1000, category: "Accessories", image: "../Products/Accessories/HandFree_3.webp" },
  { id: 8, name: "Power Bank", price: 2600, category: "Accessories", image: "../Products/Accessories/PowerBank_1.webp" },
  { id: 9, name: "Power Bank", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_2.webp" },
  { id: 10, name: "Power Bank 66w", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_3.webp" },
  { id: 11, name: "Power Bank", price: 2600, category: "Accessories", image: "../Products/Accessories/PowerBank_4.webp" },
  { id: 12, name: "Power Bank", price: 2600, category: "Accessories", image: "../Products/Accessories/PowerBank_5.webp" },
  { id: 13, name: "Ska Power Bank", price: 2800, category: "Accessories", image: "../Products/Accessories/PowerBank_6.webp" },
  { id: 14, name: "Wireless Charger", price: 3000, category: "Accessories", image: "../Products/Accessories/PowerBank_7.webp" },
  { id: 15, name: "Mobile Stand", price: 1000, category: "Accessories", image: "../Products/Accessories/Stand_1.webp" },
  { id: 16, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Glass_1.webp" },
  { id: 17, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Glass_2.webp" },
  { id: 18, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Glass_3.webp" },
  { id: 19, name: "Accessories", price: 500, category: "Accessories", image: "../Products/Accessories/Glass_4.webp" },
  { id: 20, name: "Tripod Set", price: 3200, category: "Accessories", image: "../Products/Accessories/Tripod.webp" },

  // Mobiles
  { id: 1, name: "Samsung Galaxy A16", price: 3800, category: "mobile", image: "../Products/Mobile/Samsung_A16.webp" },
  { id: 2, name: "Samsung Galaxy A06", price: 3800, category: "mobile", image: "../Products/Mobile/Samsung_A06.webp" },
  { id: 3, name: "Samsung Galaxy A26", price: 3800, category: "mobile", image: "../Products/Mobile/Samsumg_A26.webp" },
  { id: 4, name: "Itel A90", price: 3800, category: "mobile", image: "../Products/Mobile/Itel_A90.webp" },
  { id: 5, name: "Itel S25", price: 3800, category: "mobile", image: "../Products/Mobile/Itel_S25.webp" },
  { id: 6, name: "Nokia 105", price: 3800, category: "mobile", image: "../Products/Mobile/Nokia_105.webp" },
  { id: 7, name: "Nokia 110", price: 3800, category: "mobile", image: "../Products/Mobile/Nokia_110.webp" },
  { id: 8, name: "Nokia 130", price: 3800, category: "mobile", image: "../Products/Mobile/Nokia_130_Music.webp" },
  { id: 9, name: "Oppo A3x", price: 3800, category: "mobile", image: "../Products/Mobile/Oppo_A3x.webp" },
  { id: 10, name: "Oppo A5", price: 3800, category: "mobile", image: "../Products/Mobile/Oppo_A5.webp" },
  { id: 11, name: "Realme C61", price: 3800, category: "mobile", image: "../Products/Mobile/Realme_C61.webp" },
  { id: 12, name: "Realme C71", price: 3800, category: "mobile", image: "../Products/Mobile/Realme_C71.webp" },
  { id: 13, name: "Realme C75", price: 3800, category: "mobile", image: "../Products/Mobile/Realme_C75.webp" },
  { id: 14, name: "Vivo Y04", price: 3800, category: "mobile", image: "../Products/Mobile/Vivo_Y04.webp" },
  { id: 15, name: "Vivo Y29", price: 3800, category: "mobile", image: "../Products/Mobile/Vivo_Y29.webp" },
  { id: 16, name: "Xiaomi Readme 13", price: 3800, category: "mobile", image: "../Products/Mobile/Xiaomi_Readme_13.webp" },
  { id: 17, name: "Xiaomi Readme 14c", price: 3800, category: "mobile", image: "../Products/Mobile/Xiaomi_Readme_14c.webp" },

];

export default productsData;