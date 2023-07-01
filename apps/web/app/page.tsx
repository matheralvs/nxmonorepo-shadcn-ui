import { Button } from '@nxmonorepo-shadcn-ui/ui';

export default async function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold underline">Web</h1>
      <Button variant="outline">Hello World!</Button>
    </div>
  );
}
