import { plainToClass } from "class-transformer";
import { IsBoolean, IsNumber, IsString, validate } from "class-validator";

const jsonData = {
  "id": 1,
  "title": "Upgrade typescript runtime validation with class decorators",
  "done": false,
}

class Todo {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsBoolean()
  done: boolean;
}

// Object.assign() will clone jsonData into
// Todo class object Storing the new class
// object in a typescript variable
const todoClass = Object.assign(new Todo(), jsonData);
   
// Logging the output onto the console
console.log(todoClass);

const convertedClass = plainToClass(Todo, jsonData);
console.log(convertedClass);

validate(todoClass).then((errors) => {
  console.log(errors);
});




