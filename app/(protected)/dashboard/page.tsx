export default async function ProtectedPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="mb-2 font-bold text-3xl">Dashboard</h1>
      </div>
      <div className="rounded-lg bg-accent/50 p-6">
        <p className="text-muted-foreground text-sm">
          Start building your Quranic reflection journey here.
        </p>
      </div>
    </div>
  );
}
