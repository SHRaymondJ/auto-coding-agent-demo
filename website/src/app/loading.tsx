export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-white px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-blue/25 border-t-brand-blue" />
        <p className="text-sm font-medium tracking-wide text-text-body">正在加载...</p>
      </div>
    </div>
  );
}
