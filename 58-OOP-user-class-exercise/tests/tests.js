// Exercise 1
describe("User class", () => {
	test("should be an instance of User", () => {
		const alex = new User("Alex", 25, 50);
		expect(alex instanceof User).toBe(true);
	});

	test("should has getter for name", () => {
		const alex = new User("Alex", 25, 50);
		expect(alex.getName()).toEqual("Alex");
	});

	test("should has getter for age", () => {
		const alex = new User("Alex", 25, 50);
		expect(alex.getAge()).toEqual(25);
	});

	test("should has getter for hunger", () => {
		const alex = new User("Alex", 25, 50);
		expect(alex.getHunger()).toEqual(50);
	});

	test("should has getter for foodEaten", () => {
		const alex = new User("Alex", 25, 50);
		expect(alex.getFoodEaten()).toEqual([]);
	});

	test("should has hungerStatus method", () => {
		const alex = new User("Alex", 25, 50);
		
		alex.setHunger(20);
		expect(alex.hungerStatus()).toEqual("Famished");

		alex.setHunger(21);
		expect(alex.hungerStatus()).toEqual("Starving")

		alex.setHunger(41);
		expect(alex.hungerStatus()).toEqual("Hungry")

		alex.setHunger(61);
		expect(alex.hungerStatus()).toEqual("Content")

		alex.setHunger(81);
		expect(alex.hungerStatus()).toEqual("Full")
	});

	test("should has setter for hunger", () => {
		const alex = new User("Alex", 25, 50);
		alex.setHunger(30);
		expect(alex.getHunger()).toEqual(30);

		alex.setHunger(200);
		expect(alex.getHunger()).toEqual(100);
	});

	test("should has eatFood to set foodEaten and update hunger", () => {
		const alex = new User("Alex", 25, 50);
		alex.eatFood({ name: "apple", value: 5 });

		expect(alex.getHunger()).toEqual(55);
		expect(alex.getFoodEaten().includes("apple")).toBe(true);
		expect(alex.getFoodEaten().length).toEqual(1);

		alex.eatFood({ name: "full meal", value: 70 });
		expect(alex.getHunger()).toEqual(100);
		expect(alex.getFoodEaten().includes("full meal")).toBe(true);
		expect(alex.getFoodEaten().length).toEqual(2);
	});

	test("should has starveABit to decrease hunger value", () => {
		const alex = new User("Alex", 25, 50);
		
		alex.starveABit(30)
		expect(alex.getHunger()).toEqual(20);

		alex.starveABit(30)
		expect(alex.getHunger()).toEqual(-10);
		expect(alex.starveABit(30)).toEqual("You are dead");
	});
});
