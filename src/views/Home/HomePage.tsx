import { Card } from "./components/Card";

export const HomePage = () => {
  return (
    <div className="w-full h-full mt-2">
      <h2 className="text-lg font-semibold text-secondary">Товары - 12</h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
