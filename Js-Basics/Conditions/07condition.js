function apporveLoan(applicant) {
  let approval = {
    approved: false,
    loanAmount: 0,
    interestRate: 0,
    reason: [],
    riskLevel: "Unknown",
  };

  if (applicant.age < 21) {
    approval.reason.push("DISQUALIFIED: Must be 21 years old!");
    return approval;
  }
  if (applicant.age > 71) {
    approval.reason.push("DISQUALIFIED: Cannot be older than 75");
    return approval;
  }

  let hasStableIncome = false;
  let incomeQualifies = false;

  if (applicant.yearsEmployed >= 3) {
    hasStableIncome = true;
  }

  if (applicant.annualIncome >= 30000) {
    incomeQualifies = true;
  }

  if (!hasStableIncome && !incomeQualifies) {
    approval.reason.push(
      "DISQUALIFIED: Need stable employment (3+ years ) and annual income of minimum 30,000+",
    );
    return approval;
  }

  let creditRating = "";
  let canProceed = false;

  if (applicant.creditScore < 300) {
    creditRating = "Poor";
    approval.reason.push(
      "DISQUALIFIED: credit score too low (below the 300 minimum credit score).",
    );
    return approval;
  } else if (applicant.creditScore < 550) {
    creditRating = "Bad";
    approval.reason.push("Credit Score is bad - approval difficult.");
  } else if (applicant.creditScore < 650) {
    creditRating = "Fair";
    approval.reason.push("Credit score is Fair -approval possible");
    canProceed = true;
  } else if (applicant.creitScore < 750) {
    creditRating = "Good";
    approval.reason.push("Credit Score is good - favorable terms");
    canProceed = true;
  } else {
    creditRating = "Excellent";
    approval.reason.push("Credit Score is excellent - best terms available");
    canProceed = true;
  }

  if (!canProceed && creditRating === "Bad") {
    return approval;
  }

  let debtToIncomeRatio =
    (applicant.existingLoans / applicant.annualIncome) * 100;
  let debtIsManageable = false;

  if (debtToIncomeRatio > 50) {
    approval.reason.push(
      "DISQUALIFIED: Existing debt too high (>50% of income)",
    );
    return approval;
  } else if (debtToIncomeRatio > 35) {
    approval.reason.push("High debt - smaller loan approved");
    debtIsManageable = true;
  } else {
    approval.reason.push("Debt level is manageable");
    debtIsManageable = true;
  }

  let maxLoanAmount = applicant.annualIncome * 5;
  let requestedAmount = applicant.loanAmount;

  if (requestedAmount > maxLoanAmount) {
    approval.reason.push(
      `Requested amount exceeds limit. Max allowed: ${maxLoanAmount}`,
    );
    requestedAmount = maxLoanAmount;
  }

  approval.loanAmount = requestedAmount;

  if (creditRating === "Excellent") {
    approval.interestRate = 4.5;
    approval.riskLevel = "Low";
  } else if (creditRating === "Good") {
    approval.interestRate = 6.0;
    approval.riskLevel = "Low-Medium";
  } else if (creditRating === "Fair") {
    approval.interestRate = 8.5;
    approval.riskLevel = "Medium";
  } else {
    approval.interestRate = 12.0;
    approval.riskLevel = "High";
  }

  if (applicant.purpose === "home") {
    approval.interestRate -= 1;
  }
  if (applicant.purpose === "education") {
    approval.interestRate -= 0.5;
  } else if (applicant.purpose === "personal") {
    approval.interestRate += 1;
  }

  approval.approved = true;
  approval.reason.push(
    `LOAN APPROVED: ${requestedAmount} at ${approval.interestRate}% interest`,
  );
  return approval;
}

// test case 1
let applicant1 = {
  name: "Subham Kundu",
  age: 22,
  annualIncome: 80000,
  creditScore: 780,
  existingLoans: 10000,
  loanAmount: 100000,
  purpose: "personal",
  yearsEmployed: 5,
};

const { approved, loanAmount, interestRate, reason, riskLevel } = apporveLoan(applicant1);

if (!approved) {
  console.log("The approval for loan has been declined.");
  console.log(`Reason for decline: ${reason}`);
} else {
  console.log("The approval for loan has been approved. ");
  console.log(`The loan amount is ${loanAmount}`);
  console.log(`The interest rate is ${interestRate}`);
  console.log(`The reason for approval : ${reason}`);
  console.log(`The risk level is ${riskLevel}`);
}
