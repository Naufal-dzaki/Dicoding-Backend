/*
 ############### Testing Code #########################
 - expect() merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, dapat berupa function atau perintah langsung
 - tobe() disebut dengan matcher berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya.
 - matcher dalam jest :
    => tobe(x) -> bahwa nilai ekspetasi yang diharapkan adalah x
    => toEqual(x) -> bahwa nilai ekspetasi yang diharapkan sama dengan x
    => toBeNull() -> bahwa nilai ekspetasi yang diharapkan adalah null
    => toBeTruthy -> bahaw nilai ekspetasi yang diharapkan adalah truth
    => toBeFalsy -> bahwa nilai ekspetasi yang diharapkan adalah false
*/

//unit test & integration test
/*
yang di uji :
  - fungsi menghitung rata-rata
  - fungsi untuk mengecek apakah siswa lulus ujian
ekspetasi : 
  - menghasilkan nilai sesuai dari inputan
  - inputan harus berupa angka
  - menghasilkan hasil kelulusan iya/tidak pada siswa dengan nilai kriteria tertentu
*/
const { averageExams, isStudentPassExam } = require("./../gradeCalculations");

// test("it should return exact average", () => {
//   const listValueOfExams = [80, 100, 100, 80];
//   expect(averageExams(listValueOfExams)).toEqual(90);
// });

// test('it should handle non-number ', () => {
//     const listValueOfExams = [80, 'a', '100', 80];
//     expect(() => averageExams(listValueOfExams)).toThrow();
// })

//grouping integration test and unit test
describe("grade calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });

  /**
   * Integration testing
   */
  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});

// run "npm run test -- --coverage"
