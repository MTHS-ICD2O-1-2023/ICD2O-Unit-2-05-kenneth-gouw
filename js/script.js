// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

function findIncomeClicked() {
  const hoursInput = parseInt(document.getElementById("hours-entered").value)
  const incomeInput = parseInt(document.getElementById("income-entered").value)
  const govTax = 0.18 * (hoursInput * incomeInput)
  const totalEarnings = (hoursInput * incomeInput) - govTax
  document.getElementById("answer").innerHTML = "Your total income is: $" + totalEarnings.toFixed(2) + "<br>" + "The government will take: $" + govTax.toFixed(2)
}
