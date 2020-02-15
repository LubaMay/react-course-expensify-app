
export default (expenses) => {
        return expenses.map((expense) => {
            return expense.amount;
            
      }).reduce((result, amount) => {
          console.log(`we got result ${result} and increasing it by ${amount}`);
        return result + amount;
      }, 0)
    };

