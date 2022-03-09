class Pat extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        setTimeout(function (){
            if (newCell && this.multiply >= 15) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 1;
    
                var newPat= new Pat(newX, newY);
                PatArr.push(newPat);
                this.multiply = 0;
            }
        },4000);
    }
}