import { Button } from "@/components/ui/button";

export default function Home() {
    return (
      <div className="flex flex-col w-full justify-center items-center p-4">
        <p>Hi Admin Dashboard</p>
        <Button size="lg" variant="destructive">Click Me!</Button>
      </div>
    );
  }
  