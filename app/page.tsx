import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Lab Results Viewer</h1>
        <Link href="/v1" className="block w-full py-3 md:py-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg md:text-xl">
          Condition 1
        </Link>
        <Link href="/v2" className="block w-full py-3 md:py-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg md:text-xl">
          Condition 2
        </Link>
        <Link href="/v3" className="block w-full py-3 md:py-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg md:text-xl">
          Condition 3
        </Link>
      </div>
    </main>
  );
}
