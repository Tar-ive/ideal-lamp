import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Lab Results Viewer</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Cholesterol Results</h2>
            <Link href="/cholesterol/v1" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 1
            </Link>
            <Link href="/cholesterol/v2" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 2
            </Link>
            <Link href="/cholesterol/v3" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 3
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Blood Count Results</h2>
            <Link href="/blood/v1" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 1
            </Link>
            <Link href="/blood/v2" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 2
            </Link>
            <Link href="/blood/v3" className="block w-full py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors text-lg">
              Version 3
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
