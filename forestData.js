let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];

// Change the name of "Riverside Park" to "Riverside Greenspace"
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

// Change the name of the tree species "Maple" to "Sugar Maple"
let centralPark = parks.find(park => park.name === "Central Park");
centralPark.trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

// Add a new tree to the "Central Park" object
centralPark.trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

// Retrieve a list of all tree species located in "Central Park"
let centralParkTrees = centralPark.trees.map(tree => tree.species);

// Calculate the average age of all the trees in the parks array
let totalAge = parks.flatMap(park => park.trees).reduce((acc, tree) => acc + tree.age, 0);
let averageTreeAge = totalAge / parks.flatMap(park => park.trees).length;

// Determine which tree is the tallest among all the trees in the parks array
let tallestTree = parks.flatMap(park => park.trees).reduce((maxTree, tree) => tree.height > maxTree.height ? tree : maxTree);

// Remove the facility "playground" from the facilities array in "Central Park"
centralPark.facilities = centralPark.facilities.filter(facility => facility !== "playground");

// Convert the parks array into a JSON Object
let parksJSON = JSON.stringify(parks);

// Display the name and facilities of the first item in the parks array
console.log("Name:", parks[0].name);
console.log("Facilities:", parks[0].facilities);

// Display the species of the third item in the parks array
console.log("Species of the third park:", parks[2].trees.map(tree => tree.species));
