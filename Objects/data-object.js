const Data = {
  title: "A Sample Data",
  description: "This is a sample description",
  information: "A Critical Information",
  getInformation: function () {
    console.log(`${this.information}`);
  },
};

Data.getInformation("Test");
