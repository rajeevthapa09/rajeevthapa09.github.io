

import { Account } from "./account.js";



/**
 * 
 */
export class SavingsAccount extends Account{

    /**
     * 
     * @param {Number} number is the number from construction function
     * @param {Number} interest is the interest rate for saving acc
     */
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    /**
     * @description Adds interest amount to the account
     * @returns {nothing} Nothing
    */
    addInterest(){
        const balance = this.getBalance();
        const interestAmt = balance * (this._interest/100);
        this.deposit(interestAmt);
    }

    /**
     * 
     * @returns {Number} interest 
     */
    getInterest(){
        return this._interest;
    }

    /**
     * 
     * @param {Number} interest is the interest rate for the savings acc
     * @returns {empty} nothing
     */
    setInterest(interest){
        this._interest = interest;
    }

    /**
     * @returns {String} returns the message that tells the balance and interests
     */
    toString(){
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }

    /**
     * 
     * @returns {string} is a message that tells the balance at the end of the month after adding the interest rate.
     */
    endOfMonth() {
        return "Interest added SavingsAccount " + this._number + ": balance: " + this._balance + "interest: " + this._interest ; 
    }


}