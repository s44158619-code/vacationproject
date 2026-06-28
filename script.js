const CART_KEY = "ahimha-cart";
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

const MARKET_CATALOG = [...MARKET_PRODUCTS, ...EXTRA_MARKET_PRODUCTS];

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
    countBadge.textContent = `현재 ${MARKET_CATALOG.length}개 품목 검색 가능`;
  }

  function matches(product, keyword, category) {
    const haystack = `${product.name} ${product.aliases}`.toLowerCase();
    const categoryMatch = category === "all" || product.category === category || (category === "restaurant" && product.aliases.includes("식당"));
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
      <button class="add-cart-button" type="button" data-cart-id="market-${product.id}" data-cart-name="${product.name} 마진 분석 요청" data-cart-price="30000" data-cart-desc="${product.name} 기준 가격 비교와 판매가 설계" data-cart-image="../assets/hero-operations.png">이 상품 분석 요청 담기</button>
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
  }

  function render() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryInput.value;
    const targetMargin = Number(targetInput.value) || 0;
    const filtered = MARKET_CATALOG.filter((product) => matches(product, keyword, category));

    results.innerHTML = filtered.map((product) => {
      const { sellPrice, profit, rate } = calculateMargin(product, targetMargin);
      const marketplacePreview = getMarketplacePrices(product).slice(0, 3).map((item) => `
        <em>${item.market} ${formatWon(item.price)}</em>
      `).join("");

      return `
        <button class="market-card" type="button" data-market-id="${product.id}">
          <span>${product.name}</span>
          <strong>${formatWon(product.buyPrice)} / ${product.unit}</strong>
          <small>추천 ${formatWon(sellPrice)} · 마진 ${formatWon(profit)} (${rate.toFixed(1)}%)</small>
          <div class="marketplace-preview">${marketplacePreview}</div>
        </button>
      `;
    }).join("") || `
      <div class="empty-cart">
        <h2>검색 결과가 없습니다.</h2>
        <p>상품명을 조금 다르게 입력하거나 전체 분류로 다시 검색해보세요.</p>
      </div>
    `;

    results.querySelectorAll("[data-market-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = MARKET_CATALOG.find((item) => item.id === button.dataset.marketId);
        if (product) {
          renderDetail(product);
        }
      });
    });

    if (filtered[0]) {
      renderDetail(filtered[0]);
    }
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
    const product = MARKET_CATALOG.find((item) => item.id === row.productId);
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
      const productOptions = MARKET_CATALOG.map((product) => `
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

setupSlider();
setupNoticeSearch();
setupFooterLinks();
setupToolsNavLink();
setupMarketSearch();
setupRecipeCalculator();
setupMarginTool();
setupPrepProgress();
setupAdminGate();
setupAdminDashboard();
updateCartBadges();
renderCart();
renderCheckout();
