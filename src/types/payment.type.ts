type TFees = {
  yearlyMonthFees: number;
  admissionFees: number;
  reAdmissionFees: number;
  books: number;
  stationeries: number;
  idCard: number;
  tie: number;
  studyTour: number;
  examFees: number;
  picnicFees: number;
};
export type TUpdateStudentPayment = {
  student: string;
  class: {name:string, _id:string};
  fees: TFees;
  discountOnFees: number;
  cashCollection: number;
};

export const TUpdateStudentPaymentInputFields = {
  admissionFees: "admissionFees",
  reAdmissionFees: "reAdmissionFees",
  monthlyFees: "monthlyFees",
  books: "books",
  picnicFees: "picnicFees",
  idCard: "idCard",
  examFees: "examFees",
  stationeries: "stationeries",
  studyTour: "studyTour",
  tie: "tie",
  cashCollection: "cashCollection",
  discountOnFees: "discountOnFees",
};

export type TSinglePayInfo = {
  admissionFees: number;
  books: number;
  cashCollection: number;
  date: string;
  discountOnFees: number;
  examFees: number;
  idCard: number;
  picnicFees: number;
  reAdmissionFees: number;
  stationeries: number;
  studyTour: number;
  tie: number;
  yearlyMonthFees: number;
  _id: string;
};
