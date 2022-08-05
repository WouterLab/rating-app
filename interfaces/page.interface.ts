export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface PageAdvantage {
  title: string;
  _id: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface PageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: PageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  hh: HhData;
}
