import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export function exportPDF(data) {

  const doc = new jsPDF()

  autoTable(doc, {
    head: [['Nama', 'NIS', 'Kelas']],
    body: data.map(item => [
      item.name,
      item.nis,
      item.class
    ])
  })

  doc.save('data-siswa.pdf')
}
