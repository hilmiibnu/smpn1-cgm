'use client'

import {
  Users,
  UserCheck,
  GraduationCap
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-blue-700">
        Dashboard SMPN 1 Cigandamekar
      </h1>

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <Users className="text-blue-600" size={40} />
          <h2 className="text-xl mt-3 font-semibold">
            Total Siswa
          </h2>
          <p className="text-3xl font-bold mt-2">
            350
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <UserCheck className="text-green-600" size={40} />
          <h2 className="text-xl mt-3 font-semibold">
            Kehadiran Hari Ini
          </h2>
          <p className="text-3xl font-bold mt-2">
            320
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <GraduationCap className="text-purple-600" size={40} />
          <h2 className="text-xl mt-3 font-semibold">
            Total Guru
          </h2>
          <p className="text-3xl font-bold mt-2">
            25
          </p>
        </div>

      </div>

    </main>
  )
}
