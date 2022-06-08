/// <reference types="cypress" />

describe("injection", () => {
  beforeEach(() => {
    cy.visit("/injection");
  });
  it("user can't go to next page if inputs are empty", () => {
    cy.contains("უკვე აცრილი ხარ?*").should("be.visible");
    cy.get("#nextButton").click();
    cy.contains("არჩევა სავალდებულოა.").should("be.visible");
    cy.get("#vaccineYes").click();
    cy.contains("აირჩიე რა ეტაპზე ხარ*").should("be.visible");
    cy.get("#nextButton").click();
    cy.contains("არჩევა სავალდებულოა.").should("be.visible");
    cy.get("#vaccineNo").click();
    cy.contains("რას ელოდები?*").should("be.visible");
    cy.get("#nextButton").click();
    cy.contains("არჩევა სავალდებულოა.").should("be.visible");
  });

  it("user can go to next page", () => {
    cy.contains("უკვე აცრილი ხარ?*").should("be.visible");
    cy.get("#vaccineYes").click();
    cy.contains("აირჩიე რა ეტაპზე ხარ*").should("be.visible");
    cy.get("#registered").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
    cy.get("#prevButton").click();
    cy.get("#fullyVaccinated").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
    cy.get("#prevButton").click();
    cy.get("#notRegistered").click();
    cy.contains("რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი").should(
      "be.visible"
    );
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
    cy.get("#prevButton").click();
    cy.get("#vaccineNo").click();
    cy.contains("რას ელოდები?*").should("be.visible");
    cy.get("#registeredAndWaiting").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
    cy.get("#prevButton").click();
    cy.get("#notPlanning").click();
    cy.contains("👉 https://booking.moh.gov.ge/").should("be.visible");
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
    cy.get("#prevButton").click();
    cy.get("#hadCovid").click();
    cy.contains(
      "ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება."
    ).should("be.visible");
    cy.contains("👉 რეგისტრაციის ბმული").should("be.visible");
    cy.get("#nextButton").click();
    cy.url().should("include", "advice");
  });
});
