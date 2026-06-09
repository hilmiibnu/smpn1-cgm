'use client'

import { supabase } from '../lib/supabase'

export default function UploadPhoto() {

  async function uploadImage(event) {

    const file = event.target.files[0]

    const fileName = Date.now() + '-' + file.name

    const { data, error } = await supabase
      .storage
      .from('student-photo')
      .upload(fileName, file)

    if (error) {
      alert('Upload gagal')
      return
    }

    alert('Upload berhasil')
  }

  return (
    <input
      type="file"
      onChange={uploadImage}
    />
  )
}
