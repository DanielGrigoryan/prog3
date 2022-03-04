class Pat extends LivingCreature {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newpat = new Pat(newX, newY);
            patArr.push(newpat);
            this.multiply = 0;
        }
    }
}