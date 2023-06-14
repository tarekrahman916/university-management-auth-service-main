import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
};

export type AcademyFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;

export type IAcademicFacultyFilters = {
  searchTerm?: string;
};
