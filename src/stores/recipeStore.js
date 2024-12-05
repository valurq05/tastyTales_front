import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecipesStore=defineStore("recipe", ()=>{
    //Datos de prueba
    const recipes=ref([
        {
          "name": "Spaghetti Carbonara",
          "shortDescription": "Pasta tradicional italiana con salsa cremosa.",
          "image": "https://www.gourmet.cl/wp-content/uploads/2016/12/Carbonara-editada.jpg",
          "qualification": 4.7
        },
        {
          "name": "Tacos al Pastor",
          "shortDescription": "Tacos mexicanos con carne de cerdo y piña.",
          "image": "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
          "qualification": 4.8
        },
        {
          "name": "Tiramisu",
          "shortDescription": "Postre de capas con sabor a cafe",
          "image": "https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg",
          "qualification": 4.6
        },
        {
          "name": "Hamburguesa Clásica",
          "shortDescription": "Hamburguesa con carne jugosa y queso.",
          "image": "https://files.lafm.com.co/assets/public/styles/4x3/public/2023-09/hamburguesa.jpg?VersionId=H0U7rS6ubVriERqJtUzz.K8asALgFmob&itok=xTBBXOLO",
          "qualification": 4.5
        },
        {
          "name": "Pizza Margherita",
          "shortDescription": "Pizza con tomate, mozzarella y albahaca fresca.",
          "image": "https://via.placeholder.com/300x200?text=Pizza+Margherita",
          "qualification": 4.9
        },
        {
          "name": "Ensalada César",
          "shortDescription": "Ensalada fresca con aderezo César y crutones.",
          "image": "https://via.placeholder.com/300x200?text=Ensalada+Cesar",
          "qualification": 4.4
        },
        {
          "name": "Ramen Japonés",
          "shortDescription": "Sopa japonesa con fideos y huevo.",
          "image": "https://via.placeholder.com/300x200?text=Ramen+Japones",
          "qualification": 4.7
        },
        {
          "name": "Paella Valenciana",
          "shortDescription": "Arroz español con mariscos y azafrán.",
          "image": "https://via.placeholder.com/300x200?text=Paella+Valenciana",
          "qualification": 4.8
        },
        {
          "name": "Ceviche Peruano",
          "shortDescription": "Pescado marinado en cítricos y ají.",
          "image": "https://via.placeholder.com/300x200?text=Ceviche+Peruano",
          "qualification": 4.9
        },
        {
          "name": "Pollo Tikka Masala",
          "shortDescription": "Pollo en salsa cremosa de especias.",
          "image": "https://via.placeholder.com/300x200?text=Pollo+Tikka+Masala",
          "qualification": 4.6
        },
        {
          "name": "Falafel",
          "shortDescription": "Bolas fritas de garbanzos y especias.",
          "image": "https://via.placeholder.com/300x200?text=Falafel",
          "qualification": 4.5
        },
        {
          "name": "Croissant",
          "shortDescription": "Pan francés hojaldrado y mantequilloso.",
          "image": "https://via.placeholder.com/300x200?text=Croissant",
          "qualification": 4.7
        },
        {
          "name": "Churros con Chocolate",
          "shortDescription": "Churros fritos con salsa de chocolate.",
          "image": "https://via.placeholder.com/300x200?text=Churros+con+Chocolate",
          "qualification": 4.8
        },
        {
          "name": "Arepas",
          "shortDescription": "Panecillos de maíz típicos de Venezuela y Colombia.",
          "image": "https://via.placeholder.com/300x200?text=Arepas",
          "qualification": 4.6
        },
        {
          "name": "Empanadas Argentinas",
          "shortDescription": "Empanadas rellenas de carne y especias.",
          "image": "https://via.placeholder.com/300x200?text=Empanadas+Argentinas",
          "qualification": 4.7
        },
        {
          "name": "Gyozas",
          "shortDescription": "Dumplings japoneses rellenos de cerdo.",
          "image": "https://via.placeholder.com/300x200?text=Gyozas",
          "qualification": 4.5
        },
        {
          "name": "Tom Kha Gai",
          "shortDescription": "Sopa tailandesa de coco con pollo.",
          "image": "https://via.placeholder.com/300x200?text=Tom+Kha+Gai",
          "qualification": 4.8
        },
        {
          "name": "Pad Thai",
          "shortDescription": "Fideos salteados tailandeses con maní.",
          "image": "https://via.placeholder.com/300x200?text=Pad+Thai",
          "qualification": 4.9
        },
        {
          "name": "Bagel con Salmón",
          "shortDescription": "Bagel con salmón ahumado y queso crema.",
          "image": "https://via.placeholder.com/300x200?text=Bagel+con+Salmon",
          "qualification": 4.5
        },
        {
          "name": "Brownie",
          "shortDescription": "Pastel de chocolate denso y delicioso.",
          "image": "https://via.placeholder.com/300x200?text=Brownie",
          "qualification": 4.9
        }
      ]
      )
    return{recipes}
});