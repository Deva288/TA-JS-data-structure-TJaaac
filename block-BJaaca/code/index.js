//  Follow instructions below and write code accordingly.

//  - Create a variable named `character` using `let` assign a value of empty object.

```Js
let character = {};

```

//  - Go to this [Arya Stark](https://awoiaf.westeros.org/index.php/Arya_Stark)

//  Re-assign the value of `character` variable to and object with the key `characterName` and value of "Arya"
```Js
character = {
    charecterName : "Arya";
}

```

// - A variable named `age` is predefined with value 20. Add a new key named `character-age` with the value of `age` variable i.e 20 (don't use the value 20)

let age = 20;
charecter = ["charector-age"] = age;

// - Add a new key `sur name` with the value of the surname of the character i.e "Stark". (Don't remove the space between `sur` and `name`)

charecter = ["sur name"] = "Stark";

// - Add a new key `title` with the value title of the character i.e "Lady of Winterfell"

charecter.title = "Lady of Winterfell";

// - Add another property named `greet` and value should be a function when called should alert `I am [NAME HERE] and my title is [TITLE HERE]`.

charecter.greet = function () {
    alert(
        `I am ${charecter.charecterName} and my title is ${charecter.title}`
    );
}

// - Add a new property to the character object named `isFemale` and value will be `true`

charecter.idFemale = true;

// - Execute the function stored in the greet key of the character object

charecter.greet();

//  - Change the method `greet` to now alert `She is [NAME HERE] and her title is [TITLE HERE]`.

charecter.greet = function () {
    alert(
        `She is ${charecter.charecterName} and her title is ${charecter.title}`
    );
}
// - Check by calling `greet` and see if the message changed or not.

charecter.greet();

//  - Add a new property in the character object `isAdult`. The value will be true if age is greater than 18 or it will be false.

charecter.IsAdult = age > 18 ? true : false ;
charecter.IsAdult = charecter.age > 18 ? true : false;

// - Add a new method (function inside objects are called methods) named `changeIsAdult`. When called should be able to flip the value of `isAdult` from true to false and false to true.

charecter.changeIsAdult = charecter.IsAdult == false;
charecter.changeIsAdult = function () {
    charecter.IsAdult != charecter.IsAdult;
}

// - Add a new key with the name stored in variable `keyName` defined below i.e `playedBy` (use [] for computed property) and the value of "Maisie Williams"

let keyName = 'playedBy';

character[keyName] = "Maisie Williams";


// - Using `alert` alert the value stored in key you added above `keyName` use the variable name to access

alert(charecter[keyName]);

// - Using the function `console.log` log the value of the key `42`. You don't have to add the key

console.log(charecter[42]);

// - Add a new key named `totalSeasons` with the value of `1 + 2 + 3 + 2`. Use this expression

charecter.totalSeasons = `1 + 2 + 3 + 2`;

// - Access the value of the key `totalSeason` (it should be 8)

console.log(charecter.totalSeasons);
