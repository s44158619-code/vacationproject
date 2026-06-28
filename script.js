const CART_KEY = "ahimha-cart";
const MARKET_FAVORITES_KEY = "ahimha-market-favorites";
const ADMIN_AUTH_KEY = "ahimha-admin-auth";
const ADMIN_CREDENTIAL_HASH = "1dd87a003c3d682c5cf1914258701986b9e805c8b6da5574fd582e2aa896a746";
const currency = new Intl.NumberFormat("ko-KR");
const MARKET_PRODUCTS = [
  { id: "apple", name: "사과", aliases: "부사 홍로 과일", category: "fruit", unit: "kg", buyPrice: 4200, retailPrice: 6500, sellPrice: 7900, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "pear", name: "배", aliases: "신고배 과일", category: "fruit", unit: "kg", buyPrice: 5200, retailPrice: 7800, sellPrice: 9500, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "tangerine", name: "감귤", aliases: "귤 밀감 과일", category: "fruit", unit: "kg", buyPrice: 3300, retailPrice: 5200, sellPrice: 6900, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "strawberry", name: "딸기", aliases: "과일 베리", category: "fruit", unit: "kg", buyPrice: 9800, retailPrice: 14500, sellPrice: 16900, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "grape", name: "포도", aliases: "샤인머스캣 캠벨 과일", category: "fruit", unit: "kg", buyPrice: 7200, retailPrice: 11000, sellPrice: 13900, source: "시장 기준가 샘플", updated: "2026-06-28" },
  { id: "watermelon", name: "수박", aliases: "과일", category: "fruit", unit: "kg", buyPrice: 1700, retailPrice: 2600, sellPrice: 3500, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "onion", name: "양파", aliases: "채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 1200, retailPrice: 2100, sellPrice: 2900, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "garlic", name: "마늘", aliases: "깐마늘 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 7200, retailPrice: 9800, sellPrice: 12500, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "cabbage", name: "배추", aliases: "김치 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 900, retailPrice: 1500, sellPrice: 2200, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "radish", name: "무", aliases: "채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 850, retailPrice: 1400, sellPrice: 2000, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "potato", name: "감자", aliases: "채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 1900, retailPrice: 3100, sellPrice: 4200, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "sweet-potato", name: "고구마", aliases: "채소 공구", category: "vegetable", unit: "kg", buyPrice: 2600, retailPrice: 4300, sellPrice: 5900, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "tomato", name: "토마토", aliases: "채소 과채 식당 재료", category: "vegetable", unit: "kg", buyPrice: 3600, retailPrice: 5600, sellPrice: 7200, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "cucumber", name: "오이", aliases: "채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 2800, retailPrice: 4600, sellPrice: 6200, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "lettuce", name: "상추", aliases: "쌈채소 식당 재료", category: "restaurant", unit: "kg", buyPrice: 5200, retailPrice: 8200, sellPrice: 10500, source: "KAMIS/도매·소매 기준가 샘플", updated: "2026-06-28" },
  { id: "mushroom", name: "느타리버섯", aliases: "버섯 채소 식당 재료", category: "restaurant", unit: "kg", buyPrice: 3900, retailPrice: 6200, sellPrice: 7900, source: "시장 기준가 샘플", updated: "2026-06-28" },
  { id: "rice", name: "쌀", aliases: "곡물 밥 식당 재료", category: "grain", unit: "kg", buyPrice: 2800, retailPrice: 3800, sellPrice: 4500, source: "KAMIS/양곡 기준가 샘플", updated: "2026-06-28" },
  { id: "flour", name: "밀가루", aliases: "가공 식당 재료 베이커리", category: "grain", unit: "kg", buyPrice: 1500, retailPrice: 2300, sellPrice: 3200, source: "시장 기준가 샘플", updated: "2026-06-28" },
  { id: "sugar", name: "설탕", aliases: "가공 식당 재료", category: "grain", unit: "kg", buyPrice: 1700, retailPrice: 2500, sellPrice: 3300, source: "시장 기준가 샘플", updated: "2026-06-28" },
  { id: "egg", name: "계란", aliases: "달걀 축산 식당 재료", category: "meat", unit: "개", buyPrice: 230, retailPrice: 330, sellPrice: 450, source: "축산물 기준가 샘플", updated: "2026-06-28" },
  { id: "chicken", name: "닭고기", aliases: "닭가슴살 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 6200, retailPrice: 8900, sellPrice: 11500, source: "축산물 기준가 샘플", updated: "2026-06-28" },
  { id: "pork", name: "돼지고기", aliases: "삼겹살 목살 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 10500, retailPrice: 15500, sellPrice: 19900, source: "축산물 기준가 샘플", updated: "2026-06-28" },
  { id: "beef", name: "소고기", aliases: "우육 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 23500, retailPrice: 36000, sellPrice: 45000, source: "축산물 기준가 샘플", updated: "2026-06-28" },
  { id: "milk", name: "우유", aliases: "유제품 카페 식당 재료", category: "restaurant", unit: "L", buyPrice: 1900, retailPrice: 2800, sellPrice: 3600, source: "시장 기준가 샘플", updated: "2026-06-28" },
  { id: "butter", name: "버터", aliases: "유제품 베이커리 식당 재료", category: "restaurant", unit: "kg", buyPrice: 9500, retailPrice: 14000, sellPrice: 18000, source: "시장 기준가 샘플", updated: "2026-06-28" }
];

const EXTRA_MARKET_PRODUCTS = [
  { id: "banana", name: "바나나", aliases: "과일 카페 디저트", category: "fruit", unit: "kg", buyPrice: 2600, retailPrice: 3900, sellPrice: 5200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "kiwi", name: "키위", aliases: "골드키위 그린키위 과일", category: "fruit", unit: "kg", buyPrice: 6800, retailPrice: 9800, sellPrice: 12800, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "mango", name: "망고", aliases: "열대과일 디저트 카페", category: "fruit", unit: "kg", buyPrice: 7900, retailPrice: 12000, sellPrice: 15900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "peach", name: "복숭아", aliases: "과일 황도 백도", category: "fruit", unit: "kg", buyPrice: 6200, retailPrice: 9300, sellPrice: 11900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "plum", name: "자두", aliases: "과일", category: "fruit", unit: "kg", buyPrice: 4300, retailPrice: 6800, sellPrice: 8900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "persimmon", name: "감", aliases: "단감 홍시 과일", category: "fruit", unit: "kg", buyPrice: 4100, retailPrice: 6400, sellPrice: 8300, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "melon", name: "멜론", aliases: "과일 디저트", category: "fruit", unit: "kg", buyPrice: 4800, retailPrice: 7400, sellPrice: 9800, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "cherry", name: "체리", aliases: "과일 디저트", category: "fruit", unit: "kg", buyPrice: 14500, retailPrice: 21000, sellPrice: 26900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "blueberry", name: "블루베리", aliases: "베리 과일 카페 디저트", category: "fruit", unit: "kg", buyPrice: 13800, retailPrice: 19800, sellPrice: 24900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "avocado", name: "아보카도", aliases: "샐러드 과일 식당 재료", category: "restaurant", unit: "kg", buyPrice: 7200, retailPrice: 10800, sellPrice: 13900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "lemon", name: "레몬", aliases: "과일 카페 식당 재료", category: "restaurant", unit: "kg", buyPrice: 4300, retailPrice: 6800, sellPrice: 8900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "orange", name: "오렌지", aliases: "과일 카페 주스", category: "fruit", unit: "kg", buyPrice: 3900, retailPrice: 6200, sellPrice: 7900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "pineapple", name: "파인애플", aliases: "과일 디저트 카페", category: "fruit", unit: "kg", buyPrice: 3000, retailPrice: 4800, sellPrice: 6500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "grapefruit", name: "자몽", aliases: "과일 카페 음료", category: "fruit", unit: "kg", buyPrice: 4200, retailPrice: 6800, sellPrice: 8900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "carrot", name: "당근", aliases: "채소 식당 재료 샐러드", category: "vegetable", unit: "kg", buyPrice: 1600, retailPrice: 2600, sellPrice: 3600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "green-onion", name: "대파", aliases: "파 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 2100, retailPrice: 3500, sellPrice: 4700, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "spinach", name: "시금치", aliases: "나물 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 4200, retailPrice: 6500, sellPrice: 8500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "bean-sprout", name: "콩나물", aliases: "나물 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 1400, retailPrice: 2300, sellPrice: 3200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "broccoli", name: "브로콜리", aliases: "채소 샐러드 식당 재료", category: "vegetable", unit: "kg", buyPrice: 3600, retailPrice: 5600, sellPrice: 7300, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "paprika", name: "파프리카", aliases: "채소 샐러드 식당 재료", category: "vegetable", unit: "kg", buyPrice: 5200, retailPrice: 7800, sellPrice: 9900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "zucchini", name: "애호박", aliases: "호박 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 2100, retailPrice: 3400, sellPrice: 4500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "eggplant", name: "가지", aliases: "채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 2900, retailPrice: 4600, sellPrice: 6100, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "pumpkin", name: "단호박", aliases: "호박 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 2400, retailPrice: 3900, sellPrice: 5200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "cabbage-green", name: "양배추", aliases: "샐러드 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 1300, retailPrice: 2200, sellPrice: 3100, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "perilla-leaf", name: "깻잎", aliases: "쌈채소 식당 재료", category: "restaurant", unit: "kg", buyPrice: 9500, retailPrice: 14000, sellPrice: 17900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "chili-pepper", name: "고추", aliases: "풋고추 청양고추 채소 식당 재료", category: "vegetable", unit: "kg", buyPrice: 5200, retailPrice: 8100, sellPrice: 10500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "kale", name: "케일", aliases: "샐러드 채소 식당 재료", category: "restaurant", unit: "kg", buyPrice: 6200, retailPrice: 9300, sellPrice: 11900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "celery", name: "셀러리", aliases: "샐러드 채소 식당 재료", category: "restaurant", unit: "kg", buyPrice: 3800, retailPrice: 5900, sellPrice: 7600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "corn", name: "옥수수", aliases: "채소 식당 재료 간식", category: "vegetable", unit: "kg", buyPrice: 2300, retailPrice: 3600, sellPrice: 4900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "brown-rice", name: "현미", aliases: "쌀 곡물 식당 재료", category: "grain", unit: "kg", buyPrice: 3100, retailPrice: 4400, sellPrice: 5600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "barley", name: "보리", aliases: "곡물 식당 재료", category: "grain", unit: "kg", buyPrice: 2200, retailPrice: 3300, sellPrice: 4500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "black-rice", name: "흑미", aliases: "쌀 곡물 식당 재료", category: "grain", unit: "kg", buyPrice: 4700, retailPrice: 6500, sellPrice: 8300, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "glutinous-rice", name: "찹쌀", aliases: "쌀 곡물 식당 재료", category: "grain", unit: "kg", buyPrice: 3500, retailPrice: 5100, sellPrice: 6600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "oat", name: "오트밀", aliases: "귀리 곡물 카페 식당 재료", category: "grain", unit: "kg", buyPrice: 4200, retailPrice: 6500, sellPrice: 8500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "pasta", name: "파스타면", aliases: "면 가공 식당 재료", category: "grain", unit: "kg", buyPrice: 3200, retailPrice: 4800, sellPrice: 6200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "noodle", name: "소면", aliases: "면 국수 식당 재료", category: "grain", unit: "kg", buyPrice: 2600, retailPrice: 3900, sellPrice: 5200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "starch", name: "전분", aliases: "가루 식당 재료", category: "grain", unit: "kg", buyPrice: 2500, retailPrice: 3900, sellPrice: 5200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "cooking-oil", name: "식용유", aliases: "기름 식당 재료", category: "restaurant", unit: "L", buyPrice: 3300, retailPrice: 4800, sellPrice: 6200, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "olive-oil", name: "올리브유", aliases: "기름 샐러드 식당 재료", category: "restaurant", unit: "L", buyPrice: 7800, retailPrice: 11500, sellPrice: 14900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "soy-sauce", name: "간장", aliases: "소스 양념 식당 재료", category: "restaurant", unit: "L", buyPrice: 2200, retailPrice: 3400, sellPrice: 4600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "gochujang", name: "고추장", aliases: "양념 장류 식당 재료", category: "restaurant", unit: "kg", buyPrice: 3900, retailPrice: 5900, sellPrice: 7600, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "doenjang", name: "된장", aliases: "양념 장류 식당 재료", category: "restaurant", unit: "kg", buyPrice: 3600, retailPrice: 5400, sellPrice: 7100, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "salt", name: "소금", aliases: "양념 식당 재료", category: "restaurant", unit: "kg", buyPrice: 1200, retailPrice: 1900, sellPrice: 2800, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "vinegar", name: "식초", aliases: "양념 식당 재료", category: "restaurant", unit: "L", buyPrice: 1800, retailPrice: 2800, sellPrice: 3800, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "sesame-oil", name: "참기름", aliases: "기름 양념 식당 재료", category: "restaurant", unit: "L", buyPrice: 9800, retailPrice: 14500, sellPrice: 18900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "sesame-seed", name: "깨", aliases: "참깨 양념 식당 재료", category: "restaurant", unit: "kg", buyPrice: 8200, retailPrice: 12200, sellPrice: 15900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "duck", name: "오리고기", aliases: "축산 식당 재료", category: "meat", unit: "kg", buyPrice: 9800, retailPrice: 14500, sellPrice: 18900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "lamb", name: "양고기", aliases: "축산 식당 재료", category: "meat", unit: "kg", buyPrice: 18000, retailPrice: 26000, sellPrice: 32900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "bacon", name: "베이컨", aliases: "가공육 식당 재료", category: "meat", unit: "kg", buyPrice: 9800, retailPrice: 13800, sellPrice: 17900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "ham", name: "햄", aliases: "가공육 식당 재료", category: "meat", unit: "kg", buyPrice: 6800, retailPrice: 9800, sellPrice: 12900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "sausage", name: "소시지", aliases: "가공육 식당 재료", category: "meat", unit: "kg", buyPrice: 7200, retailPrice: 10500, sellPrice: 13900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "pork-belly", name: "삼겹살", aliases: "돼지고기 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 13500, retailPrice: 19500, sellPrice: 24900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "pork-shoulder", name: "목살", aliases: "돼지고기 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 11500, retailPrice: 16800, sellPrice: 21900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "beef-brisket", name: "차돌박이", aliases: "소고기 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 22000, retailPrice: 33000, sellPrice: 42900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "beef-sirloin", name: "등심", aliases: "소고기 축산 식당 재료", category: "meat", unit: "kg", buyPrice: 32000, retailPrice: 48000, sellPrice: 62000, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "mackerel", name: "고등어", aliases: "수산물 생선 식당 재료", category: "meat", unit: "kg", buyPrice: 5600, retailPrice: 8400, sellPrice: 10900, source: "수산물 기준가 샘플", updated: "2026-06-28" },
  { id: "squid", name: "오징어", aliases: "수산물 식당 재료", category: "meat", unit: "kg", buyPrice: 7800, retailPrice: 11500, sellPrice: 14900, source: "수산물 기준가 샘플", updated: "2026-06-28" },
  { id: "shrimp", name: "새우", aliases: "수산물 식당 재료", category: "meat", unit: "kg", buyPrice: 12500, retailPrice: 18500, sellPrice: 23900, source: "수산물 기준가 샘플", updated: "2026-06-28" },
  { id: "salmon", name: "연어", aliases: "수산물 식당 재료 샐러드", category: "restaurant", unit: "kg", buyPrice: 22500, retailPrice: 33000, sellPrice: 42900, source: "수산물 기준가 샘플", updated: "2026-06-28" },
  { id: "tofu", name: "두부", aliases: "콩 식당 재료", category: "restaurant", unit: "kg", buyPrice: 2300, retailPrice: 3500, sellPrice: 4700, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "cheese", name: "치즈", aliases: "유제품 식당 재료 카페", category: "restaurant", unit: "kg", buyPrice: 10500, retailPrice: 15500, sellPrice: 19900, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "yogurt", name: "요거트", aliases: "유제품 카페 디저트", category: "restaurant", unit: "kg", buyPrice: 4200, retailPrice: 6500, sellPrice: 8500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "cream", name: "생크림", aliases: "유제품 카페 베이커리", category: "restaurant", unit: "L", buyPrice: 6200, retailPrice: 8900, sellPrice: 11500, source: "확장 기준가 샘플", updated: "2026-06-28" },
  { id: "coffee-bean", name: "원두", aliases: "커피 카페 식당 재료", category: "restaurant", unit: "kg", buyPrice: 18000, retailPrice: 26000, sellPrice: 34000, source: "카페 재료 기준가 샘플", updated: "2026-06-28" },
  { id: "matcha", name: "말차가루", aliases: "카페 디저트 베이커리", category: "restaurant", unit: "kg", buyPrice: 24000, retailPrice: 36000, sellPrice: 46000, source: "카페 재료 기준가 샘플", updated: "2026-06-28" },
  { id: "cocoa", name: "코코아가루", aliases: "카페 디저트 베이커리", category: "restaurant", unit: "kg", buyPrice: 9800, retailPrice: 14500, sellPrice: 18900, source: "카페 재료 기준가 샘플", updated: "2026-06-28" },
  { id: "honey", name: "꿀", aliases: "카페 디저트 식당 재료", category: "restaurant", unit: "kg", buyPrice: 9500, retailPrice: 14500, sellPrice: 18900, source: "확장 기준가 샘플", updated: "2026-06-28" }
];

const RESTAURANT_SUPPLY_PRODUCTS = [
  ["takeout-bowl", "포장 용기", "배달 포장 도시락 용기", "packaging", "100개", 7800, 11000, 14500],
  ["lid", "뚜껑", "포장 용기 뚜껑 배달", "packaging", "100개", 4200, 6500, 8500],
  ["side-dish-cup", "반찬 컵", "반찬 소분 컵 도시락", "packaging", "100개", 5200, 7900, 9900],
  ["delivery-bag", "배달 봉투", "배달 비닐 봉투 포장", "packaging", "100장", 6500, 9800, 12800],
  ["daily-side-dish", "일일 반찬", "반찬 백반 도시락", "restaurant", "kg", 6200, 9400, 12200],
  ["soup-base", "국물 베이스", "육수 국밥 찌개 베이스", "restaurant", "kg", 8800, 13200, 17200],
  ["kimchi-pack", "김치 소분팩", "김치 반찬 소분 포장", "restaurant", "10팩", 8000, 11500, 14900],
  ["soup-container", "국물 용기", "탕 국밥 찌개 용기 배달", "packaging", "100개", 12500, 17600, 22900],
  ["heat-seal-lid", "실링 뚜껑", "실링 포장 용기 뚜껑", "packaging", "100개", 6800, 9600, 12500],
  ["spoon", "스푼", "일회용 숟가락 배달", "packaging", "100개", 3500, 5200, 6800],
  ["broth", "육수", "국밥 찌개 탕 육수", "restaurant", "L", 2700, 4300, 5600],
  ["spice-mix", "양념 믹스", "양념 분말 소스 믹스", "restaurant", "kg", 9200, 13800, 17900],
  ["noodle-container", "면 용기", "짜장 짬뽕 면 용기", "packaging", "100개", 13500, 18900, 24600],
  ["sauce-cup", "소스 컵", "소스 드레싱 컵", "packaging", "100개", 4300, 6700, 8700],
  ["wood-chopsticks", "나무젓가락", "젓가락 배달 일회용", "packaging", "100개", 2900, 4500, 5900],
  ["black-bean-paste", "춘장", "중식 짜장 춘장", "restaurant", "kg", 4800, 7200, 9400],
  ["chili-oil", "고추기름", "중식 고추기름 향미유", "restaurant", "L", 7600, 11200, 14600],
  ["sweet-sour-sauce", "탕수육 소스", "중식 탕수육 소스", "restaurant", "kg", 5800, 8700, 11300],
  ["rice-bowl", "덮밥 용기", "덮밥 도시락 밥 용기", "packaging", "100개", 11800, 16800, 21800],
  ["panko", "빵가루", "돈카츠 튀김 빵가루", "restaurant", "kg", 4200, 6400, 8300],
  ["curry-base", "카레 베이스", "카레 덮밥 소스", "restaurant", "kg", 6900, 10300, 13400],
  ["donburi-sauce", "덮밥 소스", "일식 돈부리 덮밥 소스", "restaurant", "L", 7800, 11600, 15100],
  ["pasta-container", "파스타 용기", "파스타 샐러드 포장 용기", "packaging", "100개", 13200, 18800, 24400],
  ["fork", "포크", "일회용 포크 배달", "packaging", "100개", 3400, 5100, 6600],
  ["tomato-sauce", "토마토 소스", "파스타 피자 토마토 소스", "restaurant", "kg", 6200, 9200, 12000],
  ["herb-mix", "허브 믹스", "양식 허브 시즈닝", "restaurant", "kg", 18800, 27800, 36100],
  ["steak-sauce", "스테이크 소스", "양식 스테이크 소스", "restaurant", "L", 8900, 13200, 17200],
  ["fish-cake", "어묵", "분식 김밥 떡볶이 어묵", "restaurant", "kg", 5200, 7800, 10100],
  ["kimbap-tray", "김밥 트레이", "김밥 포장 트레이", "packaging", "100개", 9800, 14500, 18800],
  ["tteokbokki-container", "떡볶이 용기", "분식 떡볶이 포장 용기", "packaging", "100개", 11200, 16200, 21100],
  ["pickled-radish", "단무지", "김밥 분식 단무지", "restaurant", "kg", 3600, 5400, 7000],
  ["rice-cake", "떡", "떡볶이 떡 분식", "restaurant", "kg", 4200, 6300, 8200],
  ["frying-mix", "튀김가루", "분식 치킨 튀김가루", "restaurant", "kg", 3100, 4700, 6100],
  ["chicken-box", "치킨 박스", "치킨 포장 박스", "packaging", "100개", 17500, 24500, 31900],
  ["pickle-cup", "무 컵", "치킨무 피클 컵", "packaging", "100개", 4600, 6900, 9000],
  ["chicken-powder", "치킨 파우더", "치킨 튀김 파우더", "restaurant", "kg", 6800, 9900, 12900],
  ["seasoning-powder", "시즈닝 파우더", "치킨 감자 시즈닝", "restaurant", "kg", 14500, 21600, 28100],
  ["radish-pickle", "치킨무", "치킨무 절임 배달", "restaurant", "kg", 3900, 5800, 7500],
  ["pizza-box", "피자 박스", "피자 포장 박스", "packaging", "100개", 22500, 31800, 41300],
  ["hot-sauce", "핫소스", "피자 핫소스", "restaurant", "100개", 7200, 10800, 14000],
  ["pizza-sauce", "피자 소스", "피자 토마토 소스", "restaurant", "kg", 6200, 9300, 12100],
  ["yeast", "이스트", "피자 베이커리 이스트", "restaurant", "kg", 8200, 12200, 15900],
  ["olive-slice", "올리브 슬라이스", "피자 샐러드 올리브", "restaurant", "kg", 11800, 17600, 22900],
  ["meat-tray", "정육 트레이", "고기 구이 정육 포장", "packaging", "100개", 9800, 14400, 18700],
  ["wrap-container", "쌈채소 용기", "쌈채소 반찬 포장 용기", "packaging", "100개", 8700, 12800, 16600],
  ["ssamjang", "쌈장", "고깃집 구이 쌈장", "restaurant", "kg", 4300, 6500, 8500],
  ["charcoal", "숯", "고깃집 구이 숯", "supplies", "kg", 3600, 5500, 7200],
  ["grill-foil", "구이용 포일", "고기 구이 호일 포일", "supplies", "롤", 4200, 6400, 8300],
  ["ice-cup", "아이스 컵", "카페 아이스컵 테이크아웃", "packaging", "100개", 7800, 11500, 15000],
  ["hot-cup", "핫컵", "카페 종이컵 테이크아웃", "packaging", "100개", 6200, 9300, 12100],
  ["straw", "빨대", "카페 빨대 일회용", "packaging", "100개", 2200, 3500, 4600],
  ["syrup", "시럽", "카페 음료 시럽", "restaurant", "L", 5900, 8800, 11400],
  ["ice", "얼음", "카페 음료 얼음", "restaurant", "kg", 1200, 1800, 2400],
  ["sleeve", "컵홀더", "카페 컵홀더 슬리브", "packaging", "100개", 4100, 6200, 8100],
  ["cake-box", "케이크 박스", "디저트 케이크 포장 박스", "packaging", "100개", 18500, 26600, 34600],
  ["dessert-cup", "디저트 컵", "디저트 푸딩 컵", "packaging", "100개", 9800, 14500, 18900],
  ["paper-bag", "종이 쇼핑백", "카페 베이커리 종이백", "packaging", "100장", 10500, 15400, 20000],
  ["sticker", "스티커", "라벨 봉인 스티커", "supplies", "100장", 3800, 5700, 7400],
  ["baking-powder", "베이킹파우더", "베이커리 디저트 베이킹파우더", "restaurant", "kg", 6400, 9600, 12500],
  ["vanilla", "바닐라", "디저트 바닐라 향료", "restaurant", "L", 11800, 17600, 22900],
  ["chocolate-chip", "초코칩", "디저트 베이커리 초코칩", "restaurant", "kg", 9200, 13700, 17800],
  ["salad-bowl", "샐러드 볼", "샐러드 포장 볼", "packaging", "100개", 12800, 18400, 23900],
  ["dressing-cup", "드레싱 컵", "샐러드 드레싱 소스 컵", "packaging", "100개", 4300, 6500, 8500],
  ["dressing", "드레싱", "샐러드 드레싱 소스", "restaurant", "L", 6200, 9200, 12000],
  ["granola", "그래놀라", "샐러드 요거트 그래놀라", "restaurant", "kg", 8900, 13400, 17400],
  ["nuts", "견과류", "샐러드 디저트 견과류", "restaurant", "kg", 11500, 17100, 22200],
  ["wasabi", "와사비", "회 일식 와사비", "restaurant", "kg", 9800, 14600, 19000],
  ["sashimi-tray", "회 트레이", "회 해산물 포장 트레이", "packaging", "100개", 16800, 23800, 30900],
  ["ice-pack", "아이스팩", "해산물 보냉 아이스팩", "packaging", "100개", 11800, 17400, 22600],
  ["ginger-pickle", "초생강", "회 일식 초생강", "restaurant", "kg", 5200, 7800, 10100],
  ["seaweed", "김", "일식 주먹밥 김", "restaurant", "100장", 9800, 14600, 19000],
  ["late-night-container", "야식 용기", "야식 안주 포장 용기", "packaging", "100개", 12600, 18200, 23700],
  ["spicy-sauce", "매운 소스", "야식 주점 매운 소스", "restaurant", "kg", 6400, 9600, 12500],
  ["stock-base", "스톡 베이스", "주점 탕 육수 스톡", "restaurant", "kg", 8600, 12900, 16800],
  ["foil-container", "알루미늄 용기", "찜 구이 야식 알루미늄 용기", "packaging", "100개", 14800, 21400, 27800],
  ["lunchbox-container", "도시락 용기", "도시락 반찬 포장 용기", "packaging", "100개", 13500, 19600, 25500],
  ["label-sticker", "라벨 스티커", "도시락 반찬 라벨 스티커", "supplies", "100장", 3900, 5800, 7500],
  ["napkin", "냅킨", "매장 배달 냅킨", "packaging", "100매", 1800, 2900, 3800],
  ["bulk-order-sheet", "단체 주문표", "도시락 단체주문 주문표", "supplies", "권", 2900, 4500, 5900],
  ["paper-tray", "종이 트레이", "푸드트럭 행사 종이 트레이", "packaging", "100개", 7600, 11200, 14600],
  ["cup", "컵", "행사 음료 일회용 컵", "packaging", "100개", 5200, 7800, 10100],
  ["plastic-glove", "비닐 장갑", "위생 장갑 행사 조리", "supplies", "100매", 2400, 3700, 4800],
  ["banner", "배너", "행사 푸드트럭 홍보 배너", "supplies", "개", 22000, 33000, 42900],
  ["menu-board", "메뉴 보드", "푸드트럭 행사 메뉴판", "supplies", "개", 15000, 22500, 29300],
  ["event-stock", "행사 재고", "행사 예비 재고 소모품", "supplies", "세트", 18000, 27000, 35100]
].map(([id, name, aliases, category, unit, buyPrice, retailPrice, sellPrice]) => ({
  id,
  name,
  aliases,
  category,
  unit,
  buyPrice,
  retailPrice,
  sellPrice,
  source: category === "packaging" ? "식당 포장재 기준가 샘플" : "식당 소모품 기준가 샘플",
  updated: "2026-06-28"
}));

const GENERATED_MARKET_PRODUCTS = globalThis.AHIMHA_GENERATED_PRODUCTS || [];
const CURATED_MARKET_PRODUCTS = [...MARKET_PRODUCTS, ...EXTRA_MARKET_PRODUCTS, ...RESTAURANT_SUPPLY_PRODUCTS];
const MARKET_CATALOG = [...CURATED_MARKET_PRODUCTS, ...GENERATED_MARKET_PRODUCTS];
const MARKET_PRODUCT_BY_ID = new Map(MARKET_CATALOG.map((product) => [product.id, product]));

const RESTAURANT_CATEGORIES = [
  { id: "all", name: "전체" },
  { id: "korean", name: "한식" },
  { id: "chinese", name: "중식" },
  { id: "japanese", name: "일식" },
  { id: "western", name: "양식" },
  { id: "snack", name: "분식" },
  { id: "chicken-pizza", name: "치킨/피자" },
  { id: "bbq", name: "고기/구이" },
  { id: "cafe", name: "카페/디저트" },
  { id: "healthy", name: "샐러드/다이어트" },
  { id: "seafood", name: "해산물/주점" },
  { id: "other", name: "기타" }
];

const RESTAURANT_PROFILES = [
  {
    id: "korean-baekban",
    name: "한식 백반/집밥",
    category: "korean",
    desc: "밥, 국, 반찬 회전이 많아 채소와 양념 원가 관리가 중요합니다.",
    tags: ["백반", "집밥", "도시락", "반찬"],
    needs: {
      essential: ["rice", "onion", "green-onion", "garlic", "soy-sauce", "salt"],
      frequent: ["cabbage", "radish", "spinach", "bean-sprout", "tofu", "egg"],
      packaging: ["takeout-bowl", "lid", "side-dish-cup", "delivery-bag"],
      other: ["daily-side-dish", "soup-base", "kimchi-pack"]
    }
  },
  {
    id: "korean-stew",
    name: "찌개/국밥",
    category: "korean",
    desc: "육수, 고기, 두부, 채소 사용량을 g 단위로 잡아야 마진이 보입니다.",
    tags: ["찌개", "국밥", "탕", "해장국"],
    needs: {
      essential: ["rice", "pork", "tofu", "green-onion", "garlic", "gochujang"],
      frequent: ["cabbage", "radish", "mushroom", "egg", "soy-sauce", "sesame-oil"],
      packaging: ["soup-container", "heat-seal-lid", "spoon", "delivery-bag"],
      other: ["broth", "spice-mix", "kimchi-pack"]
    }
  },
  {
    id: "chinese-restaurant",
    name: "중식",
    category: "chinese",
    desc: "면, 기름, 양파, 고기, 소스 사용량이 많아 재료별 단가 차이가 큽니다.",
    tags: ["중식", "짜장", "짬뽕", "탕수육"],
    needs: {
      essential: ["noodle", "onion", "pork", "cabbage-green", "soy-sauce", "cooking-oil"],
      frequent: ["squid", "shrimp", "green-onion", "garlic", "starch", "egg"],
      packaging: ["noodle-container", "sauce-cup", "wood-chopsticks", "delivery-bag"],
      other: ["black-bean-paste", "chili-oil", "sweet-sour-sauce"]
    }
  },
  {
    id: "japanese-don",
    name: "일식 덮밥/돈카츠",
    category: "japanese",
    desc: "밥과 메인 토핑 비중이 높아 1인분 고기/소스 원가를 분리해야 합니다.",
    tags: ["일식", "덮밥", "돈카츠", "카레"],
    needs: {
      essential: ["rice", "pork", "egg", "onion", "soy-sauce", "flour"],
      frequent: ["cabbage-green", "carrot", "green-onion", "starch", "cooking-oil", "sesame-seed"],
      packaging: ["rice-bowl", "sauce-cup", "wood-chopsticks", "delivery-bag"],
      other: ["panko", "curry-base", "donburi-sauce"]
    }
  },
  {
    id: "western-pasta",
    name: "양식 파스타/스테이크",
    category: "western",
    desc: "파스타면, 소스, 육류, 치즈 원가가 메뉴별로 크게 달라집니다.",
    tags: ["양식", "파스타", "스테이크", "리조또"],
    needs: {
      essential: ["pasta", "cream", "cheese", "butter", "garlic", "olive-oil"],
      frequent: ["beef", "chicken", "mushroom", "tomato", "onion", "broccoli"],
      packaging: ["pasta-container", "sauce-cup", "fork", "delivery-bag"],
      other: ["tomato-sauce", "herb-mix", "steak-sauce"]
    }
  },
  {
    id: "snack-bunsik",
    name: "분식/김밥",
    category: "snack",
    desc: "저단가 메뉴가 많아 단무지, 밥, 계란, 소스까지 누락 없이 잡아야 합니다.",
    tags: ["분식", "김밥", "떡볶이", "튀김"],
    needs: {
      essential: ["rice", "egg", "carrot", "cucumber", "gochujang", "cooking-oil"],
      frequent: ["fish-cake", "noodle", "sugar", "soy-sauce", "sesame-oil", "sesame-seed"],
      packaging: ["kimbap-tray", "tteokbokki-container", "wood-chopsticks", "delivery-bag"],
      other: ["pickled-radish", "rice-cake", "frying-mix"]
    }
  },
  {
    id: "chicken-store",
    name: "치킨",
    category: "chicken-pizza",
    desc: "닭고기, 튀김유, 파우더, 소스, 박스 원가가 핵심입니다.",
    tags: ["치킨", "닭강정", "후라이드", "양념치킨"],
    needs: {
      essential: ["chicken", "cooking-oil", "flour", "starch", "sugar", "garlic"],
      frequent: ["gochujang", "soy-sauce", "vinegar", "sesame-seed", "potato", "cabbage-green"],
      packaging: ["chicken-box", "sauce-cup", "pickle-cup", "delivery-bag"],
      other: ["chicken-powder", "seasoning-powder", "radish-pickle"]
    }
  },
  {
    id: "pizza-store",
    name: "피자",
    category: "chicken-pizza",
    desc: "도우, 치즈, 토핑, 박스 단가가 메뉴 가격을 좌우합니다.",
    tags: ["피자", "화덕피자", "피자집"],
    needs: {
      essential: ["flour", "cheese", "tomato", "onion", "ham", "sausage"],
      frequent: ["mushroom", "paprika", "corn", "olive-oil", "sugar", "salt"],
      packaging: ["pizza-box", "pickle-cup", "hot-sauce", "delivery-bag"],
      other: ["pizza-sauce", "yeast", "olive-slice"]
    }
  },
  {
    id: "bbq-grill",
    name: "고깃집/구이",
    category: "bbq",
    desc: "고기 원가가 크고 쌈채소, 양념, 밑반찬 비용도 함께 봐야 합니다.",
    tags: ["고깃집", "삼겹살", "구이", "갈비"],
    needs: {
      essential: ["pork-belly", "pork-shoulder", "lettuce", "perilla-leaf", "garlic", "salt"],
      frequent: ["beef", "green-onion", "mushroom", "onion", "gochujang", "sesame-oil"],
      packaging: ["meat-tray", "wrap-container", "side-dish-cup", "delivery-bag"],
      other: ["ssamjang", "charcoal", "grill-foil"]
    }
  },
  {
    id: "cafe-coffee",
    name: "카페",
    category: "cafe",
    desc: "원두, 우유, 시럽, 컵/빨대 같은 소모품까지 합산해야 실제 마진이 나옵니다.",
    tags: ["카페", "커피", "음료", "라떼"],
    needs: {
      essential: ["coffee-bean", "milk", "sugar", "cream", "cocoa", "matcha"],
      frequent: ["banana", "strawberry", "blueberry", "honey", "yogurt", "lemon"],
      packaging: ["ice-cup", "hot-cup", "lid", "straw"],
      other: ["syrup", "ice", "sleeve"]
    }
  },
  {
    id: "bakery-dessert",
    name: "베이커리/디저트",
    category: "cafe",
    desc: "밀가루, 버터, 계란, 크림, 과일 토핑의 배합 원가가 중요합니다.",
    tags: ["베이커리", "디저트", "케이크", "쿠키"],
    needs: {
      essential: ["flour", "butter", "egg", "sugar", "cream", "milk"],
      frequent: ["strawberry", "blueberry", "banana", "cocoa", "matcha", "honey"],
      packaging: ["cake-box", "dessert-cup", "paper-bag", "sticker"],
      other: ["baking-powder", "vanilla", "chocolate-chip"]
    }
  },
  {
    id: "salad-healthy",
    name: "샐러드/다이어트",
    category: "healthy",
    desc: "채소, 단백질, 드레싱, 토핑을 g 단위로 계산해야 합니다.",
    tags: ["샐러드", "다이어트", "포케", "건강식"],
    needs: {
      essential: ["lettuce", "chicken", "tomato", "cucumber", "olive-oil", "egg"],
      frequent: ["avocado", "salmon", "corn", "kale", "carrot", "yogurt"],
      packaging: ["salad-bowl", "dressing-cup", "fork", "delivery-bag"],
      other: ["dressing", "granola", "nuts"]
    }
  },
  {
    id: "seafood-store",
    name: "해산물/회",
    category: "seafood",
    desc: "수산물 원가 변동이 커서 당일 시세 확인과 포장비 관리가 중요합니다.",
    tags: ["해산물", "회", "초밥", "수산"],
    needs: {
      essential: ["salmon", "shrimp", "squid", "mackerel", "rice", "vinegar"],
      frequent: ["radish", "cucumber", "soy-sauce", "wasabi", "perilla-leaf", "lemon"],
      packaging: ["sashimi-tray", "ice-pack", "sauce-cup", "delivery-bag"],
      other: ["wasabi", "ginger-pickle", "seaweed"]
    }
  },
  {
    id: "pub-late-night",
    name: "주점/야식",
    category: "seafood",
    desc: "안주류는 고기, 해산물, 튀김류가 섞여 메뉴별 원가표가 필요합니다.",
    tags: ["주점", "야식", "안주", "포차"],
    needs: {
      essential: ["pork", "chicken", "squid", "garlic", "green-onion", "cooking-oil"],
      frequent: ["sausage", "tofu", "mushroom", "onion", "gochujang", "soy-sauce"],
      packaging: ["late-night-container", "sauce-cup", "wood-chopsticks", "delivery-bag"],
      other: ["spicy-sauce", "stock-base", "foil-container"]
    }
  },
  {
    id: "lunchbox-store",
    name: "도시락/반찬",
    category: "other",
    desc: "밥, 메인 반찬, 소분 포장 용기가 모두 원가에 들어갑니다.",
    tags: ["도시락", "반찬", "단체주문", "케이터링"],
    needs: {
      essential: ["rice", "chicken", "pork", "egg", "bean-sprout", "spinach"],
      frequent: ["carrot", "cabbage", "tofu", "soy-sauce", "sesame-oil", "sesame-seed"],
      packaging: ["lunchbox-container", "side-dish-cup", "spoon", "delivery-bag"],
      other: ["label-sticker", "napkin", "bulk-order-sheet"]
    }
  },
  {
    id: "food-truck",
    name: "푸드트럭/행사",
    category: "other",
    desc: "메뉴 수는 적지만 포장재와 현장 소모품 비중이 큽니다.",
    tags: ["푸드트럭", "행사", "축제", "팝업"],
    needs: {
      essential: ["sausage", "pork", "chicken", "flour", "cooking-oil", "onion"],
      frequent: ["cheese", "corn", "potato", "sugar", "salt", "butter"],
      packaging: ["paper-tray", "cup", "napkin", "plastic-glove"],
      other: ["banner", "menu-board", "event-stock"]
    }
  }
];

const NEED_LABELS = {
  "takeout-bowl": "포장 용기",
  lid: "뚜껑",
  "side-dish-cup": "반찬 컵",
  "delivery-bag": "배달 봉투",
  "daily-side-dish": "일일 반찬",
  "soup-base": "국물 베이스",
  "kimchi-pack": "김치 소분팩",
  "soup-container": "국물 용기",
  "heat-seal-lid": "실링 뚜껑",
  spoon: "스푼",
  broth: "육수",
  "spice-mix": "양념 믹스",
  "noodle-container": "면 용기",
  "sauce-cup": "소스 컵",
  "wood-chopsticks": "나무젓가락",
  "black-bean-paste": "춘장",
  "chili-oil": "고추기름",
  "sweet-sour-sauce": "탕수육 소스",
  "rice-bowl": "덮밥 용기",
  panko: "빵가루",
  "curry-base": "카레 베이스",
  "donburi-sauce": "덮밥 소스",
  "pasta-container": "파스타 용기",
  fork: "포크",
  "tomato-sauce": "토마토 소스",
  "herb-mix": "허브 믹스",
  "steak-sauce": "스테이크 소스",
  "kimbap-tray": "김밥 트레이",
  "tteokbokki-container": "떡볶이 용기",
  "pickled-radish": "단무지",
  "rice-cake": "떡",
  "frying-mix": "튀김가루",
  "chicken-box": "치킨 박스",
  "pickle-cup": "무 컵",
  "chicken-powder": "치킨 파우더",
  "seasoning-powder": "시즈닝 파우더",
  "radish-pickle": "치킨무",
  "pizza-box": "피자 박스",
  "hot-sauce": "핫소스",
  "pizza-sauce": "피자 소스",
  yeast: "이스트",
  "olive-slice": "올리브 슬라이스",
  "meat-tray": "정육 트레이",
  "wrap-film": "랩 필름",
  tongs: "집게",
  "table-cover": "테이블 커버",
  ssamjang: "쌈장",
  charcoal: "숯",
  "wet-tissue": "물티슈",
  cup: "컵",
  straw: "빨대",
  "cup-holder": "컵 홀더",
  syrup: "시럽",
  "ice-cup": "아이스 컵",
  "dessert-box": "디저트 박스",
  "cake-box": "케이크 박스",
  "dessert-fork": "디저트 포크",
  "cake-pick": "케이크 픽",
  "cake-base": "케이크 시트",
  "jam-filling": "잼 필링",
  "salad-bowl": "샐러드 볼",
  "dressing-cup": "드레싱 컵",
  "cold-bag": "보냉 봉투",
  dressing: "드레싱",
  granola: "그래놀라",
  "portion-label": "소분 라벨",
  "sashimi-tray": "회 트레이",
  "ice-pack": "아이스팩",
  "soy-cup": "간장 컵",
  "seafood-sauce": "해산물 소스",
  wasabi: "와사비",
  "freshness-sheet": "신선도 시트",
  "late-night-container": "야식 용기",
  "beer-cup": "맥주 컵",
  "opener-goods": "오프너/소모품",
  "snack-mix": "안주 믹스",
  "tableware-set": "일회용 식기 세트",
  "lunchbox-container": "도시락 용기",
  "label-sticker": "라벨 스티커",
  napkin: "냅킨",
  "bulk-order-sheet": "단체 주문표",
  "paper-tray": "종이 트레이",
  "plastic-glove": "비닐 장갑",
  banner: "배너",
  "menu-board": "메뉴 보드",
  "event-stock": "행사 재고"
};

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

function formatWon(value) {
  return `${currency.format(value)}원`;
}

function getAssetUrl(filename) {
  const root = document.body?.dataset.root || ".";
  return `${root}/assets/${filename}`;
}

function getProductImage(product) {
  const imageByCategory = {
    fruit: "product-fruit.webp",
    vegetable: "product-vegetable.webp",
    meat: "product-meat.webp",
    grain: "product-grain.webp",
    restaurant: "product-restaurant.webp",
    packaging: "product-packaging.webp",
    supplies: "product-supplies.webp"
  };

  return getAssetUrl(imageByCategory[product?.category] || "product-restaurant.webp");
}

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function updateCartBadges() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = count;
  });
}

