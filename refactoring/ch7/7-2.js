export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  // 읽기만 한다면 원본 데이터를 수정할 수 없게 복사본 제공
  get courses() {
    return [...this.#courses];
  }

  // 수정해야 한다면 제한된 기능만을 하는 메소드 제공
  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const course = new Course('리팩토링', true);
ellie.addCourse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => console.log('해당 코스는 없다!'));
console.log(ellie.courses.length);
ellie.removeCourse(course, () => console.log('해당 코스는 없다!'));
