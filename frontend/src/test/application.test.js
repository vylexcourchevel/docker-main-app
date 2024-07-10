// const express = require("express");
// const request = require("supertest");
// const livresRoute = require("../../routes/livres.route");
// //comme on teste une API on besoin de connaître la route o
// //pour y accéder
// const app = express();
// //on instancie une application
// app.use(express.json());
// //on crée un middleware vers le serveur
// app.use("/api/livres", livresRoute);
// //on accède à l'API via la route
// /* on écrit la procédure de test qui nous évitera de passer à
// chaque fois par des outils de test tels que Postman*/

// describe("test d'intégration pour l'API livres", () => {
//   it("shoud get all books with th command GET /api/livres", async () => {
//     const { body, statusCode } = await request(app).get("/api/livres");
//     expect(body).toEqual(
//       //le rendu est un tableau puisqu'il s'agit de récupérer les livres
//       expect.arrayContaining([
//         //le rendu est un tableau d'objets
//         expect.objectContaining({
//           id: expect.any(Number),
//           titre: expect.any(String),
//           auteur: expect.any(String),
//         }),
//       ])
//     );
//     expect(statusCode).toBe(200);
//   });
//   it("should return failure on invalid post body on /API/livres", async () => {
//     const { body, statusCode } = await request(app).post("/api/livres").send({
//       titre: "",
//       auteur: "",
//     });
//     expect(statusCode).toBe(400);
//     expect(body).toEqual({
//       errors: [
//         {
//           type: "field",
//           value: "",
//           msg: "le titre du livre est obligatoire",
//           path: "titre",
//           location: "body",
//         },
//         {
//           type: "field",
//           value: "",
//           msg: "l'auteur du livre est obligatoire",
//           path: "auteur",
//           location: "body",
//         },
//       ],
//     });
//   });
//   it("shoud return success on valid post body on /API/livres", async () => {
//     const { body, statusCode } = await request(app).post("/api/livres").send({
//       titre: "La dame aux Camélia",
//       auteur: "Alexandre Dumas fils",
//     });
//     expect(statusCode).toBe(200);
//     expect(body).toEqual({
//       message: "Succès",
//     });
//   });
//     });

//     //Suppression de livres

//     describe ("suppression de livre par id", () => {
//       it("shoud return success on invalide delete book by id on /API/livres", async () => {
//         const { body, statusCode } = await request(app).delete(`/api/livres/1`);
//         expect(statusCode).toBe(404);
//         expect(body).toEqual({  
//           error: true,
//           message: "livre non trouve",
//         });
//       });
//         });

//         //Ajout d'un livre par l'id 
  
//         describe ("Ajout d'un livre par l'id", () => {
//           it("shoud return success on valid get body on /API/livres", async () => {
//             const { body, statusCode } = await request(app).get("/api/livres");
  
//           });
// });
    