function addToCart(product) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  renderCart();
  showToast(`${product.name}을 장바구니에 담았습니다.`);
}

function readMarketFavorites() {
  try {
    return JSON.parse(localStorage.getItem(MARKET_FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveMarketFavorites(favorites) {
  localStorage.setItem(MARKET_FAVORITES_KEY, JSON.stringify(favorites));
  renderMarketFavorites();
  updateFavoriteButtons();
}

function isMarketFavorite(id) {
  return readMarketFavorites().some((item) => item.id === id);
}

function addMarketFavorite(product) {
  if (!product) {
    return;
  }

  const favorites = readMarketFavorites();

  if (favorites.some((item) => item.id === product.id)) {
    showToast("이미 찜한 품목입니다.");
    updateFavoriteButtons();
    return;
  }

  favorites.unshift({
    id: product.id,
    name: product.name,
    unit: product.unit,
    buyPrice: product.buyPrice,
    category: product.category,
    source: product.source
  });

  saveMarketFavorites(favorites.slice(0, 80));
  showToast("찜한 품목에 담았습니다.");
}

function removeMarketFavorite(id) {
  const favorites = readMarketFavorites().filter((item) => item.id !== id);
  saveMarketFavorites(favorites);
  showToast("찜한 품목에서 뺐습니다.");
}

function toggleMarketFavorite(product) {
  if (!product) {
    return;
  }

  if (isMarketFavorite(product.id)) {
    removeMarketFavorite(product.id);
    return;
  }

  addMarketFavorite(product);
}

function updateFavoriteButtons() {
  const favoriteIds = new Set(readMarketFavorites().map((item) => item.id));

  document.querySelectorAll("[data-favorite-id]").forEach((button) => {
    const active = favoriteIds.has(button.dataset.favoriteId);
    button.classList.toggle("is-active", active);
    button.textContent = active ? "찜해제" : "찜하기";
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderMarketFavorites() {
  const panel = document.getElementById("marketFavorites");

  if (!panel) {
    return;
  }

  const favorites = readMarketFavorites();

  if (!favorites.length) {
    panel.innerHTML = `
      <div>
        <p class="eyebrow dark">찜한 품목</p>
        <h2>아직 담긴 품목이 없습니다.</h2>
        <p>업종별 필요 품목에서 자주 비교할 재료와 포장재를 찜해두세요.</p>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="favorite-head">
      <div>
        <p class="eyebrow dark">찜한 품목</p>
        <h2>${favorites.length}개 품목</h2>
      </div>
      <button class="link-button" type="button" data-favorite-clear>전체 비우기</button>
    </div>
    <div class="favorite-list">
      ${favorites.map((favorite) => {
        const product = findMarketProduct(favorite.id) || favorite;
        return `
          <article class="favorite-item">
            <img src="${getProductImage(product)}" alt="${product.name} 대표 이미지" loading="lazy">
            <strong>${product.name}</strong>
            <span>${formatWon(product.buyPrice)} / ${product.unit}</span>
            <div>
              <button type="button" data-favorite-search="${product.id}">가격보기</button>
              <button type="button" data-favorite-remove="${product.id}">삭제</button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;

  panel.querySelector("[data-favorite-clear]")?.addEventListener("click", () => {
    saveMarketFavorites([]);
    showToast("찜한 품목을 모두 비웠습니다.");
  });

  panel.querySelectorAll("[data-favorite-search]").forEach((button) => {
    button.addEventListener("click", () => {
      searchMarketProduct(findMarketProduct(button.dataset.favoriteSearch));
    });
  });

  panel.querySelectorAll("[data-favorite-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeMarketFavorite(button.dataset.favoriteRemove);
    });
  });
}

function changeQuantity(id, amount) {
  const cart = readCart()
    .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
    .filter((item) => item.quantity > 0);

  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  const cart = readCart().filter((item) => item.id !== id);
  saveCart(cart);
  renderCart();
  showToast("장바구니에서 삭제했습니다.");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  if (!cartItems) {
    return;
  }

  const cart = readCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("cartTotal").textContent = formatWon(total);
  document.getElementById("cartItemCount").textContent = `${itemCount}개`;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h2>장바구니가 비어 있습니다.</h2>
        <p>서비스 페이지에서 필요한 항목을 담아보세요.</p>
        <a class="primary-button" href="./services.html">서비스 보러가기</a>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
        <strong>${formatWon(item.price * item.quantity)}</strong>
      </div>
      <div class="cart-controls">
        <div class="quantity-control" aria-label="${item.name} 수량 조절">
          <button type="button" data-cart-action="decrease" data-cart-id="${item.id}" aria-label="수량 줄이기">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="increase" data-cart-id="${item.id}" aria-label="수량 늘리기">+</button>
        </div>
        <button class="remove-button" type="button" data-cart-action="remove" data-cart-id="${item.id}">삭제</button>
      </div>
    </article>
  `).join("");
}

function renderCheckout() {
  const checkoutItems = document.getElementById("checkoutItems");

  if (!checkoutItems) {
    return;
  }

  const cart = readCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElement = document.getElementById("checkoutTotal");

  if (totalElement) {
    totalElement.textContent = formatWon(total);
  }

  if (cart.length === 0) {
    checkoutItems.innerHTML = `
      <div class="empty-checkout">
        <strong>담긴 서비스가 없습니다.</strong>
        <p>서비스를 먼저 장바구니에 담아주세요.</p>
        <a class="link-button center-link" href="./services.html">서비스 보러가기</a>
      </div>
    `;
    return;
  }

  checkoutItems.innerHTML = cart.map((item) => `
    <article>
      <span>${item.name}</span>
      <strong>${formatWon(item.price * item.quantity)}</strong>
      <small>${item.quantity}개 · ${item.desc}</small>
    </article>
  `).join("");
}

function setupSlider() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".dots button"));
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");

  if (!slides.length || !prevButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
  }

  prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide)));
  });

  window.setInterval(() => showSlide(currentSlide + 1), 5200);
}

function setupNoticeSearch() {
  const searchInput = document.querySelector("[data-notice-search]");
  const rows = Array.from(document.querySelectorAll("[data-notice-row]"));

  if (!searchInput || !rows.length) {
    return;
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();

    rows.forEach((row) => {
      row.hidden = keyword.length > 0 && !row.textContent.toLowerCase().includes(keyword);
    });
  });
}

function setupFooterLinks() {
  const footerLinks = document.querySelector(".footer-links");

  if (!footerLinks || footerLinks.querySelector("[data-policy-link]")) {
    return;
  }

  const root = document.body.dataset.root === ".." ? "." : "./pages";
  const links = [
    { href: `${root}/terms.html`, label: "이용약관" },
    { href: `${root}/privacy.html`, label: "개인정보처리방침" }
  ];

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    anchor.dataset.policyLink = "true";
    footerLinks.appendChild(anchor);
  });
}

function setupToolsNavLink() {
  const nav = document.querySelector(".main-nav");

  if (!nav) {
    return;
  }

  const root = document.body.dataset.root === ".." ? "." : "./pages";
  const guideLink = Array.from(nav.querySelectorAll("a")).find((link) => link.textContent.includes("이용가이드"));
  const serviceLink = Array.from(nav.querySelectorAll("a")).find((link) => link.textContent.includes("서비스"));

  if (!Array.from(nav.querySelectorAll("a")).some((link) => link.textContent.includes("가격검색"))) {
    const marketLink = document.createElement("a");
    marketLink.href = `${root}/market.html`;
    marketLink.textContent = "가격검색";
    marketLink.dataset.toolsLink = "true";

    if (location.pathname.endsWith("/market.html")) {
      marketLink.classList.add("is-active");
    }

    if (serviceLink?.nextSibling) {
      nav.insertBefore(marketLink, serviceLink.nextSibling);
    } else {
      nav.appendChild(marketLink);
    }
  }

  if (!Array.from(nav.querySelectorAll("a")).some((link) => link.textContent.includes("무료도구"))) {
    const toolsLink = document.createElement("a");
    toolsLink.href = `${root}/tools.html`;
    toolsLink.textContent = "무료도구";
    toolsLink.dataset.toolsLink = "true";

    if (location.pathname.endsWith("/tools.html")) {
      toolsLink.classList.add("is-active");
    }

    if (guideLink) {
      nav.insertBefore(toolsLink, guideLink);
    } else {
      nav.appendChild(toolsLink);
    }
  }
}

function setupMarginTool() {
  const ids = ["toolPrice", "toolCost", "toolShipping", "toolPacking", "toolFee", "toolEtc"];
  const fields = ids.map((id) => document.getElementById(id));

  if (fields.some((field) => !field)) {
    return;
  }

  function read(id) {
    const value = Number(document.getElementById(id).value);
    return Number.isFinite(value) ? value : 0;
  }

  function update() {
    const price = read("toolPrice");
    const totalCost = ids.slice(1).reduce((sum, id) => sum + read(id), 0);
    const profit = price - totalCost;
    const rate = price > 0 ? (profit / price) * 100 : 0;

    document.getElementById("toolProfit").textContent = formatWon(profit);
    document.getElementById("toolRate").textContent = `${rate.toFixed(1)}%`;
    document.getElementById("toolTotalCost").textContent = formatWon(totalCost);
  }

  fields.forEach((field) => field.addEventListener("input", update));
  update();
}

function setupPrepProgress() {
  const wrapper = document.querySelector("[data-progress-checks]");
  const progress = document.getElementById("prepProgress");

  if (!wrapper || !progress) {
    return;
  }

  const checks = Array.from(wrapper.querySelectorAll("input[type='checkbox']"));

  function update() {
    const done = checks.filter((check) => check.checked).length;
    const rate = checks.length > 0 ? Math.round((done / checks.length) * 100) : 0;
    progress.textContent = `${rate}%`;
  }

  checks.forEach((check) => check.addEventListener("change", update));
  update();
}

function calculateMargin(product, targetMargin = 30) {
  const requiredSellPrice = product.buyPrice / (1 - targetMargin / 100);
  const sellPrice = Math.max(product.sellPrice, Math.ceil(requiredSellPrice / 100) * 100);
  const profit = sellPrice - product.buyPrice;
  const rate = sellPrice > 0 ? (profit / sellPrice) * 100 : 0;

  return { sellPrice, profit, rate };
}

function getMarketplacePrices(product) {
  if (product.marketPrices) {
    return product.marketPrices;
  }

  const roundHundred = (value) => Math.ceil(value / 100) * 100;

  return [
    { market: "쿠팡", price: roundHundred(product.sellPrice * 1.08), note: "검색가 샘플" },
    { market: "지마켓", price: roundHundred(product.sellPrice * 1.03), note: "검색가 샘플" },
    { market: "네이버", price: roundHundred(product.sellPrice), note: "검색가 샘플" }
  ];
}

function getMarketplaceSearchUrl(market, keyword) {
  const query = encodeURIComponent(keyword);
  const urls = {
    "쿠팡": `https://www.coupang.com/np/search?q=${query}`,
    "지마켓": `https://browse.gmarket.co.kr/search?keyword=${query}`,
    "네이버": `https://search.shopping.naver.com/search/all?query=${query}`
  };

  return urls[market] || `https://search.naver.com/search.naver?query=${query}`;
}

function findMarketProduct(id) {
  return MARKET_PRODUCT_BY_ID.get(id) || null;
}

function getNeedLabel(id) {
  return findMarketProduct(id)?.name || NEED_LABELS[id] || id.replaceAll("-", " ");
}

function getNeedPrice(id) {
  const product = findMarketProduct(id);
  return product ? `${formatWon(product.buyPrice)} / ${product.unit}` : "매입처별 직접 입력";
}

function searchMarketProduct(product) {
  const searchInput = document.getElementById("marketSearch");
  const categoryInput = document.getElementById("marketCategory");
  const advancedPanel = document.getElementById("marketAdvanced");

  if (!product || !searchInput || !categoryInput) {
    return;
  }

  if (advancedPanel) {
    advancedPanel.open = true;
  }

  searchInput.value = product.name;
  categoryInput.value = "all";
  searchInput.dispatchEvent(new Event("input", { bubbles: true }));
  searchInput.focus();
  searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
}

function setupRestaurantDatabase() {
  const searchInput = document.getElementById("restaurantSearch");
  const tabs = document.getElementById("restaurantTabs");
  const profiles = document.getElementById("restaurantProfiles");
  const needs = document.getElementById("restaurantNeeds");

  if (!searchInput || !tabs || !profiles || !needs) {
    return;
  }

  const needGroups = [
    { key: "essential", title: "필수 재료", desc: "메뉴 운영에 반드시 들어가는 기본 품목" },
    { key: "frequent", title: "자주 쓰는 재료", desc: "매출이 늘수록 원가 차이를 만드는 반복 구매 품목" },
    { key: "packaging", title: "포장/소모품", desc: "배달, 포장, 행사 운영에서 빠지기 쉬운 부대 비용" },
    { key: "other", title: "기타", desc: "업장별 방식에 따라 직접 단가를 넣어야 하는 항목" }
  ];

  let activeCategory = "all";
  let selectedId = RESTAURANT_PROFILES[0]?.id;

  function categoryName(id) {
    return RESTAURANT_CATEGORIES.find((category) => category.id === id)?.name || "기타";
  }

  function getFilteredProfiles() {
    const keyword = searchInput.value.trim().toLowerCase();

    return RESTAURANT_PROFILES.filter((profile) => {
      const categoryMatch = activeCategory === "all" || profile.category === activeCategory;
      const haystack = `${profile.name} ${profile.desc} ${profile.tags.join(" ")}`.toLowerCase();
      return categoryMatch && haystack.includes(keyword);
    });
  }

  function renderTabs() {
    tabs.innerHTML = RESTAURANT_CATEGORIES.map((category) => `
      <button class="${category.id === activeCategory ? "is-active" : ""}" type="button" data-restaurant-category="${category.id}">
        ${category.name}
      </button>
    `).join("");

    tabs.querySelectorAll("[data-restaurant-category]").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.restaurantCategory;
        selectedId = null;
        render();
      });
    });
  }

  function renderProfiles(filtered) {
    if (!filtered.length) {
      profiles.innerHTML = `
        <div class="empty-cart">
          <h2>맞는 업종이 없습니다.</h2>
          <p>검색어를 줄이거나 전체 업종에서 다시 찾아보세요.</p>
        </div>
      `;
      needs.innerHTML = `
        <p class="eyebrow dark">업종별 필요 품목</p>
        <h2>결과가 없습니다.</h2>
        <p>새 업종은 기타 분류에 추가해 확장할 수 있습니다.</p>
      `;
      return;
    }

    if (!filtered.some((profile) => profile.id === selectedId)) {
      selectedId = filtered[0].id;
    }

    profiles.innerHTML = filtered.map((profile) => `
      <button class="restaurant-card ${profile.id === selectedId ? "is-active" : ""}" type="button" data-restaurant-id="${profile.id}">
        <span>${categoryName(profile.category)}</span>
        <strong>${profile.name}</strong>
        <small>${profile.desc}</small>
        <div class="restaurant-tags">${profile.tags.slice(0, 4).map((tag) => `<em>${tag}</em>`).join("")}</div>
      </button>
    `).join("");

    profiles.querySelectorAll("[data-restaurant-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedId = button.dataset.restaurantId;
        render();
      });
    });
  }

  function renderNeedGroup(profile, group) {
    const items = profile.needs[group.key] || [];

    return `
      <section class="need-group">
        <div>
          <h3>${group.title}</h3>
          <p>${group.desc}</p>
        </div>
        <div class="need-list">
          ${items.map((id) => {
            const product = findMarketProduct(id);
            return `
              <article class="need-item ${product ? "has-price" : "is-manual"}">
                ${product ? `<img class="need-thumb" src="${getProductImage(product)}" alt="${product.name} 대표 이미지" loading="lazy">` : ""}
                <span>${product ? "가격검색 가능" : "직접 입력"}</span>
                <strong>${getNeedLabel(id)}</strong>
                <small>${getNeedPrice(id)}</small>
                ${product ? `
                  <div class="need-actions">
                    <button type="button" data-favorite-id="${product.id}">찜하기</button>
                    <button type="button" data-need-search="${product.id}">가격보기</button>
                  </div>
                ` : `<button type="button" disabled>준비중</button>`}
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderNeeds() {
    const profile = RESTAURANT_PROFILES.find((item) => item.id === selectedId);

    if (!profile) {
      return;
    }

    needs.innerHTML = `
      <p class="eyebrow dark">${categoryName(profile.category)} 필요 품목</p>
      <h2>${profile.name}</h2>
      <p>${profile.desc}</p>
      <div class="restaurant-need-summary">
        <span>필수 ${profile.needs.essential.length}</span>
        <span>자주 ${profile.needs.frequent.length}</span>
        <span>포장 ${profile.needs.packaging.length}</span>
        <span>기타 ${profile.needs.other.length}</span>
      </div>
      ${needGroups.map((group) => renderNeedGroup(profile, group)).join("")}
    `;

    needs.querySelectorAll("[data-need-search]").forEach((button) => {
      button.addEventListener("click", () => {
        searchMarketProduct(findMarketProduct(button.dataset.needSearch));
      });
    });

    needs.querySelectorAll("[data-favorite-id]").forEach((button) => {
      button.addEventListener("click", () => {
        toggleMarketFavorite(findMarketProduct(button.dataset.favoriteId));
      });
    });

    updateFavoriteButtons();
  }

  function render() {
    renderTabs();
    const filtered = getFilteredProfiles();
    renderProfiles(filtered);
    renderNeeds();
  }

  searchInput.addEventListener("input", render);
  render();
}

