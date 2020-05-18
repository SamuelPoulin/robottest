import { Criteria } from './criteria';

export interface Category {
    name: string;
    color: string;
    criterias: Criteria[];
}
