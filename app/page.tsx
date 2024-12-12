import BloodAssessment from '../components/BloodAssessment'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Blood Donation Assessment</h1>
        <BloodAssessment />
      </div>
    </main>
  )
}
