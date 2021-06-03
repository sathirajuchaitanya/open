export interface IEmiCalculator {
    monthlyIncome: number;
    monthlyExpenses: number;
    repaymentenure: number;
    existingloans: boolean;
    emiExistingLoan: number;
    eligibiltyLoan: IeligibilityLoan;
}
export interface IeligibilityLoan {
    loanAmount: number;
    montlyEmi: number;
}