function setupMarketSearch() {
  const searchInput = document.getElementById("marketSearch");
  const categoryInput = document.getElementById("marketCategory");
  const targetInput = document.getElementById("targetMargin");
  const results = document.getElementById("marketResults");
  const detail = document.getElementById("marketDetail");
  const countBadge = document.getElementById("marketCount");

  if (!searchInput || !categoryInput || !targetInput || !results || !detail) {
    return;
  }

  if (countBadge) {
    countBadge.textContent = `현재 ${currency.format(MARKET_CATALOG.length)}개 품목 검색 가능`;
  }

  function matches(product, keyword, category) {
    const aliases = product.aliases || "";
    const haystack = `${product.name} ${aliases} ${product.source || ""}`.toLowerCase();
    const categoryMatch = category === "all" || product.category === category || (category === "restaurant" && aliases.includes("식당"));
    return categoryMatch && haystack.includes(keyword);
  }

  function renderDetail(product) {
    const targetMargin = Number(targetInput.value) || 0;
    const { sellPrice, profit, rate } = calculateMargin(product, targetMargin);
    const gramPrice = product.unit === "kg" ? product.buyPrice / 1000 : product.buyPrice;
    const retailGap = product.retailPrice - product.buyPrice;
    const marketplacePrices = getMarketplacePrices(product);
    const marketplaceRows = marketplacePrices.map((item) => `
      <article>
        <span>${item.market}</span>
        <strong>${formatWon(item.price)}</strong>
        <small>${item.note}</small>
        <a href="${getMarketplaceSearchUrl(item.market, product.name)}" target="_blank" rel="noopener">검색 열기</a>
      </article>
    `).join("");

    detail.innerHTML = `
      <img class="market-detail-image" src="${getProductImage(product)}" alt="${product.name} 대표 이미지">
      <p class="eyebrow dark">선택 상품</p>
      <h2>${product.name}</h2>
      <p>${product.source} · 업데이트 ${product.updated}</p>
      <div class="market-stat-grid">
        <article><span>예상 매입가</span><strong>${formatWon(product.buyPrice)} / ${product.unit}</strong></article>
        <article><span>소매 기준가</span><strong>${formatWon(product.retailPrice)} / ${product.unit}</strong></article>
        <article><span>추천 판매가</span><strong>${formatWon(sellPrice)} / ${product.unit}</strong></article>
        <article><span>예상 마진</span><strong>${formatWon(profit)} (${rate.toFixed(1)}%)</strong></article>
      </div>
      <div class="market-note">
        <strong>단위 계산</strong>
        <span>${product.unit === "kg" ? `1g 기준 약 ${formatWon(gramPrice)}` : `1개 기준 약 ${formatWon(gramPrice)}`} · 도매/소매 차이 ${formatWon(retailGap)}</span>
      </div>
      <div class="marketplace-panel">
        <div>
          <strong>마켓별 가격 비교</strong>
          <span>실시간 수집값이 아니라 기준가 샘플입니다. 버튼을 누르면 각 마켓 검색으로 이동합니다.</span>
        </div>
        <div class="marketplace-grid">${marketplaceRows}</div>
      </div>
      <div class="market-detail-actions">
        <button class="favorite-button" type="button" data-favorite-id="${product.id}">찜하기</button>
        <button class="add-cart-button" type="button" data-cart-id="market-${product.id}" data-cart-name="${product.name} 마진 분석 요청" data-cart-price="30000" data-cart-desc="${product.name} 기준 가격 비교와 판매가 설계" data-cart-image="${getProductImage(product)}">분석 요청 담기</button>
      </div>
    `;

    detail.querySelector(".add-cart-button").addEventListener("click", (event) => {
      const button = event.currentTarget;
      addToCart({
        id: button.dataset.cartId,
        name: button.dataset.cartName,
        price: Number(button.dataset.cartPrice),
        desc: button.dataset.cartDesc,
        image: new URL(button.dataset.cartImage, window.location.href).href
      });
    });

    detail.querySelector("[data-favorite-id]")?.addEventListener("click", (event) => {
      toggleMarketFavorite(findMarketProduct(event.currentTarget.dataset.favoriteId));
    });

    updateFavoriteButtons();
  }

  function render() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryInput.value;
    const targetMargin = Number(targetInput.value) || 0;
    const filtered = MARKET_CATALOG.filter((product) => matches(product, keyword, category));
    const visibleProducts = filtered.slice(0, keyword ? 96 : 60);

    if (!filtered.length) {
      results.innerHTML = `
        <div class="empty-cart">
          <h2>검색 결과가 없습니다.</h2>
          <p>상품명을 조금 다르게 입력하거나 전체 분류로 다시 검색해보세요.</p>
        </div>
      `;
      return;
    }

    const resultSummary = `
      <div class="market-result-summary">
        <strong>${currency.format(filtered.length)}개 결과</strong>
        <span>브라우저 속도를 위해 상위 ${currency.format(visibleProducts.length)}개만 먼저 보여줍니다.</span>
      </div>
    `;

    results.innerHTML = resultSummary + visibleProducts.map((product) => {
      const { sellPrice, profit, rate } = calculateMargin(product, targetMargin);
      const marketplacePreview = getMarketplacePrices(product).slice(0, 3).map((item) => `
        <em>${item.market} ${formatWon(item.price)}</em>
      `).join("");

      return `
        <article class="market-card">
          <button class="market-card-main" type="button" data-market-id="${product.id}">
            <img class="market-card-image" src="${getProductImage(product)}" alt="${product.name} 대표 이미지" loading="lazy">
            <span>${product.name}</span>
            <strong>${formatWon(product.buyPrice)} / ${product.unit}</strong>
            <small>추천 ${formatWon(sellPrice)} · 마진 ${formatWon(profit)} (${rate.toFixed(1)}%)</small>
            <div class="marketplace-preview">${marketplacePreview}</div>
          </button>
          <button class="favorite-button" type="button" data-favorite-id="${product.id}">찜하기</button>
        </article>
      `;
    }).join("");

    results.querySelectorAll("[data-market-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = findMarketProduct(button.dataset.marketId);
        if (product) {
          renderDetail(product);
        }
      });
    });

    results.querySelectorAll("[data-favorite-id]").forEach((button) => {
      button.addEventListener("click", () => {
        toggleMarketFavorite(findMarketProduct(button.dataset.favoriteId));
      });
    });

    if (filtered[0]) {
      renderDetail(filtered[0]);
    }

    updateFavoriteButtons();
  }

  [searchInput, categoryInput, targetInput].forEach((input) => input.addEventListener("input", render));
  categoryInput.addEventListener("change", render);
  render();
}

