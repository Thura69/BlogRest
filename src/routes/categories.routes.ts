import { CreateCategorySchema } from './../schema/category.schema';
import { ValidateResource } from './../middlewares/ValidateResource';
 import { Express, Router } from 'express';
import { GetAllCategoriesController, PostCategoryController } from '../controllers/categoryController';

export function CategoriesRoute(app: Router) {
   
    //post category
    app.post('/category', ValidateResource(CreateCategorySchema), PostCategoryController);
    
    /**
     * @openapi
     *   /category:
     *     get:
     *      tags:
     *        - Category
     *      summary: all categories
     *      description: will retun all categories
     *      responses:
     *        200:
     *          description: Success
     */
    //get category
    app.get('/category', GetAllCategoriesController);

}
