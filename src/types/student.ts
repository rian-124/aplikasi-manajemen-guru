export type StudentGrades = {
  student_name: string;
  nis: string;
  assessments: {
    type: string;
    score: number;
    input_date: string;
    remark: string;
  }[];
};

export type ReportStudent = {
  name: string;
  subject: string;
  grade: number;
};