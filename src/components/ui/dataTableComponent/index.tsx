import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";

type DataTableComponent = {
  data: {
    student_name: string;
    nis: string;
    assessments: {
        type: string;
        score: number;
        input_date: string;
        remark: string;
    }[]
  }[]
}

export default function DataTableComponent({ data } : DataTableComponent) {
  return (
    <div className="rounded-md border overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="border-r text-center">
              No
            </TableHead>
            <TableHead rowSpan={2} className="border-r text-center">
              Nama Siswa
            </TableHead>
            <TableHead rowSpan={2} className="border-r text-center">
              NIS
            </TableHead>
            <TableHead colSpan={2} className="text-center border-r">
              Penilaian
            </TableHead>
            <TableHead rowSpan={2} className="border-r text-center">
              Tanggal Input
            </TableHead>
            <TableHead rowSpan={2} className="border-r text-center">
              Keterangan
            </TableHead>
            <TableHead rowSpan={2} className="border-r text-center">
              Aksi
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-r text-center">Komponen</TableHead>
            <TableHead className="border-r text-center">Nilai</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((student, index) => (
            <React.Fragment key={student.nis}>
              {student.assessments.map((a, i) => (
                <TableRow key={`${student.nis}-${i}`}>
                  {i === 0 && (
                    <>
                      <TableCell rowSpan={student.assessments.length} className="border">
                        {index + 1}
                      </TableCell>
                      <TableCell rowSpan={student.assessments.length} className="border">
                        {student.student_name}
                      </TableCell>
                      <TableCell rowSpan={student.assessments.length} className="border">
                        {student.nis}
                      </TableCell>
                    </>
                  )}
                  <TableCell className="border text-center">
                    {a.type}
                  </TableCell>
                  <TableCell className="border text-center">
                    {a.score}
                  </TableCell>
                  <TableCell className="border text-center">
                    {a.input_date}
                  </TableCell>
                  <TableCell className="border text-center">
                    {a.remark}
                  </TableCell>
                  <TableCell className="border text-center">✏️</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