function setupRecipeCalculator() {
  const list = document.getElementById("ingredientList");
  const addButton = document.getElementById("addIngredient");
  const sampleButton = document.getElementById("loadSampleRecipe");
  const menuPrice = document.getElementById("menuPrice");
  const menuPacking = document.getElementById("menuPacking");
  const menuFee = document.getElementById("menuFee");

  if (!list || !addButton || !sampleButton || !menuPrice || !menuPacking || !menuFee) {
    return;
  }

  let rows = [
    { productId: "lettuce", grams: 60 },
    { productId: "tomato", grams: 80 },
    { productId: "chicken", grams: 120 }
  ];

  function rowCost(row) {
    const product = findMarketProduct(row.productId);
    if (!product) {
      return 0;
    }
    return product.unit === "kg" ? product.buyPrice * (row.grams / 1000) : product.buyPrice * row.grams;
  }

  function update() {
    const ingredientCost = rows.reduce((sum, row) => sum + rowCost(row), 0);
    const totalCost = ingredientCost + (Number(menuPacking.value) || 0) + (Number(menuFee.value) || 0);
    const price = Number(menuPrice.value) || 0;
    const profit = price - totalCost;
    const rate = price > 0 ? (profit / price) * 100 : 0;

    document.getElementById("ingredientCost").textContent = formatWon(ingredientCost);
    document.getElementById("menuProfit").textContent = formatWon(profit);
    document.getElementById("menuMarginRate").textContent = `${rate.toFixed(1)}%`;
  }

  function render() {
    list.innerHTML = rows.map((row, index) => {
      const recipeProducts = CURATED_MARKET_PRODUCTS.filter((product) => !["packaging", "supplies"].includes(product.category));
      const productOptions = recipeProducts.map((product) => `
        <option value="${product.id}" ${product.id === row.productId ? "selected" : ""}>${product.name} (${formatWon(product.buyPrice)}/${product.unit})</option>
      `).join("");

      return `
        <article class="ingredient-row">
          <label>재료
            <select data-ingredient-field="productId" data-index="${index}">${productOptions}</select>
          </label>
          <label>사용량(g 또는 개)
            <input type="number" min="0" value="${row.grams}" data-ingredient-field="grams" data-index="${index}">
          </label>
          <strong>${formatWon(rowCost(row))}</strong>
          <button class="remove-button" type="button" data-remove-ingredient="${index}">삭제</button>
        </article>
      `;
    }).join("");

    list.querySelectorAll("[data-ingredient-field]").forEach((input) => {
      input.addEventListener("input", () => {
        const index = Number(input.dataset.index);
        const field = input.dataset.ingredientField;
        rows[index][field] = field === "grams" ? Number(input.value) || 0 : input.value;
        render();
      });
    });

    list.querySelectorAll("[data-remove-ingredient]").forEach((button) => {
      button.addEventListener("click", () => {
        rows.splice(Number(button.dataset.removeIngredient), 1);
        render();
      });
    });

    update();
  }

  addButton.addEventListener("click", () => {
    rows.push({ productId: "onion", grams: 50 });
    render();
  });

  sampleButton.addEventListener("click", () => {
    rows = [
      { productId: "lettuce", grams: 60 },
      { productId: "tomato", grams: 80 },
      { productId: "cucumber", grams: 50 },
      { productId: "chicken", grams: 120 },
      { productId: "egg", grams: 1 }
    ];
    render();
  });

  [menuPrice, menuPacking, menuFee].forEach((input) => input.addEventListener("input", update));
  render();
}

