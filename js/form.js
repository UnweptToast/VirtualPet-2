class Form {
    constructor() {
        this.add = createButton("Add");
        this.add.position(230, 65);
        this.add.size(80, 30);
        this.add.style("font-size: 15px")
        this.feed = createButton("Feed");
        this.feed.position(310, 65);
        this.feed.size(80, 30);
        this.feed.style("font-size: 15px");

        this.enter = createButton("Enter");
        this.enter.position(290, 340)
        this.enter.size(50, 20)
        this.input = createInput("Enter Pet's Name");
    }

    displayName() {
    }

    display() {
        this.add.mousePressed(this.addFood)
        this.feed.mousePressed(this.removeFood);
    }

    hideName() {
        this.add.show();
        this.feed.show();
        this.enter.hide();
        this.input.hide();
    }

    hideControl() {
        this.enter.show();
        this.input.show();
        this.feed.hide();
        this.add.hide();
    }

    removeFood() {
        if(foodAmt > 0) {
            foodAmt -= 1;
        }
        time = hour();
    }

    addFood() {
        if(foodAmt < 20) {
        foodAmt += 1
        }
    }

    updateName() {

        this.input.position(230, 300)
        this.input.size(150, 20)
        this.input.style("font-size: 15px");
        this.enter.mousePressed(() => {
            dogName = this.input.value();
            gameState = 1;
        });

    }
}