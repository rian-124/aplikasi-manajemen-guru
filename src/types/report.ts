export type Report = {
  class: string;
  teacher: string;
  subject: string;
  value: number;
  active: boolean;
};

export type AverageClass = {
  class: string;
  value: string;
};

export type SubjectReport = {
  name: string;
  value: number;
  fill: string;
};