function setupAdminDashboard() {
  const countElement = document.getElementById("adminCartCount");
  const totalElement = document.getElementById("adminCartTotal");
  const previewElement = document.getElementById("adminCartPreview");
  const updatedAtElement = document.getElementById("adminUpdatedAt");

  if (!countElement && !totalElement && !previewElement && !updatedAtElement) {
    return;
  }

  const cart = readCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (countElement) {
    countElement.textContent = count;
  }

  if (totalElement) {
    totalElement.textContent = formatWon(total);
  }

  if (previewElement) {
    previewElement.innerHTML = cart.length === 0
      ? "<p>담긴 서비스가 없습니다.</p>"
      : cart.map((item) => `
        <article>
          <strong>${item.name}</strong>
          <span>${item.quantity}개 · ${formatWon(item.price * item.quantity)}</span>
        </article>
      `).join("");
  }

  if (updatedAtElement) {
    updatedAtElement.textContent = `마지막 확인: ${new Date().toLocaleString("ko-KR")}`;
  }
}

function setupAdminGate() {
  const loginGate = document.getElementById("adminLoginGate");
  const adminContent = document.getElementById("adminContent");
  const form = document.getElementById("adminLoginForm");
  const logoutButton = document.getElementById("adminLogoutButton");
  const message = document.getElementById("adminLoginMessage");

  if (!loginGate || !adminContent || !form) {
    return;
  }

  function unlock() {
    loginGate.hidden = true;
    adminContent.hidden = false;
    logoutButton.hidden = false;
    setupAdminDashboard();
  }

  if (sessionStorage.getItem(ADMIN_AUTH_KEY) === ADMIN_CREDENTIAL_HASH) {
    unlock();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!crypto.subtle) {
      message.textContent = "이 브라우저에서는 임시 로그인을 사용할 수 없습니다.";
      return;
    }

    const id = document.getElementById("adminId").value.trim();
    const password = document.getElementById("adminPassword").value;
    const credentialHash = await sha256(`${id}:${password}`);

    if (credentialHash === ADMIN_CREDENTIAL_HASH) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, credentialHash);
      form.reset();
      unlock();
      return;
    }

    message.textContent = "ID 또는 비밀번호가 맞지 않습니다.";
  });

  logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    adminContent.hidden = true;
    logoutButton.hidden = true;
    loginGate.hidden = false;
  });
}

