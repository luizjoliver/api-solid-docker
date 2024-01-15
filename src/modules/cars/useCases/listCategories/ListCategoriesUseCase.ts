import { Category } from "../../model/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase{
    constructor(private categoriesRepository:ICategoriesRepository){

    }

    execute(): Category[] {

    const AllCategories = this.categoriesRepository.list()

    return AllCategories
    }

}

export {ListCategoriesUseCase}