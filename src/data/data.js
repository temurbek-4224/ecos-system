const DATA = [
  {
    id: 1,
    name: 'Mavzu: Umumiy Ekologik Muammolar',
    description: 'Ishdan maqsad: Topshiriq, umumiy ekalogik muammolarni ko\'rib chiqish uchun berilgan.',
    imageUrl: 'https://media.gettyimages.com/photos/were-all-responsible-for-creating-a-better-tomorrow-picture-id1009934102?s=2048x2048',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 2,
    name: 'Mavzu: Tabiiy resurslar ishlab chiqariladigan tashlanmalar hisobi.',
    description: 'Ishdan maqsad: Tabiiy resurslarni o\'rganish.',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/02/05/08/19/smoke-258786_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/2.pdf`
  },
  {
    id: 3,
    name: 'Mavzu: Global ekologik muammolar.',
    description: 'Ishdan maqsad: Talabalarni \'Global Ekologik Muammolar\' bilan tanishtirish.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/09/08/18/20/garbage-2729608_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/3.pdf`
  },
  {
    id: 4,
    name: "Mavzu: Elektromagnit maydonlarning tabiiy ekotizimlarga ta'siri.",
    description: "Ishdan maqsad: Ishlab chiqarish muhitida ishlatiladiganelektromagnit maydon chastotalarini hisoblash.",
    imageUrl: 'https://cdn.pixabay.com/photo/2017/02/26/16/51/cyclone-2100663_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/4.pdf`
  },
  {
    id: 5,
    name: 'Mavzu: Mintaqaviy ekologik muammolar',
    description: "Ishdan maqsad: O’zbekistondagi mintaqaviy ekologik muammolar",
    imageUrl: 'https://cdn.pixabay.com/photo/2018/03/25/09/15/world-3258865_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/5.pdf`
  },
  {
    id: 6,
    name: 'Mavzu: Atmosferaga chiqariladigan zararli chiqindilar.',
    description: "Ishdan maqsad: Atmosferaga zararli moddalarni otib chiqarilish darajasini baholash.",
    imageUrl: 'https://cdn.pixabay.com/photo/2017/06/17/11/39/power-plant-2411932_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/6.pdf`
  },
  {
    id: 7,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 8,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/21/19/09/away-5202207_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/8.pdf`
  },
  {
    id: 9,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 10,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/07/19/23/16/power-plant-4349830_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 11,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/11/24/10/18/earth-216834_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 12,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/03/13/04/refinery-3127588_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 13,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/09/11/12/01/biological-181237_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 14,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/10/22/21/54/industry-1761801_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
  {
    id: 15,
    name: 'Ekologik Muammolar',
    description: 'aksdgak akshdkjagd akhsdjadh kajsdkajh kajsdhkajdh kajhdakjshd',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/11/05/08/33/earth-1023859_960_720.jpg',
    pdf: `${process.env.PUBLIC_URL}/ekosFiles/1.pdf`
  },
]

export default DATA;