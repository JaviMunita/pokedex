const typeColor: Record<string, string> = {
  bug: "bg-[#729f3f]",
  dark: "bg-[#707070]",
  dragon: "bg-[#7866EF]",
  electric: "bg-[#eed535]",
  fairy: "bg-[#fdb9e9]",
  fighting: "bg-[#d56723]",
  fire: "bg-[#fd7d24]",
  flying: "bg-[#669AFF]",
  ghost: "bg-[#7b62a3]",
  grass: "bg-[#9bcc50]",
  ground: "bg-[#DEBC54]",
  ice: "bg-[#78DEFF]",
  normal: "bg-[#a4acaf]",
  poison: "bg-[#b97fc9]",
  psychic: "bg-[#f366b9]",
  rock: "bg-[#a38c21]",
  shadow: "bg-[#919191]",
  steel: "bg-[#9eb7b8]",
  unknown: "bg-[#919191]",
  water: "bg-[#4592c4]",
};

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  SpD: "[&>div]:bg-green-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

export { typeColor, colorByStat };
