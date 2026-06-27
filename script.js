const fields = ["price", "cost", "shipping", "packing", "fee", "etc"];
const formatWon = (value) => `${Math.round(value).toLocaleString("ko-KR")}원`;

function readNumber(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) ? value : 0;
}

function updateMargin() {
  const price = readNumber("price");
  const totalCost = fields.slice(1).reduce((sum, id) => sum + readNumber(id), 0);
  const profit = price - totalCost;
  const rate = price > 0 ? (profit / price) * 100 : 0;

  document.getElementById("profit").textContent = formatWon(profit);
  document.getElementById("totalCost").textContent = formatWon(totalCost);
  document.getElementById("rate").textContent = `${rate.toFixed(1)}%`;
  document.getElementById("resultNote").textContent =
    profit <= 0
      ? "비용 구조를 다시 확인해야 합니다. 공급가, 택배비, 포장비를 먼저 줄여보세요."
      : profit < 3000
        ? "판매는 가능하지만 여유가 작습니다. 반복 운영이라면 주문관리 시간을 꼭 줄여야 합니다."
        : "마진이 남는 구조입니다. 이제 주문관리와 고객 안내를 자동화하면 운영이 훨씬 가벼워집니다.";
}

fields.forEach((id) => document.getElementById(id).addEventListener("input", updateMargin));
updateMargin();
