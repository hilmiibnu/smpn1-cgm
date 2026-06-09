'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import UploadPhoto from '../../components/UploadPhoto'

export default function StudentsPage() {

  const [students, setStudents] = useState([])

  async function getStudents() {
    const { data } = await supabase
      .from('students')
      .select('*')

    setStudents(data)
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Data Siswa
      </h1>
    <UploadPhoto />

      <table className="w-full mt-6 bg-white rounded-xl shadow">

        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Nama</th>
            <th>NIS</th>
            <th>Kelas</th>
          </tr>
        </thead>

        <tbody>

          {students?.map((student) => (
            <tr key={student.id}>

              <td className="p-3">
                {student.name}
              </td>

              <td>
                {student.nis}
              </td>

              <td>
                {student.class}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}
