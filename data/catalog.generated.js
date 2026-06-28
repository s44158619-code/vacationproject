(() => {
  const baseProducts = [
    ["apple", "사과", "부사 홍로 과일 카페 디저트", "fruit", "kg", 4200],
    ["pear", "배", "신고배 과일 선물세트", "fruit", "kg", 5200],
    ["banana", "바나나", "과일 카페 디저트 주스", "fruit", "kg", 2600],
    ["kiwi", "키위", "골드키위 그린키위 과일", "fruit", "kg", 6800],
    ["grape", "포도", "샤인머스캣 캠벨 과일", "fruit", "kg", 7800],
    ["orange", "오렌지", "수입과일 주스 카페", "fruit", "kg", 3600],
    ["strawberry", "딸기", "카페 디저트 과일", "fruit", "kg", 9200],
    ["blueberry", "블루베리", "냉동과일 디저트 카페", "fruit", "kg", 12800],
    ["mango", "망고", "수입과일 디저트 카페", "fruit", "kg", 9800],
    ["melon", "멜론", "과일 선물 디저트", "fruit", "kg", 7400],
    ["watermelon", "수박", "여름과일 주스", "fruit", "kg", 1800],
    ["peach", "복숭아", "황도 백도 과일", "fruit", "kg", 6900],
    ["plum", "자두", "여름과일 잼", "fruit", "kg", 4800],
    ["persimmon", "감", "단감 홍시 과일", "fruit", "kg", 4300],
    ["pineapple", "파인애플", "수입과일 주스 피자", "fruit", "kg", 3900],
    ["lemon", "레몬", "카페 음료 소스", "fruit", "kg", 5200],
    ["lime", "라임", "음료 칵테일 카페", "fruit", "kg", 9800],
    ["cherry", "체리", "수입과일 디저트", "fruit", "kg", 14500],
    ["fig", "무화과", "디저트 베이커리 과일", "fruit", "kg", 11800],
    ["avocado", "아보카도", "샐러드 브런치 과일", "fruit", "kg", 8900],
    ["onion", "양파", "채소 식당 기본재료", "vegetable", "kg", 1800],
    ["green-onion", "대파", "채소 식당 국밥 중식", "vegetable", "kg", 2600],
    ["garlic", "마늘", "양념 채소 식당", "vegetable", "kg", 6200],
    ["cabbage", "양배추", "채소 샐러드 돈카츠", "vegetable", "kg", 1700],
    ["cabbage-green", "배추", "채소 김치 국밥", "vegetable", "kg", 2100],
    ["radish", "무", "채소 국밥 반찬", "vegetable", "kg", 1400],
    ["carrot", "당근", "채소 김밥 샐러드", "vegetable", "kg", 2300],
    ["potato", "감자", "채소 튀김 스프", "vegetable", "kg", 2400],
    ["sweet-potato", "고구마", "디저트 분식 채소", "vegetable", "kg", 3100],
    ["tomato", "토마토", "샐러드 파스타 채소", "vegetable", "kg", 3900],
    ["lettuce", "상추", "쌈채소 고깃집 샐러드", "vegetable", "kg", 5200],
    ["perilla-leaf", "깻잎", "쌈채소 반찬", "vegetable", "kg", 9800],
    ["spinach", "시금치", "나물 반찬 채소", "vegetable", "kg", 4800],
    ["bean-sprout", "콩나물", "국밥 반찬 채소", "vegetable", "kg", 1900],
    ["cucumber", "오이", "김밥 샐러드 냉채", "vegetable", "kg", 3300],
    ["zucchini", "애호박", "찌개 전 채소", "vegetable", "kg", 2800],
    ["broccoli", "브로콜리", "샐러드 양식 채소", "vegetable", "kg", 4900],
    ["paprika", "파프리카", "샐러드 피자 채소", "vegetable", "kg", 6900],
    ["mushroom", "버섯", "양식 전골 채소", "vegetable", "kg", 5400],
    ["chili-pepper", "고추", "양념 채소 매운맛", "vegetable", "kg", 6200],
    ["rice", "쌀", "백미 밥 도시락 식당", "grain", "kg", 3100],
    ["brown-rice", "현미", "잡곡 건강식 밥", "grain", "kg", 4300],
    ["black-rice", "흑미", "잡곡 도시락 밥", "grain", "kg", 6200],
    ["flour", "밀가루", "튀김 베이커리 피자", "grain", "kg", 2100],
    ["starch", "전분", "중식 튀김 소스", "grain", "kg", 3300],
    ["sugar", "설탕", "양념 디저트 카페", "grain", "kg", 1900],
    ["salt", "소금", "양념 기본재료", "grain", "kg", 900],
    ["noodle", "면", "중식 분식 우동 라면", "grain", "kg", 3400],
    ["pasta", "파스타면", "양식 파스타", "grain", "kg", 5200],
    ["bread-flour", "강력분", "베이커리 피자 도우", "grain", "kg", 2600],
    ["oat", "오트밀", "건강식 카페 샐러드", "grain", "kg", 6200],
    ["corn", "옥수수", "피자 샐러드 토핑", "grain", "kg", 3200],
    ["egg", "계란", "식당 김밥 카페 베이커리", "restaurant", "30구", 6200],
    ["tofu", "두부", "찌개 반찬 식당", "restaurant", "kg", 2300],
    ["soy-sauce", "간장", "양념 소스 식당", "restaurant", "L", 3200],
    ["gochujang", "고추장", "양념 한식 분식", "restaurant", "kg", 4300],
    ["doenjang", "된장", "양념 찌개 한식", "restaurant", "kg", 3900],
    ["vinegar", "식초", "소스 양념 절임", "restaurant", "L", 2100],
    ["sesame-oil", "참기름", "양념 김밥 한식", "restaurant", "L", 12800],
    ["cooking-oil", "식용유", "튀김 치킨 중식", "restaurant", "L", 3600],
    ["olive-oil", "올리브오일", "양식 샐러드 파스타", "restaurant", "L", 11800],
    ["butter", "버터", "베이커리 양식 카페", "restaurant", "kg", 9800],
    ["cream", "생크림", "카페 디저트 양식", "restaurant", "L", 6200],
    ["cheese", "치즈", "피자 양식 카페", "restaurant", "kg", 10500],
    ["milk", "우유", "카페 베이커리 음료", "restaurant", "L", 2400],
    ["yogurt", "요거트", "카페 샐러드 디저트", "restaurant", "kg", 4200],
    ["coffee-bean", "원두", "카페 커피 음료", "restaurant", "kg", 18000],
    ["matcha", "말차가루", "카페 디저트 음료", "restaurant", "kg", 24000],
    ["cocoa", "코코아가루", "카페 디저트 베이커리", "restaurant", "kg", 9800],
    ["honey", "꿀", "카페 디저트 소스", "restaurant", "kg", 9500],
    ["chicken", "닭고기", "치킨 샐러드 식당", "meat", "kg", 5800],
    ["pork", "돼지고기", "국밥 돈카츠 고깃집", "meat", "kg", 8200],
    ["beef", "소고기", "스테이크 국밥 구이", "meat", "kg", 16500],
    ["duck", "오리고기", "구이 보양식 식당", "meat", "kg", 11800],
    ["ham", "햄", "피자 샌드위치 토핑", "meat", "kg", 7200],
    ["sausage", "소시지", "피자 푸드트럭 안주", "meat", "kg", 7600],
    ["bacon", "베이컨", "브런치 양식 토핑", "meat", "kg", 11200],
    ["minced-pork", "다짐육", "만두 볶음밥 소스", "meat", "kg", 7600],
    ["salmon", "연어", "샐러드 일식 회", "meat", "kg", 22500],
    ["shrimp", "새우", "중식 파스타 해산물", "meat", "kg", 12500],
    ["squid", "오징어", "중식 분식 해산물", "meat", "kg", 7800],
    ["mackerel", "고등어", "생선구이 백반", "meat", "kg", 6900],
    ["pollack", "명태", "탕 찜 해산물", "meat", "kg", 5900],
    ["clam", "바지락", "칼국수 파스타 해산물", "meat", "kg", 6400],
    ["takeout-bowl", "포장 용기", "배달 도시락 포장", "packaging", "100개", 7800],
    ["soup-container", "국물 용기", "국밥 찌개 탕 포장", "packaging", "100개", 12500],
    ["rice-bowl", "덮밥 용기", "일식 도시락 밥 용기", "packaging", "100개", 11800],
    ["pasta-container", "파스타 용기", "양식 파스타 포장", "packaging", "100개", 13200],
    ["salad-bowl", "샐러드 볼", "샐러드 포장 용기", "packaging", "100개", 12800],
    ["chicken-box", "치킨 박스", "치킨 포장 박스", "packaging", "100개", 17500],
    ["pizza-box", "피자 박스", "피자 포장 박스", "packaging", "100개", 22500],
    ["sauce-cup", "소스 컵", "드레싱 소스 포장", "packaging", "100개", 4300],
    ["delivery-bag", "배달 봉투", "배달 포장 봉투", "packaging", "100장", 6500],
    ["wood-chopsticks", "나무젓가락", "일회용 젓가락 배달", "packaging", "100개", 2900],
    ["spoon", "스푼", "일회용 숟가락 배달", "packaging", "100개", 3500],
    ["fork", "포크", "일회용 포크 배달", "packaging", "100개", 3400],
    ["cup", "컵", "카페 행사 일회용 컵", "packaging", "100개", 5200],
    ["straw", "빨대", "카페 음료 빨대", "packaging", "100개", 2200],
    ["napkin", "냅킨", "매장 배달 냅킨", "packaging", "100매", 1800],
    ["label-sticker", "라벨 스티커", "도시락 반찬 스티커", "supplies", "100장", 3900],
    ["plastic-glove", "비닐 장갑", "위생 장갑 조리", "supplies", "100매", 2400],
    ["ice-pack", "아이스팩", "보냉 해산물 배송", "supplies", "100개", 11800],
    ["menu-board", "메뉴 보드", "매장 푸드트럭 메뉴판", "supplies", "개", 15000],
    ["banner", "배너", "행사 매장 홍보", "supplies", "개", 22000]
  ];

  const regions = [
    ["seoul", "서울", 1.08],
    ["gyeonggi", "경기", 1.02],
    ["gangwon", "강원", 0.98],
    ["chungcheong", "충청", 0.96],
    ["jeolla", "전라", 0.94],
    ["gyeongsang", "경상", 0.97],
    ["jeju", "제주", 1.14],
    ["busan", "부산", 1.04],
    ["incheon", "인천", 1.03],
    ["daegu", "대구", 1.01]
  ];

  const grades = [
    ["premium", "특", 1.24],
    ["high", "상", 1.1],
    ["standard", "보통", 1],
    ["value", "실속", 0.9],
    ["process", "가공용", 0.78]
  ];

  const packs = [
    ["small", "소분", 1.16],
    ["standard", "표준", 1],
    ["business", "업소용", 0.93],
    ["bulk", "대용량", 0.86],
    ["contract", "정기납품", 0.81]
  ];

  const channels = [
    ["market", "도매시장", 0.98],
    ["mart", "식자재마트", 1.04],
    ["direct", "산지직송", 0.93],
    ["b2b", "온라인B2B", 1.01]
  ];

  const categoryNames = {
    fruit: "과일",
    vegetable: "채소",
    grain: "곡물/가공",
    restaurant: "식당 재료",
    meat: "축수산",
    packaging: "포장/소모품",
    supplies: "운영용품"
  };

  const roundPrice = (value) => Math.max(100, Math.round(value / 10) * 10);
  const records = [];
  const updated = "2026-06-28";

  baseProducts.forEach(([slug, baseName, aliases, category, unit, basePrice], baseIndex) => {
    regions.forEach(([regionSlug, regionName, regionFactor], regionIndex) => {
      grades.forEach(([gradeSlug, gradeName, gradeFactor], gradeIndex) => {
        packs.forEach(([packSlug, packName, packFactor], packIndex) => {
          channels.forEach(([channelSlug, channelName, channelFactor], channelIndex) => {
            const seasonalFactor = 0.94 + (((baseIndex + regionIndex + gradeIndex + packIndex + channelIndex) % 9) * 0.015);
            const buyPrice = roundPrice(basePrice * regionFactor * gradeFactor * packFactor * channelFactor * seasonalFactor);
            const retailFactor = 1.32 + ((baseIndex + gradeIndex + channelIndex) % 6) * 0.035;
            const sellFactor = 1.12 + ((regionIndex + packIndex) % 5) * 0.025;
            const retailPrice = Math.ceil((buyPrice * retailFactor) / 100) * 100;
            const sellPrice = Math.ceil((retailPrice * sellFactor) / 100) * 100;

            records.push({
              id: `bulk-${slug}-${regionSlug}-${gradeSlug}-${packSlug}-${channelSlug}`,
              name: `${regionName} ${gradeName} ${baseName} ${packName}`,
              aliases: `${aliases} ${regionName} ${gradeName} ${packName} ${channelName} ${categoryNames[category]} 대량 매입 가격비교`,
              category,
              unit,
              buyPrice,
              retailPrice,
              sellPrice,
              source: `${channelName} 대량 기준가 샘플`,
              updated
            });
          });
        });
      });
    });
  });

  globalThis.AHIMHA_GENERATED_PRODUCTS = records;
  globalThis.AHIMHA_GENERATED_META = {
    count: records.length,
    baseProducts: baseProducts.length,
    regions: regions.length,
    grades: grades.length,
    packs: packs.length,
    channels: channels.length,
    updated
  };
})();
