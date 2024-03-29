// This getDateString() returns current date ie '13/2/2023

class NewDate {
  constructor() {
    this.date = new Date();
    this.dateString = `${this.date.getDate()}/${
      this.date.getMonth() + 1
    }/${this.date.getFullYear()}`;
  }
  getDateString() {
    return this.dateString;
  }
}

module.exports = NewDate;