menuToggle?.addEventListener("click", () => {
  siteHeader?.classList.toggle("is-open");
});

document.querySelectorAll(".main-nav a, .account-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader?.classList.remove("is-open");
  });
});

document.querySelectorAll(".add-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    addToCart({
      id: button.dataset.cartId,
      name: button.dataset.cartName,
      price: Number(button.dataset.cartPrice),
      desc: button.dataset.cartDesc,
      image: new URL(button.dataset.cartImage, window.location.href).href
    });
  });
});

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-cart-action]");

  if (!control) {
    return;
  }

  const id = control.dataset.cartId;
  const action = control.dataset.cartAction;

  if (action === "increase") {
    changeQuantity(id, 1);
  }

  if (action === "decrease") {
    changeQuantity(id, -1);
  }

  if (action === "remove") {
    removeFromCart(id);
  }
});

document.querySelectorAll("[data-fake-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("아직 실제 전송은 연결 전입니다. 링크와 계정 정보를 받으면 연결할 수 있습니다.");
  });
});

document.getElementById("checkoutButton")?.addEventListener("click", () => {
  const cart = readCart();

  if (cart.length === 0) {
    showToast("장바구니에 담긴 서비스가 없습니다.");
    return;
  }

  window.location.href = "./checkout.html";
});

if (window.location.hash === "#recipeForm") {
  const recipePanel = document.getElementById("recipeCalculatorPanel");

  if (recipePanel) {
    recipePanel.open = true;
  }
}

setupSlider();
setupNoticeSearch();
setupFooterLinks();
setupToolsNavLink();
setupRestaurantDatabase();
setupMarketSearch();
setupRecipeCalculator();
setupMarginTool();
setupPrepProgress();
setupAdminGate();
setupAdminDashboard();
updateCartBadges();
renderMarketFavorites();
updateFavoriteButtons();
renderCart();
renderCheckout();
